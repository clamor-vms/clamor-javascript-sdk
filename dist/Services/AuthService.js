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
const AuthAboutEndPoint_1 = require("./EndPoints/Auth/AuthAboutEndPoint");
class AuthService extends BaseService_1.BaseService {
    get About() { return this._about; }
    constructor(authContext) {
        super(authContext);
        this._about = new AuthAboutEndPoint_1.default(this.Auth);
    }
}
exports.AuthService = AuthService;
