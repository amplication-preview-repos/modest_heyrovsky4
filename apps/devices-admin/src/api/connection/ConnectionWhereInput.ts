import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ConnectionWhereInput = {
  connectionType?: "Option1";
  device?: DeviceWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
};
