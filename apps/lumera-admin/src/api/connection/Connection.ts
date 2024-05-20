import { Stream } from "../stream/Stream";
import { User } from "../user/User";

export type Connection = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  startTime: Date | null;
  status?: "Option1" | null;
  stream?: Stream | null;
  updatedAt: Date;
  user?: User | null;
};
