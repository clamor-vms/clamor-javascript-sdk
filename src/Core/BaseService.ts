import { ObjectUtils } from '../Utils/ObjectUtils';

import { HttpMethod } from './HttpMethod';
import { AuthContext } from './AuthContext';

export class BaseService {
    private _authContext: AuthContext;
    protected get Auth(): AuthContext { return this._authContext; }

    protected get Url(): string { return "/"; }
    private get FullUrl(): string { return this.Auth.Domain + this.Url; }

    constructor(authContext: AuthContext) {
        this._authContext = authContext;
    }

    protected SendRequest<ReturnType>(method: HttpMethod, postData: object | null = null, overrideJwt: string = ""): Promise<ReturnType> {
        return new Promise((resolve, reject) => {
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            let url: string = this.FullUrl;

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

            this.AuthLogic(xhr, overrideJwt);

            xhr.setRequestHeader('Content-type', 'application/json');

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

    protected AuthLogic(xhr: XMLHttpRequest, overrideJwt: string = "") {
        let jwt: string = this.Auth.Token;
        if(overrideJwt) {
            jwt = overrideJwt;
        }

        xhr.setRequestHeader('Authorization', "Bearer " + jwt);
    }

    private DoesMethodHaveBody(method: HttpMethod): boolean {
        if(method === HttpMethod.POST || method === HttpMethod.PUT) {
            return true;
        }
        return false;
    }
}
