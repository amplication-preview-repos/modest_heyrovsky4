import { StreamWhereUniqueInput } from "./StreamWhereUniqueInput";
import { StreamUpdateInput } from "./StreamUpdateInput";

export type UpdateStreamArgs = {
  where: StreamWhereUniqueInput;
  data: StreamUpdateInput;
};
