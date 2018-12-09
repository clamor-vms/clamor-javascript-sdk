export default class AuthContext {
    private _domain;
    readonly Domain: string;
    private _token;
    readonly Token: string;
    constructor(domain: string, token: string);
}
