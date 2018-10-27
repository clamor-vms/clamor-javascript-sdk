/*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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
