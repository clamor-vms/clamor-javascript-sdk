import { BaseEndPoint } from '../../../Core/BaseEndPoint';
import { Campaign } from '../../../Models/Campaign';
declare class CampaignEndPoint extends BaseEndPoint {
    protected readonly Url: string;
}
declare const _default: {
    new (...args: any[]): {
        GetAll(): Promise<Campaign[]>;
        SendRequest<ReturnType_1>(method: HttpMethod, postData: {} | null): Promise<ReturnType_1>;
    };
} & {
    new (...args: any[]): {
        Get(id: number): Promise<Campaign>;
        SendRequest<ReturnType_1>(method: HttpMethod, postData: {} | null): Promise<ReturnType_1>;
    };
} & {
    new (...args: any[]): {
        Post(body: Campaign): Promise<Campaign>;
        SendRequest<ReturnType_1>(method: HttpMethod, postData: {} | null): Promise<ReturnType_1>;
    };
} & {
    new (...args: any[]): {
        Put(body: Campaign): Promise<Campaign>;
        SendRequest<ReturnType_1>(method: HttpMethod, postData: {} | null): Promise<ReturnType_1>;
    };
} & {
    new (...args: any[]): {
        Delete(id: number): Promise<Boolean>;
        SendRequest<ReturnType_1>(method: HttpMethod, postData: {} | null): Promise<ReturnType_1>;
    };
} & typeof CampaignEndPoint;
export default _default;
