"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis = require("redis");
var value;
var valueArr;
var commandArr;
var num;
var str;
var bool;
var err;
var args;
var options;
var client;
var info;
var resCallback;
var numCallback;
var strCallback;
var messageHandler;
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
bool = redis.debug_mode;
redis.print(err, value);
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
client = redis.createClient(num, str, options);
// Test the `retry_strategy` property
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
function retryStrategyNumber(options) {
    // Ensure that the properties of RetryStrategyOptions are resilient to breaking change.
    // If the properties of the interface changes, the variables below will also need to be adapted.
    var error = options.error;
    var total_retry_time = options.total_retry_time;
    var times_connected = options.times_connected;
    var attempt = options.attempt;
    return 5000;
}
function retryStrategyError(options) {
    return new Error('Foo');
}
client = redis.createClient({
    retry_strategy: retryStrategyNumber
});
client = redis.createClient({
    retry_strategy: retryStrategyError
});
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
bool = client.connected;
num = client.retry_delay;
num = client.retry_backoff;
valueArr = client.command_queue;
valueArr = client.offline_queue;
info = client.server_info;
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
client.end(true);
// Connection (http://redis.io/commands#connection)
client.auth(str, resCallback);
client.ping(strCallback);
client.unref();
// Strings (http://redis.io/commands#strings)
client.append(str, str, numCallback);
client.bitcount(str, numCallback);
client.bitcount(str, num, num, numCallback);
client.set(str, str, strCallback);
client.get(str, strCallback);
client.exists(str, numCallback);
// Event handlers
client.on(str, messageHandler);
client.once(str, messageHandler);
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// some of the bulk methods
client.get('test');
client.get('test', resCallback);
client.set('test', 'test');
client.set('test', 'test', resCallback);
client.mset(args, resCallback);
client.incr(str, resCallback);
// Friendlier hash commands
client.hgetall(str, resCallback);
client.hmset(str, value, resCallback);
client.hmset(str, str, str, str, str, resCallback);
// Publish / Subscribe
client.publish(str, value);
client.subscribe(str);
// Multi
client.multi()
    .scard(str)
    .smembers(str)
    .keys('*', resCallback)
    .dbsize()
    .exec(resCallback);
client.multi([['get', 'test']]).exec();
// Monitor mode
client.monitor(resCallback);
// Send command
client.send_command(str, args, resCallback);
// Duplicate
client.duplicate();
// Pipeline
client.cork();
client.set("abc", "fff", strCallback);
client.get("abc", resCallback);
client.uncork();
