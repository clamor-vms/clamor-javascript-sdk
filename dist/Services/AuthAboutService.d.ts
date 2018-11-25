import { AuthContext } from '../Core/AuthContext';
import { BaseService } from '../Core/BaseService';
import { AuthAbout } from '../Models/AuthAbout';
export declare class AuthAboutService extends BaseService {
    constructor(authContext: AuthContext);
    protected readonly Url: string;
    GetAuthServiceInfo(): Promise<AuthAbout>;
}
