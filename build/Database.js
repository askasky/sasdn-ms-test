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
const LibPath = require("path");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const ConfigHelper_1 = require("./helper/ConfigHelper");
const crc_1 = require("crc");
class Database {
    static instance() {
        if (Database._instance === undefined) {
            Database._instance = new Database();
            Database._configs = ConfigHelper_1.ConfigHelper.instance().getOption();
            Database._default_driver = Database._configs['driver'][Database._configs['name']];
            if (Database._configs['driver'].hasOwnProperty("other")) {
                Database._other_driver = Database._configs['driver']['other'];
            }
            else {
                Database._other_driver = "";
            }
        }
        return Database._instance;
    }
    constructor() {
        this._initialized = false;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let defaultConfig = Database._configs['database'][Database._default_driver];
                for (let i in defaultConfig) {
                    defaultConfig[i]['entities'] = [LibPath.join(__dirname, 'entity', Database._default_driver) + "/*{.js,.ts}"];
                }
                yield typeorm_1.createConnections(defaultConfig);
                if (Database._other_driver !== "") {
                    let otherConfig = Database._configs['database'][Database._other_driver];
                    for (let i in otherConfig) {
                        otherConfig[i]['entities'] = [LibPath.join(__dirname, 'entity', Database._other_driver) + "/*{.js,.ts}"];
                    }
                    yield typeorm_1.createConnections(otherConfig);
                }
                this._initialized = true;
            }
            catch (e) {
                throw new Error(`database connection Error: ${e.message}`);
            }
        });
    }
    static getDefaultDriver() {
        return Database._default_driver;
    }
    static getOtherDriver() {
        return Database._other_driver;
    }
    static getConnectionName(shardKey, driverType) {
        let id = Math.abs(parseInt(crc_1.crc32(String(shardKey)), 16)) % Database._configs['database'][driverType].length;
        return Database._configs['database'][driverType][id]['name'];
    }
    getConnection(shardKey, driverType = Database._default_driver) {
        try {
            if (driverType === undefined || driverType === null) {
                driverType = Database._default_driver;
            }
            console.log(driverType);
            let curName = Database.getConnectionName(shardKey, driverType);
            return typeorm_1.getConnectionManager().get(curName);
        }
        catch (e) {
            throw new Error(`connection get Error: ${e.message}`);
        }
    }
}
exports.Database = Database;
