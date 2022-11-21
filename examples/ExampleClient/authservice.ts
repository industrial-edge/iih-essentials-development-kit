import * as fs from 'fs';

/**
 * Definition of the content of the appsecrets.json file.
 */
interface AuthData {
    AppID: string;
    SecretKey: string;
};

/**
 * Class to use the AuthService of the edge device.
 */
export class AuthService {

    private static APP_TOKEN: string | undefined;

    public get appToken(): string {
        if (AuthService.APP_TOKEN === undefined){
            AuthService.APP_TOKEN = AuthService.createAppToken();
        }
        return AuthService.APP_TOKEN;
    }

    private static createAppToken(): string {
        const authData = this.readAuthData();
        if (authData === undefined){
            return 'undefined';
        }
        const content = `${authData.AppID}:${authData.SecretKey}`;
        const buffer = Buffer.from(content);
        const encodedContent = buffer.toString('base64');
        return `basic ${encodedContent}`;
    }

    /**
     * Path used when deployed on the edge device.
     * The path must match with the configured volume for the AuthService
     * in the docker-compose.yml.
     */
    private static readonly PATH_TO_APPSECRETS_JSON = '/src/app/appsecrets.json';

    private static readAuthDataFile(): string | undefined {
        try {
            const path = this.PATH_TO_APPSECRETS_JSON;
            const fileContent = fs.readFileSync(path, 'utf8').replace(/^\uFEFF/, '');
            return fileContent;
        }
        catch (ex) {
            console.log('authservice.ts: ' + ex.message);
        }
    }

    private static readAuthData(): AuthData | undefined {
        if (process.env.LOCAL_RUN === 'true') {
            // Used when running npm run start on the local machine. The following
            // app credentials will be accepted by the development kit.
            return {
                AppID: '4e27fc4ae0bd49d6af6f8c0341a46dee',
                SecretKey: '5f3cfbbb69834b4da47cab33902f9a89'
            };
        }
        const fileContent = this.readAuthDataFile();
        if (fileContent === undefined) {
            return undefined;
        }
        try {
            const fileObject = JSON.parse(fileContent);
            const AppID = fileObject.AppID;
            const SecretKey = fileObject.SecretKey;
            if ((typeof AppID === 'string') &&
                (typeof SecretKey === 'string')) {
                if (AppID && SecretKey){
                    return {
                        AppID,
                        SecretKey
                    };
                }
            }
            console.log(`authservice.ts: AppID or SecretKey not found in ${this.PATH_TO_APPSECRETS_JSON}`);
        }
        catch (ex) {
            console.log('authservice.ts: ' + ex.message);
        }
    }
}