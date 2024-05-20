import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BackgroundSettingsWhereInput = {
  brightness?: FloatNullableFilter;
  contrast?: FloatNullableFilter;
  enableLiveFeed?: BooleanNullableFilter;
  id?: StringFilter;
};
