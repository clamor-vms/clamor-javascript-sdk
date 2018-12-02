import { BaseEndPoint } from '../../../Core/BaseEndPoint';
import { AuthAbout } from '../../../Models/AuthAbout';
declare class AuthAboutEndPoint extends BaseEndPoint {
    protected readonly Url: string;
}
declare const _default: {
    new (...args: any[]): {
        GetAll(): Promise<AuthAbout>;
        SendRequest<ReturnType_1>(method: HttpMethod, postData: {} | null): Promise<ReturnType_1>;
    };
} & typeof AuthAboutEndPoint;
export default _default;
