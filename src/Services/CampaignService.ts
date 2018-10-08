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

    public CreateCampaign(campaign: Campaign): Promise<Campaign> {
        return this.SendRequest<Campaign>(HttpMethod.POST, {campaign: campaign});
    }

    public UpdateCampaign(campaign: Campaign): Promise<Campaign> {
        return this.SendRequest<Campaign>(HttpMethod.PUT, {campaign: campaign});
    }
    
    public DeleteCampaign(campaignId: number): Promise<Boolean> {
        return this.SendRequest<Boolean>(HttpMethod.DELETE, {campaginId: campaignId});
    }
}
