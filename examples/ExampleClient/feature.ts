import { Request, Response, Router } from 'express';
import { DataServiceClient } from './dataservice-client';

import * as fs from 'fs';
import * as path from 'path';
import { setInterval } from 'timers';
import { AppUser, TokenManager } from './token-manager';

const ONE_MINUTE = 60 * 1000;
const ONE_HOUR = 60 * ONE_MINUTE;

interface Value {
    timestamp: string;
    value: string | number | boolean;
    qualitycode?: number;
}

interface Data {
    variableId: string;
    values: Value[];
    lastRequestTime?: string;
    error: unknown;
}

interface DataResult {
    data: Data[];
    hasMoreData?: {
        from: string;
        to: string;
    }
}

interface DataSourceReference {
    id: string;
    type: string;
    aggregation: string;
}

interface CalculateParams {
    from: string;
    to: string;
    dataSources: DataSourceReference[];
}

interface CalculateResult {
    dataSource: DataSourceReference;
    value: number;
}

type CalculateResults = CalculateResult[];

interface CalculateTrendParams extends CalculateParams {
    calculationTimeRange: number;
}

interface CalculateTrendResult {
    dataSource: DataSourceReference;
    values: Value[];
}

type CalculateTrendResults = CalculateTrendResult[];

interface DeltaRequest {
    variableId: string;
    lastRequestTime?: string;
}

/**
 * This class implements the REST API of the application.
 */
export class Feature {

    /**
     * Map the endpoints of the REST API to their implementation.
     * This method will be called in server.ts.
     * @param router
     */
    public setRoutes(router: Router) {

        // Return the home page of the application.
        this.get(router, '/', this.getInfo);

        // Start cyclically retrieving of new varaible values.
        this.get(router, '/Variables/:id/Monitor', this.startDataMonitor);

        // Stop cyclically retrieving of new varaible values.
        this.get(router, '/Variables/StopMonitor', this.stopDataMonitor);

        // Retrieves all configured assets. 
        this.get(router, '/Assets', this.getAssets);

        // Retrieves the configuration of a specific asset. 
        this.get(router, '/Assets/:id', this.getAssetById);

        // Retrieves all configured variables. 
        this.get(router, '/Variables', this.getVariables);

        // Retrieves the configuration of a specific variable. 
        this.get(router, '/Variables/:id', this.getVariable);

        // Retrieves the data of a specific variable from the last hour.
        this.get(router, '/Variables/:id/DataOfLastHour', this.getDataOfLastHour);

        // Retrieves the average of a specific variable from the last hour.
        this.get(router, '/Variables/:id/AverageOfLastHour', this.getAverageOfLastHour);

        // Retrieves the average trend of a specific variable from the last hour.
        this.get(router, '/Variables/:id/AverageTrendOfLastHour', this.getAverageTrendOfLastHour);

        // Retrieves the newest value of a specified variable.
        this.get(router, '/Variables/:id/LatestValue', this.getLatestValue);

        // Compatibility tests for the deprecated authentication method ...
        this.get(router, '/User/Create', this.createUser);
        this.get(router, '/User/Token', this.getUserToken);
        this.get(router, '/User', this.getUser);
        this.get(router, '/User/Delete', this.deleteUser);

        // Test how the api reacts for an unauthorized call.
        this.get(router, '/NoAuth', this.onNoAuth);
    }

