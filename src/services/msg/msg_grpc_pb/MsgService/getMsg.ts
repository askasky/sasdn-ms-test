import {ServerUnaryCall, RpcImplCallback} from "grpc";
import {RpcContext, RpcMiddleware, MiddlewareNext} from "sasdn";
import {GetMsgRequest, MsgList, } from "../../../../proto/msg/msg_pb";
import {MsgLogic} from "../../../../logic/msg/MsgLogic"

export const getMsgHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call: ServerUnaryCall = ctx.call as ServerUnaryCall;
    let callback: RpcImplCallback = ctx.callback;
    let request = call.request as GetMsgRequest;

    console.log('request:', request.toObject());
    try {
        const msg = await MsgLogic.getMsg(request, ctx);
        callback(null, msg);
    } catch (e) {
        console.log(e);
    }
    console.log('done');

    return Promise.resolve();
};