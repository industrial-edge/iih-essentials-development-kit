import { DataServiceClient } from './dataservice-client';

export const AppUser = {
    userName: 'myuser',
    passWord: 'myPassword',
    familyName: 'myFamilyName',
    givenName: 'myGivenName',
    email: 'myemail@myemail.com',
    roles: [{
        application: 'edgeappdataservice',
        role: 'admin'
    }]
};

interface OAuthTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    jti: string;
}

/**
 * DEPRECATED.
 * This class uses the deprecated way to authorize an external application
 * so that it is able to access the REST API of the Data Service.
 * To keep backward compatibility this functionality is not removed from the
 * REST API of the Data Service.
 */
export class TokenManager {

    public reset() {
        TokenManager.USER_TOKEN = undefined;
        TokenManager.expiresAt = undefined;
    }

    /**
     * The authorization token of the AppUser.
     * It will be cached and used until it expires.
     */
    private static USER_TOKEN: OAuthTokenResponse | undefined;

    private static expiresAt: number | undefined;

    /**
     * Get an authorization token for the AppUser.
     * The AppUser has to be created first via the REST API of the Data Service.
     * This can be done with help of the the /User/Create endpoint of the REST API of the ExampleClient.
     * @returns
     */
    public async getUserToken(): Promise<OAuthTokenResponse> {
        if (TokenManager.expiresAt !== undefined) {
            if (Date.now() >= TokenManager.expiresAt){
                // Current token already expired. Clear it to force
                // recreation.
                TokenManager.USER_TOKEN = undefined;
                TokenManager.expiresAt = undefined;
            }
        }
        if (TokenManager.USER_TOKEN === undefined) {
            TokenManager.USER_TOKEN = await TokenManager.createUserToken();
            let expiresAt = Date.now();
            expiresAt += (TokenManager.USER_TOKEN.expires_in * 1000);
            expiresAt -= (60 * 1000); // Dont use it anymore one minute before it expires.
            TokenManager.expiresAt = expiresAt;
        }
        return TokenManager.USER_TOKEN;
    }

    private static async createUserToken(): Promise<OAuthTokenResponse> {
        const api = new DataServiceClient(null);
        api.setNoAuthentication();
        const basicAuthentication = this.getBasicAuthentication(AppUser.userName, AppUser.passWord);
        const authenticationHeader = `Basic ${basicAuthentication}`;
        api.setHeader('X-SPACE-AUTH-KEY', authenticationHeader);
        const appInfo = {
            appName: 'edgeappdataservice',
            appVersion: '1.1',
            hostTenant: 'edge',
            userTenant: 'edge'
        };
        const token = await api.doRequest<OAuthTokenResponse>('TokenManagerService/oauth/token', 'POST', appInfo);
        return token;
    }

    private static getBasicAuthentication(id: string, secret: string): string {
        return Buffer.from(`${id}:${secret}`).toString('base64');
    }
}