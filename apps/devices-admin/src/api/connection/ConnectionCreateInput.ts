import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";

export type ConnectionCreateInput = {
  connectionType?: "Option1" | null;
  device?: DeviceWhereUniqueInput | null;
  status?: "Option1" | null;
};
