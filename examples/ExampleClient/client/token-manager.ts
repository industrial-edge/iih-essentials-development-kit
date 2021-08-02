import { OAuthTokenResponse } from "../feature";
import { Constants } from "../helper/constants";
import { DataServiceClient } from "./dataservice-client";

interface CachedToken {
    authorization: string;
    expires: Date;
}
export class TokenManager{
    private static  cachedToken:string = '';

    public static async getAuthorizationToken(): Promise<string> {
        if(TokenManager.isTokenAvailable()){
            return TokenManager.cachedToken;
        }
        const helper: DataServiceClient = new DataServiceClient();
        const basicAuthentication = TokenManager.getBasicAuthentication(Constants.userName, Constants.password);
        const authenticationHeader = `Basic ${basicAuthentication}`;
        helper.setHeader('X-SPACE-AUTH-KEY', authenticationHeader);
        const appInfo =
            { appName: 'edgeappdataservice', appVersion: '1.1', hostTenant: 'edge', userTenant: 'edge' };
        const token = await helper.internalRequest<OAuthTokenResponse>('TokenManagerService/oauth/token', 'POST', appInfo);
        TokenManager.cachedToken = `Bearer ${token.body.access_token}`;
        return TokenManager.cachedToken;
    }
    static isTokenAvailable() {
        // The logic to parse the token and store the expired time should fit in here.
        return true;
    }

    private static getBasicAuthentication(id: string, secret: string): string {
        return Buffer.from(`${id}:${secret}`).toString('base64');
    }
}