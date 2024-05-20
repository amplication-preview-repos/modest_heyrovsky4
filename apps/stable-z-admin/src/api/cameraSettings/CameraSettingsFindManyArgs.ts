import { CameraSettingsWhereInput } from "./CameraSettingsWhereInput";
import { CameraSettingsOrderByInput } from "./CameraSettingsOrderByInput";

export type CameraSettingsFindManyArgs = {
  where?: CameraSettingsWhereInput;
  orderBy?: Array<CameraSettingsOrderByInput>;
  skip?: number;
  take?: number;
};
