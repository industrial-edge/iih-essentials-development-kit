import { Request, Response, Router } from 'express';
import * as express from 'express';
import { DataServiceClient } from './dataservice-client';
import {
    Value,
    Data,
    DataResult,
    DataSourceReference,
    CalculateParams,
    CalculateResult,
    CalculateResults,
    CalculateTrendParams,
    CalculateTrendResult,
    CalculateTrendResults,
    DeltaRequest
} from './interfaces';

import * as path from 'path';
import { setInterval } from 'timers';

const ONE_MINUTE = 60 * 1000;
const ONE_HOUR = 60 * ONE_MINUTE;

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
        // Return the number of configured assets, aspects and attributes.
        this.get(router, '/Status', this.getStatus);

        // Start cyclically retrieving of new attribute values.
        this.get(router, '/Attributes/:id/Monitor', this.startDataMonitor);

        // Stop cyclically retrieving of new attribute values.
        this.get(router, '/Attributes/StopMonitor', this.stopDataMonitor);

        // Retrieves all configured assets. 
        this.get(router, '/Assets', this.getAssets);

        // Retrieves the configuration of a specific asset. 
        this.get(router, '/Assets/:id', this.getAssetById);

        // Retrieves all configured attributes. 
        this.get(router, '/Attributes', this.getAttributes);

        // Retrieves the configuration of a specific attribute. 
        this.get(router, '/Attributes/:id', this.getAttribute);

        // Retrieves the data of a specific attribute from the last hour.
        this.get(router, '/Attributes/:id/DataOfLastHour', this.getDataOfLastHour);

        // Retrieves the average of a specific attribute from the last hour.
        this.get(router, '/Attributes/:id/AverageOfLastHour', this.getAverageOfLastHour);

        // Retrieves the average trend of a specific attribute from the last hour.
        this.get(router, '/Attributes/:id/AverageTrendOfLastHour', this.getAverageTrendOfLastHour);

        // Retrieves the newest value of a specified attribute.
        this.get(router, '/Attributes/:id/LatestValue', this.getLatestValue);

        // Serve the static frontend files. On the root '/' the 'index.html' is returned.
        router.use(express.static(path.join(__dirname, 'static'), { index: 'index.html' }));
    }

    /**
     * Return the number of configured assets, aspects and attributes.
     * The counts are read from the 'x-anchor-count' header of the anchor
     * collection endpoints without transferring the whole collections.
     * @param _request
     * @param response
     */
    private async getStatus(_request: Request, response: Response) {
        const api = new DataServiceClient();
        const [assets, aspects, attributes] = await Promise.all([
            api.getCount('DataService/anchor/v1/assets?take=1'),
            api.getCount('DataService/anchor/v1/aspects?take=1'),
            api.getCount('DataService/anchor-ex/v1/attributes?take=1')
        ]);
        this.returnSuccess(response, { assets, aspects, attributes });
    }

    private async getAssets(_request: Request, response: Response) {
        const api = new DataServiceClient();
        const assets = await api.doRequest('DataService/anchor/v1/assets');
        this.returnSuccess(response, assets);
    }

    private async getAssetById(request: Request, response: Response) {
        const assetId = this.getPathParameter(request, 'id');
        const api = new DataServiceClient();
        const asset = await api.doRequest(`DataService/anchor/v1/assets/${assetId}`);
        this.returnSuccess(response, asset);
    }

    private async getAttributes(_request: Request, response: Response) {
        const api = new DataServiceClient();
        const attributes = await api.doRequest(`DataService/anchor-ex/v1/attributes`);
        this.returnSuccess(response, attributes);
    }

    private async getAttribute(request: Request, response: Response) {
        const attributeId = this.getPathParameter(request, 'id');
        const api = new DataServiceClient();
        const attribute = await api.doRequest(`DataService/anchor-ex/v1/attributes/${attributeId}`);
        this.returnSuccess(response, attribute);
    }

    /**
     * Read the raw timeseries data of a single attribute selected via its id. The data
     * is read from the last hour.
     *
     * This example demonstrates the usage of the Data API of the Data Service.
     * @param request 
     * @param response 
     */
    private async getDataOfLastHour(request: Request, response: Response) {
        const attributeId = this.getPathParameter(request, 'id');
        const now = Date.now();
        const range = {
            from: (new Date(now - ONE_HOUR)).toISOString(),
            to: (new Date(now)).toISOString()
        };
        const api = new DataServiceClient();
        const dataResult = await api.doRequest<DataResult>(
            `DataService/Data/${attributeId}?from=${range.from}&to=${range.to}&order=Descending`);
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
     * Calculate the average of a single attribute selected via its id. The average is
     * calculated over the last hour. The requested timerange is aligned to full minutes.
     *
     * This example demonstrates the usage of the Calculate API of the Data Service.
     * @param request
     * @param response 
     */
    private async getAverageOfLastHour(request: Request, response: Response) {
        const attributeId = this.getPathParameter(request, 'id');
        const range = this.getAggregateTimeRange();
        const body: CalculateParams = {
            from: range.from,
            to: range.to,
            dataSources: [
                {
                    id: attributeId,
                    type: 'Variable',
                    aggregation: 'Average'
                }
            ]
        };
        const api = new DataServiceClient();
        const calculateResult = await api.doRequest<CalculateResults>('DataService/Calculate', 'POST', body);
        this.returnSuccess(response, calculateResult);
    }    

    /**
     * Calculate the average trend of a single attribute selected via its id. The average trend is
     * calculated over the last hour. The requested timerange is aligned to full minutes. The
     * calculation period is 10 minutes.
     *
     * This example demonstrates the usage of the CalculateTrend API of the Data Service.
     * @param request 
     * @param response 
     */
    private async getAverageTrendOfLastHour(request: Request, response: Response) {
        const attributeId = this.getPathParameter(request, 'id');
        const range = this.getAggregateTimeRange();
        const body: CalculateTrendParams = {
            calculationTimeRange: 10 * ONE_MINUTE,
            from: range.from,
            to: range.to,
            dataSources: [
                {
                    id: attributeId,
                    type: 'Variable',
                    aggregation: 'Average'
                }
            ]
        };
        const api = new DataServiceClient();
        const calculateTrendResult = await api.doRequest<CalculateTrendResults>('DataService/CalculateTrend', 'POST', body);
        this.returnSuccess(response, calculateTrendResult);
    } 

    /**
     * Read the latest value of a single attribute selected via its id.
     * 
     * This example demonstrates the usage of the Data/Delta API of the Data Service. 
     * @param request 
     * @param response 
     */
    private async getLatestValue(request: Request, response: Response) {
        const attributeId = this.getPathParameter(request, 'id');
        const body = [{
            variableId: attributeId
        }];
        const api = new DataServiceClient();
        const dataResult = await api.doRequest<DataResult>(`DataService/Data/Delta`, 'POST', body);
        this.returnSuccess(response, dataResult);
    }

    private readonly MONITOR_CYCLE = 5000; // 5 seconds.
    private dataMonitor: NodeJS.Timeout | null = null;

    /**
     * Read cyclically each 5 seconds all new values of a single attribute selected via its id.
     * The execution is running in the background and the values are logged to the console.
     * 
     * This example demonstrates how to run background tasks and how to call the API of the Data Service.
     */
    private async startDataMonitor(request: Request, response: Response) {
        if (this.dataMonitor !== null){
            throw new Error('Data monitoring is already started.');
        }
        const attributeId = this.getPathParameter(request, 'id');
        const body: DeltaRequest[] = [{
            variableId: attributeId
        }];
        const api = new DataServiceClient();
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
            info: `New attribute values will be requested each ${this.MONITOR_CYCLE/1000} seconds.`,
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

}
