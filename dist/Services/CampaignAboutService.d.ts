import { AuthContext } from '../Core/AuthContext';
import { BaseService } from '../Core/BaseService';
import { CampaignAbout } from '../Models/CampaignAbout';
export declare class CampaignAboutService extends BaseService {
    constructor(authContext: AuthContext);
    protected readonly Url: string;
    GetCampaignServiceInfo(): Promise<CampaignAbout>;
}
