// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var msg_msg_pb = require('../msg/msg_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_msg_GetMsgRequest(arg) {
  if (!(arg instanceof msg_msg_pb.GetMsgRequest)) {
    throw new Error('Expected argument of type msg.GetMsgRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_msg_GetMsgRequest(buffer_arg) {
  return msg_msg_pb.GetMsgRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_msg_Msg(arg) {
  if (!(arg instanceof msg_msg_pb.Msg)) {
    throw new Error('Expected argument of type msg.Msg');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_msg_Msg(buffer_arg) {
  return msg_msg_pb.Msg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_msg_MsgList(arg) {
  if (!(arg instanceof msg_msg_pb.MsgList)) {
    throw new Error('Expected argument of type msg.MsgList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_msg_MsgList(buffer_arg) {
  return msg_msg_pb.MsgList.deserializeBinary(new Uint8Array(buffer_arg));
}


var MsgServiceService = exports.MsgServiceService = {
  getMsg: {
    path: '/msg.MsgService/GetMsg',
    requestStream: false,
    responseStream: false,
    requestType: msg_msg_pb.GetMsgRequest,
    responseType: msg_msg_pb.MsgList,
    requestSerialize: serialize_msg_GetMsgRequest,
    requestDeserialize: deserialize_msg_GetMsgRequest,
    responseSerialize: serialize_msg_MsgList,
    responseDeserialize: deserialize_msg_MsgList,
  },
  addMsg: {
    path: '/msg.MsgService/addMsg',
    requestStream: false,
    responseStream: false,
    requestType: msg_msg_pb.Msg,
    responseType: msg_msg_pb.Msg,
    requestSerialize: serialize_msg_Msg,
    requestDeserialize: deserialize_msg_Msg,
    responseSerialize: serialize_msg_Msg,
    responseDeserialize: deserialize_msg_Msg,
  },
};

exports.MsgServiceClient = grpc.makeGenericClientConstructor(MsgServiceService);
// gPRC-getway Test
var MsgApiServiceService = exports.MsgApiServiceService = {
  getMsgApi: {
    path: '/msg.MsgApiService/GetMsgApi',
    requestStream: false,
    responseStream: false,
    requestType: msg_msg_pb.GetMsgRequest,
    responseType: msg_msg_pb.MsgList,
    requestSerialize: serialize_msg_GetMsgRequest,
    requestDeserialize: deserialize_msg_GetMsgRequest,
    responseSerialize: serialize_msg_MsgList,
    responseDeserialize: deserialize_msg_MsgList,
  },
  addMsgApi: {
    path: '/msg.MsgApiService/addMsgApi',
    requestStream: false,
    responseStream: false,
    requestType: msg_msg_pb.Msg,
    responseType: msg_msg_pb.Msg,
    requestSerialize: serialize_msg_Msg,
    requestDeserialize: deserialize_msg_Msg,
    responseSerialize: serialize_msg_Msg,
    responseDeserialize: deserialize_msg_Msg,
  },
};

exports.MsgApiServiceClient = grpc.makeGenericClientConstructor(MsgApiServiceService);
