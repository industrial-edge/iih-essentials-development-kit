import { Headers } from 'request';
import * as httpRequest from 'request-promise-native';
import { Request } from 'express';
import { AuthService } from './authservice';

/**
 * This class implements the access to the REST API of the Data Service.
 */
export class DataServiceClient {

    /**
     * The request object in case that the interactive user token should
     * be used when accessing the REST API of the Data Service.
     * If set to null the AuthService will be used for authentication.
     */
    private request: Request | null;

    constructor(request: Request | null) {
        this.request = request;
    }

    /**
     * Get the base url for accessing the REST API of the Data Service depending
     * on the environment.
     * @returns
     */
    private getBaseUrl(): string {
        if (process.env.LOCAL_RUN === 'true') {
            // Url used when running npm run start on the local machine.
            return 'http://localhost:4203/';
        }
        else {
            // Url used when deployed on the edge device.
            return 'http://edgeappdataservice:4203/';
        }
    }

    /**
     * Access an endpoint of the REST API of the Data Service.
     * @param route  The route of the endpoint to access. The base url will be appended automatically.
     * @param method GET, POST, PUT or DELETE. If not specified GET is used.
     * @param body   Optional body in case of a POST or PUT call.
     * @returns The response from the Data Service.
     */
    public async doRequest<T_RESPONSE>(
        route: string,
        method: string = 'GET',
        body: object | null = null): Promise<T_RESPONSE> {

        const headers: Headers = {};

        if (this.additionalHeaders !== undefined) {
            for (const [name, value] of this.additionalHeaders) {
                headers[name] = value;
            }
        }     

        if (this.noAuthentication === false) {
            if (this.request){
                // Transfer the authToken cookie to the DataService for
                // authentication via the interactive user.            
                if (this.request.cookies) {
                    const authToken = this.request.cookies.authToken;
                    if (authToken){
                        headers['Cookie'] = `authToken=${authToken}`;
                    }
                }
            }
            else {
                // Transfer the appToken read from the appsecrets.json for
                // authentication via the technical user.
                const authService = new AuthService();
                const appToken = authService.appToken;
                headers['Cookie'] = `authToken=${appToken}`;
            }
        }

        const url = this.getBaseUrl() + route;

        const requestOptions: httpRequest.RequestPromiseOptions = {
            resolveWithFullResponse: false,
            method
        };

        if (body !== null) {
            const strJson = JSON.stringify(body);
            const lenJson = Buffer.byteLength(strJson);
            headers['Content-Type'] = 'application/json';
            headers['Content-Length'] = lenJson;
            requestOptions.body = strJson;
        }

        requestOptions.headers = headers;

        const result = await httpRequest(url, requestOptions);
        return JSON.parse(result) as T_RESPONSE;
    }

    /**
     * Set an additional HTTP header for the REST API request.
     * @param name  Name of the HTTP header.
     * @param value Value of the HTTP header.
     */
    public setHeader(name: string, value: string) {
        if (this.additionalHeaders === undefined) {
            this.additionalHeaders = new Map<string, string>();
        }
        this.additionalHeaders.set(name, value);
    }

    private additionalHeaders?: Map<string, string>;

    /**
     * Dont append any authentication info automatically.
     * Only used for test purposes.
     */
    public setNoAuthentication() {
        this.noAuthentication = true;
    }

    private noAuthentication: boolean = false;
}