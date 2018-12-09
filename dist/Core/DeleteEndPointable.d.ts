import IBaseEndPoint from './IBaseEndPoint';
export default function DeleteEndPointable<TRet>(): <T extends new (...args: any[]) => IBaseEndPoint>(constructor: T) => {
    new (...args: any[]): {
        Delete(id: number): Promise<Boolean>;
        SendRequest<ReturnType_1>(method: any, postData: {} | null): Promise<ReturnType_1>;
    };
} & T;
