// package: msg
// file: msg/msg.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class GetMsgRequest extends jspb.Message {
  getSzId(): string;
  setSzId(value: string): void;

  getPageNumber(): number;
  setPageNumber(value: number): void;

  getResultPerPage(): number;
  setResultPerPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMsgRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMsgRequest): GetMsgRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMsgRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMsgRequest;
  static deserializeBinaryFromReader(message: GetMsgRequest, reader: jspb.BinaryReader): GetMsgRequest;
}

export namespace GetMsgRequest {
  export type AsObject = {
    szId: string,
    pageNumber: number,
    resultPerPage: number,
  }
}

export class Msg extends jspb.Message {
  getSzId(): string;
  setSzId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Msg.AsObject;
  static toObject(includeInstance: boolean, msg: Msg): Msg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Msg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Msg;
  static deserializeBinaryFromReader(message: Msg, reader: jspb.BinaryReader): Msg;
}

export namespace Msg {
  export type AsObject = {
    szId: string,
    title: string,
    content: string,
    status: string,
  }
}

export class MsgList extends jspb.Message {
  getPageTotal(): number;
  setPageTotal(value: number): void;

  clearMsgListList(): void;
  getMsgListList(): Array<Msg>;
  setMsgListList(value: Array<Msg>): void;
  addMsgList(value?: Msg, index?: number): Msg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgList.AsObject;
  static toObject(includeInstance: boolean, msg: MsgList): MsgList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgList;
  static deserializeBinaryFromReader(message: MsgList, reader: jspb.BinaryReader): MsgList;
}

export namespace MsgList {
  export type AsObject = {
    pageTotal: number,
    msgListList: Array<Msg.AsObject>,
  }
}

