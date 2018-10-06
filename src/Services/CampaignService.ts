import { AuthContext } from '../Core/AuthContext';
import { BaseService } from '../Core/BaseService';
import { HttpMethod } from '../Core/HttpMethod';

import { Campaign } from '../Models/Campaign';

export class CampaignService extends BaseService {
    constructor(authContext: AuthContext) {
        super(authContext);
    }
    
    protected get Url(): string { return super.Url + "campaign/campaign"; }

    public GetCampaigns(): Promise<Campaign[]> {
        return this.SendRequest<Campaign[]>(HttpMethod.GET);
    }

    public GetCampaign(campaignId: number): Promise<Campaign> {
        return this.SendRequest<Campaign>(HttpMethod.GET, {campaginId: campaignId});
    }
}
