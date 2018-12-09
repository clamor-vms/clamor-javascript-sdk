import AuthContext from "./AuthContext";
export default class BaseService {
    private _authContext;
    protected readonly Auth: AuthContext;
    constructor(authContext: AuthContext);
}
