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
const GetAllEndPointable_1 = require("../../../Core/GetAllEndPointable");
const GetEndPointable_1 = require("../../../Core/GetEndPointable");
const PostEndPointable_1 = require("../../../Core/PostEndPointable");
const PutEndPointable_1 = require("../../../Core/PutEndPointable");
const DeleteEndPointable_1 = require("../../../Core/DeleteEndPointable");
class CampaignEndPoint extends BaseEndPoint_1.default {
    get Url() { return super.Url + "campaign/campaign"; }
}
exports.default = GetAllEndPointable_1.default()(GetEndPointable_1.default()(PostEndPointable_1.default()(PutEndPointable_1.default()(DeleteEndPointable_1.default()(CampaignEndPoint)))));
