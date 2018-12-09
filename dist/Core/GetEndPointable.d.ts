import IBaseEndPoint from './IBaseEndPoint';
export default function GetEndPointable<TRet>(): <T extends new (...args: any[]) => IBaseEndPoint>(constructor: T) => {
    new (...args: any[]): {
        Get(id: number): Promise<TRet>;
        SendRequest<ReturnType_1>(method: any, postData: {} | null): Promise<ReturnType_1>;
    };
} & T;
