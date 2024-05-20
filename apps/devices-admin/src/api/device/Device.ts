import { Connection } from "../connection/Connection";

export type Device = {
  connections?: Array<Connection>;
  createdAt: Date;
  deviceType?: "Option1" | null;
  id: string;
  name: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
