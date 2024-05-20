import { ConnectionUpdateManyWithoutStreamsInput } from "./ConnectionUpdateManyWithoutStreamsInput";
import { ProtocolWhereUniqueInput } from "../protocol/ProtocolWhereUniqueInput";

export type StreamUpdateInput = {
  connections?: ConnectionUpdateManyWithoutStreamsInput;
  createdBy?: string | null;
  protocol?: ProtocolWhereUniqueInput | null;
  status?: "Option1" | null;
  streamUrl?: string | null;
};
