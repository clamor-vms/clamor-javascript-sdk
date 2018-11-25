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
const HttpMethod_1 = require("../Core/HttpMethod");
class AuthAboutService extends BaseService_1.BaseService {
    constructor(authContext) {
        super(authContext);
    }
    get Url() { return "/auth/about"; }
    GetAuthServiceInfo() {
        return this.SendRequest(HttpMethod_1.HttpMethod.GET);
    }
}
exports.AuthAboutService = AuthAboutService;