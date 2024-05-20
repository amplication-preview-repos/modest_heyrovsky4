import { ConnectionWhereUniqueInput } from "./ConnectionWhereUniqueInput";
import { ConnectionUpdateInput } from "./ConnectionUpdateInput";

export type UpdateConnectionArgs = {
  where: ConnectionWhereUniqueInput;
  data: ConnectionUpdateInput;
};
