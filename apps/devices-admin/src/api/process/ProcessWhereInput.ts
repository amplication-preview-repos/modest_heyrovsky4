import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProcessWhereInput = {
  associatedDevice?: StringNullableFilter;
  id?: StringFilter;
  linkedDevice?: StringNullableFilter;
  name?: StringNullableFilter;
  pid?: IntNullableFilter;
  status?: "Option1";
};
