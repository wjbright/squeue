"use strict";
/*
    queue class - basically a redis instance
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
let redis = undefined;
const SQUEUE = "squeue";
if (!redis) {
    redis = new ioredis_1.default();
}
function squeue() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!redis)
            throw new Error("Redis instance not created");
        const squeue = yield redis.lrange(SQUEUE, 0, -1);
        const addToQueue = (job) => enqueue(redis, job);
        return {
            queue: squeue,
            enqueue: (job) => addToQueue(job),
        };
    });
}
exports.default = squeue;
function enqueue(redis, job) {
    return __awaiter(this, void 0, void 0, function* () {
        const squeueJob = JSON.stringify(job);
        yield redis.rpushx(SQUEUE, squeueJob);
    });
}
//# sourceMappingURL=squeue.js.map