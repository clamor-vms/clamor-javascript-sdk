import { AuthContext } from "./AuthContext";
export declare class BaseService {
    private _authContext;
    protected readonly Auth: AuthContext;
    constructor(authContext: AuthContext);
}
