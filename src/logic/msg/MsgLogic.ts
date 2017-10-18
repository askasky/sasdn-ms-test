import {RpcContext} from 'sasdn';
import {GetMsgRequest, MsgList, Msg,} from '../../proto/msg/msg_pb';
import {MsgModel} from '../../model/MsgModel';

export namespace MsgLogic {

    export async function addMsg(request: Msg, ctx?: RpcContext): Promise<Msg> {

        let data = {};
        data["fromSzId"] = request.getSzId();
        data["toSzId"] = request.getSzId();
        data["title"] = request.getTitle();
        data["content"] = request.getContent();
        data["status"] = 0;
        let ret = await new MsgModel().insertMsg(data);
        // OkPacket {
        //     fieldCount: 0,
        //       affectedRows: 1,
        //       insertId: 5,
        //       serverStatus: 2,
        //       warningCount: 0,
        //       message: '',
        //       protocol41: true,
        //       changedRows: 0 }

        const msg = new Msg();
        if (ret.insertId) {
            msg.setSzId(request.getSzId());
            msg.setTitle(request.getTitle());
            msg.setContent(request.getContent());
            msg.setStatus(ret.status);
        }
        return await msg;
    }

    export async function getMsg(request: GetMsgRequest, ctx?: RpcContext): Promise<MsgList> {

        let data = {};
        const szId = request.getSzId();
        const page = request.getPageNumber();
        const limit = request.getResultPerPage();
        const offset = (page - 1)*limit;
        let ret = await new MsgModel().getList({fromSzId: szId, limit: limit, offset: offset});
        console.log({fromSzId: szId, limit: limit, offset: offset});
        // OkPacket {
        //     fieldCount: 0,
        //       affectedRows: 1,
        //       insertId: 5,
        //       serverStatus: 2,
        //       warningCount: 0,
        //       message: '',
        //       protocol41: true,
        //       changedRows: 0 }

        const msg = new MsgList();
        msg.setPageTotal(ret.count);
        console.log(ret);
        let arr = [];
        for(let i in ret.list) {
            let row = new Msg();
            row.setSzId(ret.list[i]['fromSzId']);
            row.setTitle(ret.list[i]['title']);
            row.setContent(ret.list[i]['content']);
            row.setStatus(ret.list[i]['status']);
            arr.push(row);
        }
        msg.setMsgListList(arr);

        return await msg;
    }

}