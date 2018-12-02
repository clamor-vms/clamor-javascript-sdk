import { AuthContext } from "./AuthContext";
import { HttpMethod } from "./HttpMethod";
interface IBaseEndPoint {
    SendRequest<ReturnType>(method: HttpMethod, postData: {} | null): Promise<ReturnType>;
}
export declare class BaseEndPoint implements IBaseEndPoint {
    private _authContext;
    protected readonly Auth: AuthContext;
    protected readonly Url: string;
    private readonly FullUrl;
    constructor(authContext: AuthContext);
    SendRequest<ReturnType>(method: HttpMethod, postData?: {} | null): Promise<ReturnType>;
    protected AuthLogic(xhr: XMLHttpRequest): void;
    private DoesMethodHaveBody;
}
export declare function GetAllEndPointable<TRet>(): <T extends new (...args: any[]) => IBaseEndPoint>(constructor: T) => {
    new (...args: any[]): {
        GetAll(): Promise<TRet>;
        SendRequest<ReturnType_1>(method: HttpMethod, postData: {} | null): Promise<ReturnType_1>;
    };
} & T;
export declare function GetEndPointable<TRet>(): <T extends new (...args: any[]) => IBaseEndPoint>(constructor: T) => {
    new (...args: any[]): {
        Get(id: number): Promise<TRet>;
        SendRequest<ReturnType_1>(method: HttpMethod, postData: {} | null): Promise<ReturnType_1>;
    };
} & T;
export declare function PostEndPointable<TRet>(): <T extends new (...args: any[]) => IBaseEndPoint>(constructor: T) => {
    new (...args: any[]): {
        Post(body: TRet): Promise<TRet>;
        SendRequest<ReturnType_1>(method: HttpMethod, postData: {} | null): Promise<ReturnType_1>;
    };
} & T;
export declare function PutEndPointable<TRet>(): <T extends new (...args: any[]) => IBaseEndPoint>(constructor: T) => {
    new (...args: any[]): {
        Put(body: TRet): Promise<TRet>;
        SendRequest<ReturnType_1>(method: HttpMethod, postData: {} | null): Promise<ReturnType_1>;
    };
} & T;
export declare function DeleteEndPointable<TRet>(): <T extends new (...args: any[]) => IBaseEndPoint>(constructor: T) => {
    new (...args: any[]): {
        Delete(id: number): Promise<Boolean>;
        SendRequest<ReturnType_1>(method: HttpMethod, postData: {} | null): Promise<ReturnType_1>;
    };
} & T;
export {};
