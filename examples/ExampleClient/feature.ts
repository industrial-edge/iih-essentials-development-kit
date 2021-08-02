import { Request, Response, Router } from 'express';
import { BackendServiceResultEx, DataServiceClient } from './client/dataservice-client';
import { TokenManager } from './client/token-manager';
import { DefaultAsset } from './model/asset';
import { DefaultUser } from './model/user';
import { DefaultVariable } from './model/variable';


export interface OAuthTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    jti: string;
}

export class Feature {

    constructor() {

    }
    public setRoutes(router: Router) {
        // Creates a user using the credentials avaialble in the /model/user for default user change
        router.get('/', this.getInfo.bind(this));

        // Creates a user using the credentials avaialble in the /model/user for default user change
        router.get('/User/create', this.createUser.bind(this));

        // Retrieves all assets created by the configuration UI of DataService. 
        router.get('/Assets/All', this.getAssets.bind(this));
        // Retrieves specific assets created by the configuration UI of DataService. 
        router.get('/Assets/:id', this.getAssetWithId.bind(this));

        // Retrieves all variables created by the configuration UI of DataService. 
        router.get('/Variables/All', this.getVariables.bind(this));
        // Retrieves specific variables created by the configuration UI of DataService. 
        router.get('/Variables/:id', this.getVariable.bind(this));
        // Retrieves data for the created by the configuration UI of DataService.
        // This timeseries information is avaialble on the mqtt and stored in data service
        router.get('/TimeSeries/:id', this.getTimeSeries.bind(this));
    }

    private getInfo(request: Request, response: Response) {
        response.writeHead(200);
        response.end('Application example server is running. See feature.ts for available routes like "/Assets/All", /TimeSeries/:id, etc.');
    }

    private async createUser(request: Request, response: Response) {
        /* The below calls for user creation is just a concept that user can be created in this manner */

        const helper: DataServiceClient = new DataServiceClient();
        // Token creation is not needed since token will be created after this user is created.
        // Create user works currently without token as we proceed pixeom tokens can be used.
        const userResponse = await helper
            .internalRequest('TokenManagerService/users/', 'POST', DefaultUser());
        this.handleResponse(response, userResponse);
    }
    private async getAuthToken(request: Request, response: Response) {
        const token = TokenManager.getAuthorizationToken();
        response.end();
    }
    private async getAssets(request: Request, response: Response) {
        const helper: DataServiceClient = new DataServiceClient();
        const authorization: string = await TokenManager.getAuthorizationToken();
        helper.setHeader('authorization', authorization);
        const assetResponse = await helper
            .internalRequest('AssetService/Assets/', 'GET', null);
        const assets = assetResponse.body;
        this.handleResponse(response, assetResponse);
    }
    private async getAssetWithId(request: Request, response: Response) {
        const assetId = this.getProperty(request.params, 'id');
        if (assetId) {
            const helper: DataServiceClient = new DataServiceClient();
            const authorization: string = await TokenManager.getAuthorizationToken();
            helper.setHeader('authorization', authorization);
            const assetResponse = await helper
                .internalRequest(`AssetService/Assets/${assetId}`, 'GET', null);
            this.handleResponse(response, assetResponse);
        }
    }
    private async getVariables(request: Request, response: Response) {

        const helper: DataServiceClient = new DataServiceClient();
        const authorization: string = await TokenManager.getAuthorizationToken();
        helper.setHeader('authorization', authorization);
        //create an asset with specific id
        const assetResponse = await helper
            .internalRequest(`DataService/Variables`, 'GET', null);
        this.handleResponse(response, assetResponse);
    }
    private async getVariable(request: Request, response: Response) {

        const helper: DataServiceClient = new DataServiceClient();
        const authorization: string = await TokenManager.getAuthorizationToken();
        helper.setHeader('authorization', authorization);
        const variableId = this.getProperty(request.params, 'id');
        const assetResponse = await helper
            .internalRequest(`DataService/Variables/${variableId}`, 'GET', null);
        this.handleResponse(response, assetResponse);
    }
    private async getTimeSeries(request: Request, response: Response) {
        const variableId = this.getProperty(request.params, 'id');
        const helper: DataServiceClient = new DataServiceClient();
        const authorization: string = await TokenManager.getAuthorizationToken();
        helper.setHeader('authorization', authorization);
        const route = this.constructURLFromRequest(request, `${variableId}`);
        const timeSeriesResponse = await helper
            .internalRequest(route, 'GET', null);
        this.handleResponse(response, timeSeriesResponse);

    }
    constructURLFromRequest(req: Request, variableId : string): string {
        const from = new Date('2020-01-01T00:00:00.000Z');
        const to = new Date('2020-01-02T00:00:00.000Z');
        const limit = this.getProperty(req, 'limit');
        const ascending = this.getProperty(req, 'ascending');

        let route = `DataService/Data/${variableId}?from=${from.toISOString()}&to=${to.toISOString()}`;
        if (limit) {
            route += `&limit=${limit}`;
        }
        if (ascending === true) {
            route += `&order=Ascending`;
        }
        else if (ascending === false) {
            route += `&order=Descending`;
        }
        return route;
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
    private handleResponse(response: Response<any>, apiresponse: BackendServiceResultEx<unknown>) {
        response.writeHead(apiresponse.statusCode, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(apiresponse.body, undefined, 2));
    }
}