import {ServerUnaryCall, RpcImplCallback} from "grpc";
import {RpcContext, RpcMiddleware, MiddlewareNext} from "sasdn";
import {Msg, MsgList, } from "../../../../proto/msg/msg_pb";
import {MsgLogic} from "../../../../logic/msg/MsgLogic"

export const addMsgHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call: ServerUnaryCall = ctx.call as ServerUnaryCall;
    let callback: RpcImplCallback = ctx.callback;
    let request = call.request as Msg;

    console.log('request:', request.toObject());
    try {
        const msg = await MsgLogic.addMsg(request, ctx);
        callback(null, msg);
    } catch (e) {
        console.log(e);
    }
    console.log('done');

    return Promise.resolve();
};