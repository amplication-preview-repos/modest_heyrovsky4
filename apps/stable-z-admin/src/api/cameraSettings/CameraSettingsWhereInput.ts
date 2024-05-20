import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CameraSettingsWhereInput = {
  autoFocus?: BooleanNullableFilter;
  id?: StringFilter;
  stabilization?: BooleanNullableFilter;
};
