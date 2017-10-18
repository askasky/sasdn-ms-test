///<reference path="../../node_modules/grpc-tsd/src/grpc.d.ts"/>
import {IServerCall, RpcImplCallback} from "grpc";
import {RpcApplication, WrappedHandler} from "sasdn";

import {
    MsgServiceService,
    MsgApiServiceService,
} from "../proto/msg/msg_grpc_pb";
import {
    OrderServiceService,
} from "../proto/order/order_grpc_pb";


import {getMsgHandler} from "./msg/msg_grpc_pb/MsgService/getMsg";
import {addMsgHandler} from "./msg/msg_grpc_pb/MsgService/addMsg";

import {getMsgApiHandler} from "./msg/msg_grpc_pb/MsgApiService/getMsgApi";
import {addMsgApiHandler} from "./msg/msg_grpc_pb/MsgApiService/addMsgApi";


import {getOrderHandler} from "./order/order_grpc_pb/OrderService/getOrder";

export const registerServices = function (app: RpcApplication) {

    app.server.addService(MsgServiceService, {
        getMsg: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getMsgHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        addMsg: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(addMsgHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
    });

    app.server.addService(MsgApiServiceService, {
        getMsgApi: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getMsgApiHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        addMsgApi: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(addMsgApiHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
    });

    app.server.addService(OrderServiceService, {
        getOrder: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getOrderHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
    });

};