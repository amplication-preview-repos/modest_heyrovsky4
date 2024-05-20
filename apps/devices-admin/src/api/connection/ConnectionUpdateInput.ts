import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";

export type ConnectionUpdateInput = {
  connectionType?: "Option1" | null;
  device?: DeviceWhereUniqueInput | null;
  status?: "Option1" | null;
};