    private async getInfo(_request: Request, response: Response) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(this.readIndexHtml());
    }

    private readIndexHtml(): string {
        try {
            const filePath = path.join(__dirname, 'index.html');
            const fileContent = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
            return fileContent;
        }
        catch (ex) {
            return ex.message;
        }
    }

    private async getAssets(request: Request, response: Response) {
        const api = new DataServiceClient(request);
        const assets = await api.doRequest('AssetService/Assets');
        this.returnSuccess(response, assets);
    }

    private async getAssetById(request: Request, response: Response) {
        const assetId = this.getPathParameter(request, 'id');
        const api = new DataServiceClient(request);
        const asset = await api.doRequest(`AssetService/Assets/${assetId}`);
        this.returnSuccess(response, asset);
    }

    private async getVariables(request: Request, response: Response) {
        const api = new DataServiceClient(request);
        const variables = await api.doRequest(`DataService/Variables`);
        this.returnSuccess(response, variables);
    }

    private async getVariable(request: Request, response: Response) {
        const variableId = this.getPathParameter(request, 'id');
        const api = new DataServiceClient(request);
        const variable = await api.doRequest(`DataService/Variables/${variableId}`);
        this.returnSuccess(response, variable);
    }

    /**
     * Read the raw timeseries data of a single variable selected via its id. The data
     * is read from the last hour.
     *
     * This example demonstrates the usage of the Data API of the Data Service.
     * @param request 
     * @param response 
     */
    private async getDataOfLastHour(request: Request, response: Response) {
        const variableId = this.getPathParameter(request, 'id');
        const now = Date.now();
        const range = {
            from: (new Date(now - ONE_HOUR)).toISOString(),
            to: (new Date(now)).toISOString()
        };
        const api = new DataServiceClient(request);
        const dataResult = await api.doRequest<DataResult>(
            `DataService/Data/${variableId}?from=${range.from}&to=${range.to}&order=Descending`);
        this.returnSuccess(response, dataResult);
    }

    /**
     * Get the timerange of the last hour, but aligned to full minutes.
     * @returns 
     */
    private getAggregateTimeRange(): { from: string; to: string; } {
        const now = Date.now();
        const toVal = Math.floor(now / ONE_MINUTE) * ONE_MINUTE;
        const fromVal = toVal - ONE_HOUR;
        return {
            from: (new Date(fromVal)).toISOString(),
            to: (new Date(toVal)).toISOString()
        };
    }

    /**
     * Calculate the average of a single variable selected via its id. The average is
     * calculated over the last hour. The requested timerange is aligned to full minutes.
     *
     * This example demonstrates the usage of the Calculate API of the Data Service.
     * @param request
     * @param response 
     */
    private async getAverageOfLastHour(request: Request, response: Response) {
        const variableId = this.getPathParameter(request, 'id');
        const range = this.getAggregateTimeRange();
        const body: CalculateParams = {
            from: range.from,
            to: range.to,
            dataSources: [
                {
                    id: variableId,
                    type: 'Variable',
                    aggregation: 'Average'
                }
            ]
        };
        const api = new DataServiceClient(request);
        const calculateResult = await api.doRequest<CalculateResults>('DataService/Calculate', 'POST', body);
        this.returnSuccess(response, calculateResult);
    }    

    /**
     * Calculate the average trend of a single variable selected via its id. The average trend is
     * calculated over the last hour. The requested timerange is aligned to full minutes. The
     * calculation period is 10 minutes.
     *
     * This example demonstrates the usage of the CalculateTrend API of the Data Service.
     * @param request 
     * @param response 
     */
    private async getAverageTrendOfLastHour(request: Request, response: Response) {
        const variableId = this.getPathParameter(request, 'id');
        const range = this.getAggregateTimeRange();
        const body: CalculateTrendParams = {
            calculationTimeRange: 10 * ONE_MINUTE,
            from: range.from,
            to: range.to,
            dataSources: [
                {
                    id: variableId,
                    type: 'Variable',
                    aggregation: 'Average'
                }
            ]
        };
        const api = new DataServiceClient(request);
        const calculateTrendResult = await api.doRequest<CalculateTrendResults>('DataService/CalculateTrend', 'POST', body);
        this.returnSuccess(response, calculateTrendResult);
    } 

    /**
     * Read the latest value of a single variable selected via its id.
     * 
     * This example demonstrates the usage of the Data/Delta API of the Data Service. 
     * @param request 
     * @param response 
     */
    private async getLatestValue(request: Request, response: Response) {
        const variableId = this.getPathParameter(request, 'id');
        const body = [{
            variableId
        }];
        const api = new DataServiceClient(request);
        const dataResult = await api.doRequest<DataResult>(`DataService/Data/Delta`, 'POST', body);
        this.returnSuccess(response, dataResult);
    }

    private readonly MONITOR_CYCLE = 5000; // 5 seconds.
    private dataMonitor: NodeJS.Timeout | null = null;

    /**
     * Read cyclically each 5 seconds all new values of a single variable selected via its id.
     * The execution is running in the background and the values are logged to the console.
     * 
     * This example demonstrates how to run background tasks and how to call the API of the Data Service
     * without the credentials of the interactive user. 
     */
    private async startDataMonitor(request: Request, response: Response) {
        if (this.dataMonitor !== null){
            throw new Error('Data monitoring is already started.');
        }
        const variableId = this.getPathParameter(request, 'id');
        const body: DeltaRequest[] = [{
            variableId
        }];
        const api = new DataServiceClient(null);
        const dataResult = await api.doRequest<DataResult>(`DataService/Data/Delta`, 'POST', body);
        const data = dataResult.data[0];
        if (data.error){
            throw data.error;
        }
        let lastRequestTime = data.lastRequestTime;
        this.dataMonitor = setInterval( async (): Promise<void> => {
            try {
                body[0].lastRequestTime = lastRequestTime;
                const deltaResult = await api.doRequest<DataResult>(`DataService/Data/Delta`, 'POST', body);
                const data = deltaResult.data[0];
                if (data.error === undefined) {
                    console.log(`Monitor - new values:`);
                    const cnt = data.values.length;
                    if (cnt === 0){
                        console.log(`  none`);
                    }
                    else {
                        for (const value of data.values){
                            console.log(`  timestamp=${value.timestamp}, value=${value.value}`);
                        }
                    }
                }
                else {
                    console.log(JSON.stringify(data.error, undefined, 2));
                }
                lastRequestTime = data.lastRequestTime;
            }
            catch (ex){
                const str = this.stringifyError(ex);
                console.log(str);
            }
        }, this.MONITOR_CYCLE);
        console.log(`Monitor - started.`);
        this.returnSuccess(response, {
            success: true,
            info: `New variable values will be requested each ${this.MONITOR_CYCLE/1000} seconds.`,
            where: 'See log output of the application.'
        });
    }

    /**
     * Stop the background task started with Monitor. 
     * @param _request
     * @param response 
     */
    private async stopDataMonitor(_request: Request, response: Response) {
        if (this.dataMonitor === null){
            throw new Error('Data monitoring is not started.');
        }
        clearInterval(this.dataMonitor);
        this.dataMonitor = null;
        console.log(`Monitor - stopped.`);
        this.returnSuccess(response, { success: true });
    }

    /**
     * Read a parameter like the id from the path.
     * @param request
     * @param name 
     * @returns 
     */
    private getPathParameter(request: Request, name: string): string {
        const value = this.getProperty(request.params, name);
        if (typeof value === 'string') {
            return value;
        }
        throw new Error(`Missing path parameter ${name}`);
    }

    private getProperty(target: object, name: string): unknown {
        const pd = Object.getOwnPropertyDescriptor(target, name);
        if (pd) {
            return pd.value;
        }
        else {
            return undefined;
        }
    }

    private get(router: Router, path: string, func: (request: Request, response: Response) => Promise<void>) {
        router.get(path, this.apiWrapper(func.bind(this)));
    }

    /**
     * Wrap an REST API endpoint implementation into a try/catch block. 
     * @param func
     * @returns 
     */
    private apiWrapper(func: (request: Request, response: Response) => Promise<void>) {
        return async (request: Request, response: Response): Promise<void> => {
            try {
                await func(request, response);
            }
            catch (err) {
                this.returnError(response, err);
            }
        };
    }

    /**
     * Central error handler called from apiWrapper in case of an exception.
     * @param response 
     * @param err 
     */
    private returnError(response: Response, err: Error): void {
        response.writeHead(500, { 'Content-Type': 'application/json' });
        const str = this.stringifyError(err); 
        response.end(str);
    }

    /**
     * Prepare an error object to return from an REST API endpoint or to
     * log to the console.
     * @param _err
     * @returns 
     */
    private stringifyError(_err: Error): string {
        const err: any = Object.assign({}, _err);
        err.name = _err.name;
        err.message = _err.message;
        if (err.name === 'StatusCodeError'){
            if (typeof err.response === 'object'){
                if (typeof err.response.body === 'string'){
                    try {
                        // Manually format responses from the DataService to make it
                        // better readably and remove redundant information.
                        err.response.body = JSON.parse(err.response.body);
                        err.message = undefined;
                        err.error = undefined;
                    }
                    catch (ex){
                        // No problem. Keep everything as it is.
                    }
                }
            }
        }
        return JSON.stringify(err, undefined, 2);
    }

    /**
     * Return the result of an REST API endpoint.
     * @param response
     * @param result 
     */
    private returnSuccess(response: Response, result: unknown): void {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(result, undefined, 2));
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    // Deprecated authentication method.
    //
    ///////////////////////////////////////////////////////////////////////////

    /**
     * Create the AppUser.
     * Needs to be called with the interactive user credentials.
     * @param request 
     * @param response 
     */
    private async createUser(request: Request, response: Response) {
        const api = new DataServiceClient(request);
        const appUser = AppUser;
        const createdUser = await api.doRequest('TokenManagerService/Users', 'POST', appUser);
        this.returnSuccess(response, createdUser);
    }

    private async getUserToken(_request: Request, response: Response) {
        const tokenManager = new TokenManager();
        const userToken = await tokenManager.getUserToken();
        this.returnSuccess(response, userToken);
    }

    private async getUser(_request: Request, response: Response) {
        const api = new DataServiceClient(null);
        api.setNoAuthentication();
        const tokenManager = new TokenManager();
        const token = await tokenManager.getUserToken();
        api.setHeader('Authorization', `Bearer ${token.access_token}`);
        const user = await api.doRequest('TokenManagerService/Users/Me');
        this.returnSuccess(response, user);
    }

    private async deleteUser(_request: Request, response: Response) {
        const api = new DataServiceClient(null);
        api.setNoAuthentication();
        const tokenManager = new TokenManager();
        const token = await tokenManager.getUserToken();
        api.setHeader('Authorization', `Bearer ${token.access_token}`);
        const user = await api.doRequest<{id: string}>('TokenManagerService/Users/Me');
        const deletedUser = await api.doRequest('TokenManagerService/Users/' + user.id, 'DELETE');
        tokenManager.reset();
        this.returnSuccess(response, deletedUser);
    }

    /**
     * Test how the REST API of the Data Service reacts if it called without
     * authorization.
     * @param request
     * @param response 
     */
    private async onNoAuth(request: Request, response: Response) {
        const api = new DataServiceClient(request);
        api.setNoAuthentication();
        const assets = await api.doRequest('AssetService/Assets');
        this.returnSuccess(response, assets);
    }

}