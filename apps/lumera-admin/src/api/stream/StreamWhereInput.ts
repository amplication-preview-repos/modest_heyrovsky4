import { ConnectionListRelationFilter } from "../connection/ConnectionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProtocolWhereUniqueInput } from "../protocol/ProtocolWhereUniqueInput";

export type StreamWhereInput = {
  connections?: ConnectionListRelationFilter;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  protocol?: ProtocolWhereUniqueInput;
  status?: "Option1";
  streamUrl?: StringNullableFilter;
};
