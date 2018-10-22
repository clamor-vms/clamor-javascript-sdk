import { AuthContext } from '../Core/AuthContext';
import { BaseService } from '../Core/BaseService';
import { HttpMethod } from '../Core/HttpMethod';

import { AuthAbout } from '../Models/AuthAbout';

export class AuthAboutService extends BaseService {
    constructor(authContext: AuthContext) {
        super(authContext);
    }
    
    protected get Url(): string { return "/auth/about"; }

    public GetAuthServiceInfo(): Promise<AuthAbout> {
        return this.SendRequest<AuthAbout>(HttpMethod.GET);
    }
}
