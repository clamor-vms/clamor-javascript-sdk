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

import { ObjectUtils } from "../Utils/ObjectUtils";

import { AuthContext } from "./AuthContext";

import { HttpMethod } from "./HttpMethod";

interface IBaseEndPoint {
    SendRequest<ReturnType>(method: HttpMethod, postData: {} | null): Promise<ReturnType>;
}

export class BaseEndPoint implements IBaseEndPoint {
    private _authContext: AuthContext;
    protected get Auth(): AuthContext {
        return this._authContext;
    }

    protected get Url(): string {
        return "/";
    }
    private get FullUrl(): string {
        return this.Auth.Domain + this.Url;
    }

    constructor(authContext: AuthContext) {
        this._authContext = authContext;
    }

    public SendRequest<ReturnType>(
        method: HttpMethod,
        postData: {} | null = null
    ): Promise<ReturnType> {
        return new Promise((resolve, reject) => {
            let url: string = this.FullUrl;
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            switch (method) {
                case HttpMethod.GET:
                    if (postData) {
                        url = url + "?" + ObjectUtils.BuildQueryString(postData);
                    }
                    break;
                case HttpMethod.POST:
                    break;
                case HttpMethod.PUT:
                    break;
                case HttpMethod.DELETE:
                    if (postData) {
                        url = url + "?" + ObjectUtils.BuildQueryString(postData);
                    }
                    break;
            }

            xhr.open(method, url);
            this.AuthLogic(xhr);

            xhr.onload = () => {
                if (xhr.status === 200) {
                    let result: ReturnType = JSON.parse(xhr.responseText);

                    resolve(result);
                } else {
                    try {
                        reject(
                            new Error(
                                JSON.stringify({
                                    message: "invalid response.",
                                    xhr: xhr,
                                    data: JSON.parse(xhr.responseText)
                                })
                            )
                        );
                    } catch (e) {
                        reject(
                            new Error(
                                JSON.stringify({
                                    message: "invalid response.",
                                    xhr: xhr,
                                    data: xhr.responseText,
                                    exception: e
                                })
                            )
                        );
                    }
                }
            };

            if (this.DoesMethodHaveBody(method)) {
                xhr.send(JSON.stringify(postData));
            } else {
                xhr.send();
            }
        });
    }

    protected AuthLogic(xhr: XMLHttpRequest) {
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("Authorization", "Bearer " + this.Auth.Token);
    }

    private DoesMethodHaveBody(method: HttpMethod): boolean {
        if (method === HttpMethod.POST || method === HttpMethod.PUT) {
            return true;
        }
        return false;
    }
}

export function GetAllEndPointable<TRet>() {
    return function<T extends {new(...args:any[]):IBaseEndPoint}>(constructor:T) {
        return class extends constructor {
            public GetAll(): Promise<TRet> {
                return this.SendRequest<TRet>(HttpMethod.GET, null);
            }
        };
    };
}

export function GetEndPointable<TRet>() {
    return function<T extends {new(...args:any[]):IBaseEndPoint}>(constructor:T) {
        return class extends constructor {
            public Get(id: number): Promise<TRet> {
                return this.SendRequest<TRet>(HttpMethod.GET, {id: id});
            }
        };
    };
}

export function PostEndPointable<TRet>() {
    return function<T extends {new(...args:any[]):IBaseEndPoint}>(constructor:T) {
        return class extends constructor {
            public Post(body: TRet): Promise<TRet> {
                return this.SendRequest<TRet>(HttpMethod.POST, body);
            }
        };
    };
}

export function PutEndPointable<TRet>() {
    return function<T extends {new(...args:any[]):IBaseEndPoint}>(constructor:T) {
        return class extends constructor {
            public Put(body: TRet): Promise<TRet> {
                return this.SendRequest<TRet>(HttpMethod.PUT, body);
            }
        };
    };
}

export function DeleteEndPointable<TRet>() {
    return function<T extends {new(...args:any[]):IBaseEndPoint}>(constructor:T) {
        return class extends constructor {
            public Delete(id: number): Promise<Boolean> {
                return this.SendRequest<Boolean>(HttpMethod.DELETE, {id: id});
            }
        };
    };
}
