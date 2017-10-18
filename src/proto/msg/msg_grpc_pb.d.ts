// package: msg
// file: msg/msg.proto

import * as grpc from "grpc";
import * as msg_msg_pb from "../msg/msg_pb";

interface IMsgServiceService extends grpc.IMethodsMap {
    getMsg: IGetMsg;
    addMsg: IaddMsg;
}

interface IGetMsg {
    path: string; // "/msg.MsgService/GetMsg"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: msg_msg_pb.GetMsgRequest,
    responseType: msg_msg_pb.MsgList,
    requestSerialize: (arg: msg_msg_pb.GetMsgRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => msg_msg_pb.GetMsgRequest;
    responseSerialize: (arg: msg_msg_pb.MsgList) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => msg_msg_pb.MsgList;
}
interface IaddMsg {
    path: string; // "/msg.MsgService/addMsg"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: msg_msg_pb.Msg,
    responseType: msg_msg_pb.Msg,
    requestSerialize: (arg: msg_msg_pb.Msg) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => msg_msg_pb.Msg;
    responseSerialize: (arg: msg_msg_pb.Msg) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => msg_msg_pb.Msg;
}

export const MsgServiceService: IMsgServiceService;
export class MsgServiceClient extends grpc.Client {
    constructor(address: string, credentials: any, options?: grpc.IClientOptions);
    getMsg(request: msg_msg_pb.GetMsgRequest, callback: (error: Error | null, response: msg_msg_pb.MsgList) => void): grpc.ClientUnaryCall;
    getMsg(request: msg_msg_pb.GetMsgRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: msg_msg_pb.MsgList) => void): grpc.ClientUnaryCall;
    addMsg(request: msg_msg_pb.Msg, callback: (error: Error | null, response: msg_msg_pb.Msg) => void): grpc.ClientUnaryCall;
    addMsg(request: msg_msg_pb.Msg, metadata: grpc.Metadata, callback: (error: Error | null, response: msg_msg_pb.Msg) => void): grpc.ClientUnaryCall;
}

interface IMsgApiServiceService extends grpc.IMethodsMap {
    getMsgApi: IGetMsgApi;
    addMsgApi: IaddMsgApi;
}

interface IGetMsgApi {
    path: string; // "/msg.MsgApiService/GetMsgApi"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: msg_msg_pb.GetMsgRequest,
    responseType: msg_msg_pb.MsgList,
    requestSerialize: (arg: msg_msg_pb.GetMsgRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => msg_msg_pb.GetMsgRequest;
    responseSerialize: (arg: msg_msg_pb.MsgList) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => msg_msg_pb.MsgList;
}
interface IaddMsgApi {
    path: string; // "/msg.MsgApiService/addMsgApi"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: msg_msg_pb.Msg,
    responseType: msg_msg_pb.Msg,
    requestSerialize: (arg: msg_msg_pb.Msg) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => msg_msg_pb.Msg;
    responseSerialize: (arg: msg_msg_pb.Msg) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => msg_msg_pb.Msg;
}

export const MsgApiServiceService: IMsgApiServiceService;
export class MsgApiServiceClient extends grpc.Client {
    constructor(address: string, credentials: any, options?: grpc.IClientOptions);
    getMsgApi(request: msg_msg_pb.GetMsgRequest, callback: (error: Error | null, response: msg_msg_pb.MsgList) => void): grpc.ClientUnaryCall;
    getMsgApi(request: msg_msg_pb.GetMsgRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: msg_msg_pb.MsgList) => void): grpc.ClientUnaryCall;
    addMsgApi(request: msg_msg_pb.Msg, callback: (error: Error | null, response: msg_msg_pb.Msg) => void): grpc.ClientUnaryCall;
    addMsgApi(request: msg_msg_pb.Msg, metadata: grpc.Metadata, callback: (error: Error | null, response: msg_msg_pb.Msg) => void): grpc.ClientUnaryCall;
}
