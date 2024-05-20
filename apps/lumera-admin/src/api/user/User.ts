import { Connection } from "../connection/Connection";

export type User = {
  connections?: Array<Connection>;
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  updatedAt: Date;
  username: string | null;
};
