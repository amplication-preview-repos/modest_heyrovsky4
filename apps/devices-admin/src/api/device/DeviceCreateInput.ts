import { ConnectionCreateNestedManyWithoutDevicesInput } from "./ConnectionCreateNestedManyWithoutDevicesInput";

export type DeviceCreateInput = {
  connections?: ConnectionCreateNestedManyWithoutDevicesInput;
  deviceType?: "Option1" | null;
  name?: string | null;
  status?: "Option1" | null;
};
