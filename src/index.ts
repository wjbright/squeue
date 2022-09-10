import express, { Request, Response } from "express";
import squeue from "./squeue";
const app = express();

app.get("/", async function (req: Request, res: Response) {
  const { queue } = await squeue();
  res.json(queue);
});

app.get("/add", async (req: Request, res: Response) => {
  const _queue = await squeue();

  await _queue.enqueue({
    id: "4",
    data: {
      key: "value pair too",
    },
  });

  const { queue } = await squeue();

  res.json(queue);
});

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
