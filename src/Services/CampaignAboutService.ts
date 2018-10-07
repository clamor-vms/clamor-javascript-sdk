import { AuthContext } from '../Core/AuthContext';
import { BaseService } from '../Core/BaseService';
import { HttpMethod } from '../Core/HttpMethod';

import { CampaignAbout } from '../Models/CampaignAbout';

export class CampaignAboutService extends BaseService {
    constructor(authContext: AuthContext) {
        super(authContext);
    }
    
    protected get Url(): string { return "/campaign/about"; }

    public GetCampaignServiceInfo(): Promise<CampaignAbout> {
        return this.SendRequest<CampaignAbout>(HttpMethod.GET);
    }
}
