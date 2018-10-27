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

import { ObjectUtils } from '../Utils/ObjectUtils';

import { AuthContext } from './AuthContext';

import { HttpMethod } from './HttpMethod';

export class BaseService {
    private _authContext: AuthContext;
    protected get Auth(): AuthContext { return this._authContext; }

    protected get Url(): string { return "/"; }
    private get FullUrl(): string { return this.Auth.Domain + this.Url; }

    constructor(authContext: AuthContext) {
        this._authContext = authContext;
    }

    protected SendRequest<ReturnType>(method: HttpMethod, postData: object | null = null): Promise<ReturnType> {
        return new Promise((resolve, reject) => {
            let url: string = this.FullUrl;
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            switch(method) {
                case HttpMethod.GET:
                    if(postData) {
                        url = url + "?" + ObjectUtils.BuildQueryString(postData);
                    }
                    break;
                case HttpMethod.POST:
                    break;
                case HttpMethod.PUT:
                    break;
                case HttpMethod.DELETE:
                    if(postData) {
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
                        reject(new Error(JSON.stringify({ message: "invalid response.", xhr: xhr, data: JSON.parse(xhr.responseText) })));
                    } catch(e) {
                        reject(new Error(JSON.stringify({ message: "invalid response.", xhr: xhr, data: xhr.responseText, exception: e })));
                    }
                }
            };

            if(this.DoesMethodHaveBody(method)) {
                xhr.send(JSON.stringify(postData));
            } else {
                xhr.send();
            }
        });
    }

    protected AuthLogic(xhr: XMLHttpRequest) {
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.setRequestHeader('Authorization', "Bearer " + this.Auth.Token);
    }

    private DoesMethodHaveBody(method: HttpMethod): boolean {
        if(method === HttpMethod.POST || method === HttpMethod.PUT) {
            return true;
        }
        return false;
    }
}
