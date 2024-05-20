import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StreamListRelationFilter } from "../stream/StreamListRelationFilter";

export type ProtocolWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  streams?: StreamListRelationFilter;
  version?: StringNullableFilter;
};
