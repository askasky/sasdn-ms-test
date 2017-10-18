import "reflect-metadata";
import {DatabaseFactory} from "./abstract/DatabaseFactory";
import {Msg} from "../entity/relation/Msg"
import {ObjectID} from "mongodb";

export class MsgModel extends DatabaseFactory {
    constructor() {
        super();
    }

    public async insertMsg(params: any): Promise<any> {
        const connection = this.getConnection();
        let cq =  await connection.createQueryBuilder()
            .insert()
            .into(Msg)
            .values([
                params
            ]);
        let ret = await this.execute(cq, params);

        // let ret2 = await this.findOne({id: ret.insertId});
        // let ret5 = await this.findMany({id: ret.insertId});
        // let ret3 = await this.updateMsg({id: ret.insertId, title: "a", content:"b"});
        // let ret4 = await this.deleteMsg({id: ret.insertId});
        return ret;
    }

    public async deleteMsg(params: any): Promise<any> {
        const connection = this.getConnection();
        let cq = await connection
          .createQueryBuilder()
          .delete()
          .from(Msg)
          .where("id = :id", { id: params.id });
        return await this.execute(cq, params);
    }

    public async updateMsg(params: any): Promise<any> {
        const connection = this.getConnection();
        const cq =  await connection.createQueryBuilder()
          .update(Msg)
          .set({ title: params.title, content: params.content })
          .where("id = :id", { id: params.id});
         return await this.execute(cq, params);
    }

    public async findOne(params: any): Promise<Msg> {
        const connection = this.getConnection();
        let cq = await connection
          .getRepository(Msg)
          .createQueryBuilder("msg")
          .where("msg.id = :id", { id: params.id});
       return await this.getOne(cq, params);
    }

    public async findMany(params: any): Promise<Msg[]> {
        const connection = this.getConnection();
        let cq = await connection
          .getRepository(Msg)
          .createQueryBuilder("msg")
          .where("msg.id = :id", { id: params.id});
        return await this.getMany(cq, params);
    }

    public async getList(params: any): Promise<any>{
        const connection = this.getConnection();
        let count = await connection.getRepository(Msg).count({fromSzId: params.fromSzId});
        let list = await connection.getRepository(Msg).find({where:{fromSzId: params.fromSzId}, skip:params.offset, take: params.limit});
        return {count:count,list:list};
    }


}
