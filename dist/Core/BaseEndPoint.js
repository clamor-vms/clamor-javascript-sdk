"use strict";
/*
        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU Affero General Public License as
        published by the Free Software Foundation, either version 3 of the
        License, or (at your option) any later version.

        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.    See the
        GNU Affero General Public License for more details.

        You should have received a copy of the GNU Affero General Public License
        along with this program.    If not, see <https://www.gnu.org/licenses/>.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ObjectUtils_1 = require("../Utils/ObjectUtils");
const HttpMethod_1 = require("./HttpMethod");
class BaseEndPoint {
    get Auth() {
        return this._authContext;
    }
    get Url() {
        return "/";
    }
    get FullUrl() {
        return this.Auth.Domain + this.Url;
    }
    constructor(authContext) {
        this._authContext = authContext;
    }
    SendRequest(method, postData = null) {
        return new Promise((resolve, reject) => {
            let url = this.FullUrl;
            let xhr = new XMLHttpRequest();
            switch (method) {
                case HttpMethod_1.HttpMethod.GET:
                    if (postData) {
                        url = url + "?" + ObjectUtils_1.ObjectUtils.BuildQueryString(postData);
                    }
                    break;
                case HttpMethod_1.HttpMethod.POST:
                    break;
                case HttpMethod_1.HttpMethod.PUT:
                    break;
                case HttpMethod_1.HttpMethod.DELETE:
                    if (postData) {
                        url = url + "?" + ObjectUtils_1.ObjectUtils.BuildQueryString(postData);
                    }
                    break;
            }
            xhr.open(method, url);
            this.AuthLogic(xhr);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    let result = JSON.parse(xhr.responseText);
                    resolve(result);
                }
                else {
                    try {
                        reject(new Error(JSON.stringify({
                            message: "invalid response.",
                            xhr: xhr,
                            data: JSON.parse(xhr.responseText)
                        })));
                    }
                    catch (e) {
                        reject(new Error(JSON.stringify({
                            message: "invalid response.",
                            xhr: xhr,
                            data: xhr.responseText,
                            exception: e
                        })));
                    }
                }
            };
            if (this.DoesMethodHaveBody(method)) {
                xhr.send(JSON.stringify(postData));
            }
            else {
                xhr.send();
            }
        });
    }
    AuthLogic(xhr) {
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("Authorization", "Bearer " + this.Auth.Token);
    }
    DoesMethodHaveBody(method) {
        if (method === HttpMethod_1.HttpMethod.POST || method === HttpMethod_1.HttpMethod.PUT) {
            return true;
        }
        return false;
    }
}
exports.BaseEndPoint = BaseEndPoint;
function GetAllEndPointable() {
    return function (constructor) {
        return class extends constructor {
            GetAll() {
                return this.SendRequest(HttpMethod_1.HttpMethod.GET, null);
            }
        };
    };
}
exports.GetAllEndPointable = GetAllEndPointable;
function GetEndPointable() {
    return function (constructor) {
        return class extends constructor {
            Get(id) {
                return this.SendRequest(HttpMethod_1.HttpMethod.GET, { id: id });
            }
        };
    };
}
exports.GetEndPointable = GetEndPointable;
function PostEndPointable() {
    return function (constructor) {
        return class extends constructor {
            Post(body) {
                return this.SendRequest(HttpMethod_1.HttpMethod.POST, body);
            }
        };
    };
}
exports.PostEndPointable = PostEndPointable;
function PutEndPointable() {
    return function (constructor) {
        return class extends constructor {
            Put(body) {
                return this.SendRequest(HttpMethod_1.HttpMethod.PUT, body);
            }
        };
    };
}
exports.PutEndPointable = PutEndPointable;
function DeleteEndPointable() {
    return function (constructor) {
        return class extends constructor {
            Delete(id) {
                return this.SendRequest(HttpMethod_1.HttpMethod.DELETE, { id: id });
            }
        };
    };
}
exports.DeleteEndPointable = DeleteEndPointable;
