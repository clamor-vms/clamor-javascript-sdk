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
const BaseEndPoint_1 = require("../../../Core/BaseEndPoint");
class CampaignEndPoint extends BaseEndPoint_1.BaseEndPoint {
    get Url() { return super.Url + "campaign/campaign"; }
}
exports.default = BaseEndPoint_1.GetAllEndPointable()(BaseEndPoint_1.GetEndPointable()(BaseEndPoint_1.PostEndPointable()(BaseEndPoint_1.PutEndPointable()(BaseEndPoint_1.DeleteEndPointable()(CampaignEndPoint)))));
