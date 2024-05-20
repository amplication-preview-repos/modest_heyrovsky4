import { BackgroundSettingsWhereInput } from "./BackgroundSettingsWhereInput";
import { BackgroundSettingsOrderByInput } from "./BackgroundSettingsOrderByInput";

export type BackgroundSettingsFindManyArgs = {
  where?: BackgroundSettingsWhereInput;
  orderBy?: Array<BackgroundSettingsOrderByInput>;
  skip?: number;
  take?: number;
};
