import IBaseEndPoint from './IBaseEndPoint';
export default function PutEndPointable<TRet>(): <T extends new (...args: any[]) => IBaseEndPoint>(constructor: T) => {
    new (...args: any[]): {
        Put(body: TRet): Promise<TRet>;
        SendRequest<ReturnType_1>(method: any, postData: {} | null): Promise<ReturnType_1>;
    };
} & T;
