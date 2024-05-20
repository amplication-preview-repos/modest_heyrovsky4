import { StreamWhereUniqueInput } from "../stream/StreamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConnectionCreateInput = {
  endTime?: Date | null;
  startTime?: Date | null;
  status?: "Option1" | null;
  stream?: StreamWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
