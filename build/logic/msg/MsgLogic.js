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
const msg_pb_1 = require("../../proto/msg/msg_pb");
const MsgModel_1 = require("../../model/MsgModel");
var MsgLogic;
(function (MsgLogic) {
    function addMsg(request, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = {};
            data["fromSzId"] = request.getSzId();
            data["toSzId"] = request.getSzId();
            data["title"] = request.getTitle();
            data["content"] = request.getContent();
            data["status"] = 0;
            let ret = yield new MsgModel_1.MsgModel().insertMsg(data);
            // OkPacket {
            //     fieldCount: 0,
            //       affectedRows: 1,
            //       insertId: 5,
            //       serverStatus: 2,
            //       warningCount: 0,
            //       message: '',
            //       protocol41: true,
            //       changedRows: 0 }
            const msg = new msg_pb_1.Msg();
            if (ret.insertId) {
                msg.setSzId(request.getSzId());
                msg.setTitle(request.getTitle());
                msg.setContent(request.getContent());
                msg.setStatus(ret.status);
            }
            return yield msg;
        });
    }
    MsgLogic.addMsg = addMsg;
    function getMsg(request, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = {};
            const szId = request.getSzId();
            const page = request.getPageNumber();
            const limit = request.getResultPerPage();
            const offset = (page - 1) * limit;
            let ret = yield new MsgModel_1.MsgModel().getList({ fromSzId: szId, limit: limit, offset: offset });
            console.log({ fromSzId: szId, limit: limit, offset: offset });
            // OkPacket {
            //     fieldCount: 0,
            //       affectedRows: 1,
            //       insertId: 5,
            //       serverStatus: 2,
            //       warningCount: 0,
            //       message: '',
            //       protocol41: true,
            //       changedRows: 0 }
            const msg = new msg_pb_1.MsgList();
            msg.setPageTotal(ret.count);
            console.log(ret);
            let arr = [];
            for (let i in ret.list) {
                let row = new msg_pb_1.Msg();
                row.setSzId(ret.list[i]['fromSzId']);
                row.setTitle(ret.list[i]['title']);
                row.setContent(ret.list[i]['content']);
                row.setStatus(ret.list[i]['status']);
                arr.push(row);
            }
            msg.setMsgListList(arr);
            return yield msg;
        });
    }
    MsgLogic.getMsg = getMsg;
})(MsgLogic = exports.MsgLogic || (exports.MsgLogic = {}));
