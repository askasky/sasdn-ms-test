"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MSMsg_1 = require("./MSMsg");
const server = new MSMsg_1.default();
server.init(process.env.NODE_ENV === 'development')
    .then(() => {
    server.start();
})
    .catch((err) => {
    console.log(err.message);
});
process.on('unhandledRejection', function (reason, p) {
    console.log('Unhandled Rejection at:', p, 'reason:', reason);
});
