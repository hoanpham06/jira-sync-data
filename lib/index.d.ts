declare class Auth {
    username: string;
    password: string;
}
declare class JiraConfigs {
    protocol: string;
    host: string;
    username: string;
    password: string;
}
declare class BaseOptions {
    auth: Auth;
}
export default class JiraIntegrate {
    protocol: string;
    host: string;
    baseOptions: BaseOptions;
    constructor(options: JiraConfigs);
    getAllProjects(): Promise<any>;
}
export {};
