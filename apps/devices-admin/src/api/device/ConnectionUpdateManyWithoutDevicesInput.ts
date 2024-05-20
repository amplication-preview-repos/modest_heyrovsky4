import { ConnectionWhereUniqueInput } from "../connection/ConnectionWhereUniqueInput";

export type ConnectionUpdateManyWithoutDevicesInput = {
  connect?: Array<ConnectionWhereUniqueInput>;
  disconnect?: Array<ConnectionWhereUniqueInput>;
  set?: Array<ConnectionWhereUniqueInput>;
};
