export class AuthContext {
    private _domain: string;
    public get Domain(): string { return this._domain; }

    private _token: string;
    public get Token(): string { return this._token; }

    constructor(domain: string, token: string) {
        this._domain = domain;
        this._token = token;
    }
}
