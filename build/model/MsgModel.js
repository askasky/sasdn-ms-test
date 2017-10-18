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
require("reflect-metadata");
const DatabaseFactory_1 = require("./abstract/DatabaseFactory");
const Msg_1 = require("../entity/relation/Msg");
class MsgModel extends DatabaseFactory_1.DatabaseFactory {
    constructor() {
        super();
    }
    insertMsg(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = this.getConnection();
            let cq = yield connection.createQueryBuilder()
                .insert()
                .into(Msg_1.Msg)
                .values([
                params
            ]);
            let ret = yield this.execute(cq, params);
            // let ret2 = await this.findOne({id: ret.insertId});
            // let ret5 = await this.findMany({id: ret.insertId});
            // let ret3 = await this.updateMsg({id: ret.insertId, title: "a", content:"b"});
            // let ret4 = await this.deleteMsg({id: ret.insertId});
            return ret;
        });
    }
    deleteMsg(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = this.getConnection();
            let cq = yield connection
                .createQueryBuilder()
                .delete()
                .from(Msg_1.Msg)
                .where("id = :id", { id: params.id });
            return yield this.execute(cq, params);
        });
    }
    updateMsg(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = this.getConnection();
            const cq = yield connection.createQueryBuilder()
                .update(Msg_1.Msg)
                .set({ title: params.title, content: params.content })
                .where("id = :id", { id: params.id });
            return yield this.execute(cq, params);
        });
    }
    findOne(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = this.getConnection();
            let cq = yield connection
                .getRepository(Msg_1.Msg)
                .createQueryBuilder("msg")
                .where("msg.id = :id", { id: params.id });
            return yield this.getOne(cq, params);
        });
    }
    findMany(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = this.getConnection();
            let cq = yield connection
                .getRepository(Msg_1.Msg)
                .createQueryBuilder("msg")
                .where("msg.id = :id", { id: params.id });
            return yield this.getMany(cq, params);
        });
    }
    getList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = this.getConnection();
            let count = yield connection.getRepository(Msg_1.Msg).count({ fromSzId: params.fromSzId });
            let list = yield connection.getRepository(Msg_1.Msg).find({ where: { fromSzId: params.fromSzId }, skip: params.offset, take: params.limit });
            return { count: count, list: list };
        });
    }
}
exports.MsgModel = MsgModel;
