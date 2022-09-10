"use strict";
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
const express_1 = __importDefault(require("express"));
const squeue_1 = __importDefault(require("./squeue"));
const app = (0, express_1.default)();
app.get("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { queue } = yield (0, squeue_1.default)();
        res.json(queue);
    });
});
app.get("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _queue = yield (0, squeue_1.default)();
    yield _queue.enqueue({
        id: "4",
        data: {
            key: "value pair too",
        },
    });
    const { queue } = yield (0, squeue_1.default)();
    res.json(queue);
}));
app.listen(3000);
// create the queue
/*
 * queue class - basically a redis instance
 * redis manager class - to handle redis i/o operations
 * create job interface - that gets added to queue
 * worker class - handles queuing, scheduling, retry management
 *
 */
//
//# sourceMappingURL=index.js.map