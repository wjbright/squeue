/* 
    queue class - basically a redis instance
*/

import Redis, { Redis as R } from "ioredis";
import { Job } from "./interfaces/squeue";
import { Stringified } from "./types";

let redis: R | undefined = undefined;
const SQUEUE = "squeue";

if (!redis) {
  redis = new Redis();
}

type SqueueJob = Stringified<Job>;

export default async function squeue() {
  if (!redis) throw new Error("Redis instance not created");

  const squeue = await redis.lrange(SQUEUE, 0, -1);

  const addToQueue = (job: Job) => enqueue(redis!, job);

  return {
    queue: squeue,
    enqueue: (job: Job) => addToQueue(job),
  };
}

async function enqueue(redis: R, job: Job) {
  const squeueJob = JSON.stringify(job);
  await redis.rpushx(SQUEUE, squeueJob);
}
