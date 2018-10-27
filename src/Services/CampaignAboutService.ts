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
