import { AuthContext } from "./AuthContext";
import { HttpMethod } from "./HttpMethod";
export declare class BaseService {
    private _authContext;
    protected readonly Auth: AuthContext;
    protected readonly Url: string;
    private readonly FullUrl;
    constructor(authContext: AuthContext);
    protected SendRequest<ReturnType>(method: HttpMethod, postData?: object | null): Promise<ReturnType>;
    protected AuthLogic(xhr: XMLHttpRequest): void;
    private DoesMethodHaveBody;
}
