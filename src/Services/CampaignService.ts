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

import AuthContext from '../Core/AuthContext';
import BaseService from '../Core/BaseService';

import CampaignAboutEndPoint from './EndPoints/Campaign/CampaignAboutEndPoint';
import CampaignEndPoint from './EndPoints/Campaign/CampaignEndPoint';

export default class CampaignService extends BaseService {
    private _about: any;
    public get About(): any { return this._about; }

    private _campaign: any;
    public get Campaign(): any { return this._campaign; }

    constructor(authContext: AuthContext) {
        super(authContext);

        this._about = new CampaignAboutEndPoint(this.Auth);
        this._campaign = new CampaignEndPoint(this.Auth);
    }
}

