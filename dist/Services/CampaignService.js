"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const BaseService_1 = require("../Core/BaseService");
const CampaignAboutEndPoint_1 = require("./EndPoints/Campaign/CampaignAboutEndPoint");
const CampaignEndPoint_1 = require("./EndPoints/Campaign/CampaignEndPoint");
class CampaignService extends BaseService_1.default {
    get About() { return this._about; }
    get Campaign() { return this._campaign; }
    constructor(authContext) {
        super(authContext);
        this._about = new CampaignAboutEndPoint_1.default(this.Auth);
        this._campaign = new CampaignEndPoint_1.default(this.Auth);
    }
}
exports.default = CampaignService;
