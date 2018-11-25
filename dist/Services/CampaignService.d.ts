import { AuthContext } from '../Core/AuthContext';
import { BaseService } from '../Core/BaseService';
import { Campaign } from '../Models/Campaign';
export declare class CampaignService extends BaseService {
    constructor(authContext: AuthContext);
    protected readonly Url: string;
    GetCampaigns(): Promise<Campaign[]>;
    GetCampaign(campaignId: number): Promise<Campaign>;
    CreateCampaign(campaign: Campaign): Promise<Campaign>;
    UpdateCampaign(campaign: Campaign): Promise<Campaign>;
    DeleteCampaign(campaignId: number): Promise<Boolean>;
}
