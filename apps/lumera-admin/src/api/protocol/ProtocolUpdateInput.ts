import { StreamUpdateManyWithoutProtocolsInput } from "./StreamUpdateManyWithoutProtocolsInput";

export type ProtocolUpdateInput = {
  description?: string | null;
  name?: string | null;
  streams?: StreamUpdateManyWithoutProtocolsInput;
  version?: string | null;
};
