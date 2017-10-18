"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const msg_grpc_pb_1 = require("../proto/msg/msg_grpc_pb");
const order_grpc_pb_1 = require("../proto/order/order_grpc_pb");
const getMsg_1 = require("./msg/msg_grpc_pb/MsgService/getMsg");
const addMsg_1 = require("./msg/msg_grpc_pb/MsgService/addMsg");
const getMsgApi_1 = require("./msg/msg_grpc_pb/MsgApiService/getMsgApi");
const addMsgApi_1 = require("./msg/msg_grpc_pb/MsgApiService/addMsgApi");
const getOrder_1 = require("./order/order_grpc_pb/OrderService/getOrder");
exports.registerServices = function (app) {
    app.server.addService(msg_grpc_pb_1.MsgServiceService, {
        getMsg: (call, callback) => __awaiter(this, void 0, void 0, function* () {
            let wrappedHandler = app.wrapGrpcHandler(getMsg_1.getMsgHandler);
            wrappedHandler(call, callback).then(_ => _);
        }),
        addMsg: (call, callback) => __awaiter(this, void 0, void 0, function* () {
            let wrappedHandler = app.wrapGrpcHandler(addMsg_1.addMsgHandler);
            wrappedHandler(call, callback).then(_ => _);
        }),
    });
    app.server.addService(msg_grpc_pb_1.MsgApiServiceService, {
        getMsgApi: (call, callback) => __awaiter(this, void 0, void 0, function* () {
            let wrappedHandler = app.wrapGrpcHandler(getMsgApi_1.getMsgApiHandler);
            wrappedHandler(call, callback).then(_ => _);
        }),
        addMsgApi: (call, callback) => __awaiter(this, void 0, void 0, function* () {
            let wrappedHandler = app.wrapGrpcHandler(addMsgApi_1.addMsgApiHandler);
            wrappedHandler(call, callback).then(_ => _);
        }),
    });
    app.server.addService(order_grpc_pb_1.OrderServiceService, {
        getOrder: (call, callback) => __awaiter(this, void 0, void 0, function* () {
            let wrappedHandler = app.wrapGrpcHandler(getOrder_1.getOrderHandler);
            wrappedHandler(call, callback).then(_ => _);
        }),
    });
};
