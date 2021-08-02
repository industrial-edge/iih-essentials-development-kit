import { Headers } from 'request';
import * as httpRequest from 'request-promise-native';
import { HttpState } from '../helper/http-status';

export interface BackendServiceResultEx<T_RESPONSE = unknown> {
    statusCode: number;
    headers?: Headers;
    body: T_RESPONSE;
}
export class DataServiceClient {

    constructor() {

    }
    private additionalHeaders?: Map<string, string | string[]>;

    private url = 'http://edgeappdataservice:4203/';

    public setHeader(name: string, value: string | string[] | undefined) {
        if (value === undefined) {
            return;
        }
        if (this.additionalHeaders === undefined) {
            this.additionalHeaders = new Map<string, string | string[]>();
        }

        this.additionalHeaders.set(name, value);
    }
    public async internalRequest<T_RESPONSE>(
        route: string,
        method: string = 'GET',
        body: object | null
    ): Promise<BackendServiceResultEx<T_RESPONSE>> {
        try {
            const result = await this.internalDoRequest<T_RESPONSE>(route, method, body);
            return result;
        }
        catch (ex) {

            return {
                statusCode: HttpState.ServerError,
                body: JSON.parse(JSON.stringify((ex as Error).message))
            };
        }
    }
    private async internalDoRequest<T_RESPONSE>(
        route: string,
        method: string = 'GET',
        body: object | null
    ): Promise<BackendServiceResultEx<T_RESPONSE>> {

        const url = this.url + route;

        const headers: Headers = {};

        const requestOptions: httpRequest.RequestPromiseOptions = {
            resolveWithFullResponse: true,
            method
        };

        if (this.additionalHeaders !== undefined) {
            for (const name of this.additionalHeaders.keys()) {
                headers[name] = this.additionalHeaders.get(name);
                console.log('bname = ' + name);
                console.log('headers = ' + this.additionalHeaders.get(name));
            }
        }

        if (body !== null) {
            const strJson = JSON.stringify(body);
            const lenJson = Buffer.byteLength(strJson);
            headers['Content-Type'] = 'application/json';
            headers['Content-Length'] = lenJson;

            requestOptions.body = strJson;
        }
        requestOptions.headers = headers;

        let fullResponse: httpRequest.FullResponse;


        fullResponse = await httpRequest(url, requestOptions);

        return {
            statusCode: fullResponse.statusCode,
            headers: fullResponse.headers,
            body: this.tryParse(fullResponse.body) as T_RESPONSE
        };
    }

    private tryParse(body: unknown, dontParse: boolean = false): unknown {
        if ((dontParse === true) || (typeof body !== 'string')) {
            return body;
        }
        try {
            return JSON.parse(body);
        }
        catch {
            return body;
        }
    }
}