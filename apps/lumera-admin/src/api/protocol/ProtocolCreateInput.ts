import { StreamCreateNestedManyWithoutProtocolsInput } from "./StreamCreateNestedManyWithoutProtocolsInput";

export type ProtocolCreateInput = {
  description?: string | null;
  name?: string | null;
  streams?: StreamCreateNestedManyWithoutProtocolsInput;
  version?: string | null;
};
