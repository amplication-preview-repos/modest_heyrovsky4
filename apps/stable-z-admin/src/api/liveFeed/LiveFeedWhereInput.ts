import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LiveFeedWhereInput = {
  active?: BooleanNullableFilter;
  id?: StringFilter;
  resolution?: "Option1";
  url?: StringNullableFilter;
};
