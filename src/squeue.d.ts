import { Job } from "./interfaces/squeue";
export default function squeue(): Promise<{
    queue: string[];
    enqueue: (job: Job) => Promise<void>;
}>;
//# sourceMappingURL=squeue.d.ts.map