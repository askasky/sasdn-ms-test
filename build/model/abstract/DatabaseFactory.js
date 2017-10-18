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
const Database_1 = require("../../Database");
class DatabaseFactory {
    constructor() {
    }
    getDefaultDriver() {
        return Database_1.Database.getDefaultDriver();
    }
    getOtherDriver() {
        return Database_1.Database.getOtherDriver();
    }
    getConnection(shardKey = null, driverType = Database_1.Database.getDefaultDriver()) {
        return Database_1.Database.instance().getConnection(shardKey, driverType);
    }
    getTime() {
        return (new Date().getTime()) / 1000;
    }
    getTimeStamp() {
        return Math.floor(Date.now() / 1000);
    }
    execute(cq, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let t1 = this.getTime();
            let result = yield cq.execute();
            if (result.affectedRows < 1) {
                throw new Error("affectedRows = 0");
            }
            let t2 = this.getTime();
            console.log((t2 - t1).toFixed(4), cq.getSql(), params, result);
            return result;
        });
    }
    getOne(cq, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let t1 = this.getTime();
            let result = yield cq.getOne();
            let t2 = this.getTime();
            console.log((t2 - t1).toFixed(4), cq.getSql(), params, result);
            return result;
        });
    }
    getMany(cq, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let t1 = this.getTime();
            let result = yield cq.getMany();
            let t2 = this.getTime();
            console.log((t2 - t1).toFixed(4), cq.getSql(), params, result);
            return result;
        });
    }
}
exports.DatabaseFactory = DatabaseFactory;
