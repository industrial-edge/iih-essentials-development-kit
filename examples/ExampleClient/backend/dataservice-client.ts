import { Headers } from 'request';
import * as httpRequest from 'request-promise-native';

/**
 * This class implements the access to the REST API of the Data Service.
 */
export class DataServiceClient {

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
     * Read the total number of results provided by an anchor collection endpoint.
     * The overall count is returned in the 'x-anchor-count' response header, so
     * the whole collection does not need to be transferred to count its entries.
     * @param route The route of the anchor collection endpoint (e.g. anchor assets).
     * @returns The total number of entries in the collection.
     */
    public async getCount(route: string): Promise<number> {
        const url = this.getBaseUrl() + route;

        const requestOptions: httpRequest.RequestPromiseOptions = {
            resolveWithFullResponse: true,
            method: 'GET',
            headers: {}
        };

        const response = await httpRequest(url, requestOptions) as unknown as {
            headers: Record<string, string | undefined>;
        };
        const count = response.headers['x-anchor-count'];
        return count === undefined ? 0 : parseInt(count, 10);
    }
}