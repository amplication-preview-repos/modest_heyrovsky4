import { ConnectionListRelationFilter } from "../connection/ConnectionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DeviceWhereInput = {
  connections?: ConnectionListRelationFilter;
  deviceType?: "Option1";
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: "Option1";
};
