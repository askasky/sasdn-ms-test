import * as LibPath from 'path';
import * as LibFs from 'mz/fs';
import "reflect-metadata";
import {getConnectionManager, createConnections, Connection} from "typeorm";
import {ConfigHelper} from "./helper/ConfigHelper";
import {crc32} from "crc";

export class Database {

  private static _instance: Database;
  private static _configs: any;
  private static _default_driver: string;
  private static _other_driver: string;
  private _initialized: boolean;


  public static instance(): Database {
    if (Database._instance === undefined) {
      Database._instance = new Database();
      Database._configs = ConfigHelper.instance().getOption();
      Database._default_driver = Database._configs['driver'][Database._configs['name']];
      if (Database._configs['driver'].hasOwnProperty("other")) {
        Database._other_driver = Database._configs['driver']['other'];
      } else {
        Database._other_driver = "";
      }
    }
    return Database._instance;
  }

  private constructor() {
    this._initialized = false;
  }

  public async init() {
    try {
      let defaultConfig = Database._configs['database'][Database._default_driver];
      for (let i in defaultConfig) {
        defaultConfig[i]['entities'] = [LibPath.join(__dirname, 'entity', Database._default_driver) + "/*{.js,.ts}"];
      }
      await createConnections(defaultConfig);

      if (Database._other_driver !== "") {
        let otherConfig = Database._configs['database'][Database._other_driver];
        for (let i in otherConfig) {
          otherConfig[i]['entities'] = [LibPath.join(__dirname, 'entity', Database._other_driver) + "/*{.js,.ts}"];
        }
        await createConnections(otherConfig);
      }

      this._initialized = true;
    } catch (e) {
      throw new Error(`database connection Error: ${e.message}`);
    }
  }
  public static getDefaultDriver() : string {
    return Database._default_driver;
  }

  public static getOtherDriver() : string {
    return Database._other_driver;
  }

  private static getConnectionName(shardKey: any, driverType: string): string {
    let id = Math.abs(parseInt(crc32(String(shardKey)), 16)) % Database._configs['database'][driverType].length;
    return Database._configs['database'][driverType][id]['name'];
  }

  public  getConnection(shardKey: any, driverType = Database._default_driver): Connection {
    try {
      if (driverType === undefined || driverType === null) {
        driverType = Database._default_driver
      }
      console.log(driverType);
      let curName = Database.getConnectionName(shardKey, driverType);
      return getConnectionManager().get(curName);
    } catch (e){
      throw new Error(`connection get Error: ${e.message}`);
    }
  }
}
