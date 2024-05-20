import { Device } from "../device/Device";

export type Connection = {
  connectionType?: "Option1" | null;
  createdAt: Date;
  device?: Device | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
