import { Connection } from "../connection/Connection";
import { Protocol } from "../protocol/Protocol";

export type Stream = {
  connections?: Array<Connection>;
  createdAt: Date;
  createdBy: string | null;
  id: string;
  protocol?: Protocol | null;
  status?: "Option1" | null;
  streamUrl: string | null;
  updatedAt: Date;
};
