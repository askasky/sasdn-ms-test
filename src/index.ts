import MSOrder from './MSMsg';

const server = new MSOrder();
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