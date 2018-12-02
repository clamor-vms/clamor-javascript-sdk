import { BaseEndPoint } from '../../../Core/BaseEndPoint';
import { CampaignAbout } from '../../../Models/CampaignAbout';
declare class CampaignAboutEndPoint extends BaseEndPoint {
    protected readonly Url: string;
}
declare const _default: {
    new (...args: any[]): {
        GetAll(): Promise<CampaignAbout>;
        SendRequest<ReturnType_1>(method: HttpMethod, postData: {} | null): Promise<ReturnType_1>;
    };
} & typeof CampaignAboutEndPoint;
export default _default;
