import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StreamWhereUniqueInput } from "../stream/StreamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConnectionWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  status?: "Option1";
  stream?: StreamWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
