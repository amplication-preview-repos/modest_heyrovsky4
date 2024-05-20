import { ConnectionUpdateManyWithoutDevicesInput } from "./ConnectionUpdateManyWithoutDevicesInput";

export type DeviceUpdateInput = {
  connections?: ConnectionUpdateManyWithoutDevicesInput;
  deviceType?: "Option1" | null;
  name?: string | null;
  status?: "Option1" | null;
};
