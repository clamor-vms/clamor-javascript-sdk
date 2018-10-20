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
            xhr = this.AuthLogic(xhr);

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

    protected AuthLogic(xhr: XMLHttpRequest): XMLHttpRequest {
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.setRequestHeader('Authorization', "Bearer " + this.Auth.Token);
        return xhr;
    }

    private DoesMethodHaveBody(method: HttpMethod): boolean {
        if(method === HttpMethod.POST || method === HttpMethod.PUT) {
            return true;
        }
        return false;
    }
}
