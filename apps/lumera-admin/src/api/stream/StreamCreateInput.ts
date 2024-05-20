import { ConnectionCreateNestedManyWithoutStreamsInput } from "./ConnectionCreateNestedManyWithoutStreamsInput";
import { ProtocolWhereUniqueInput } from "../protocol/ProtocolWhereUniqueInput";

export type StreamCreateInput = {
  connections?: ConnectionCreateNestedManyWithoutStreamsInput;
  createdBy?: string | null;
  protocol?: ProtocolWhereUniqueInput | null;
  status?: "Option1" | null;
  streamUrl?: string | null;
};
