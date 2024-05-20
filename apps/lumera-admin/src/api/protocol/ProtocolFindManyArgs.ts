import { ProtocolWhereInput } from "./ProtocolWhereInput";
import { ProtocolOrderByInput } from "./ProtocolOrderByInput";

export type ProtocolFindManyArgs = {
  where?: ProtocolWhereInput;
  orderBy?: Array<ProtocolOrderByInput>;
  skip?: number;
  take?: number;
};
