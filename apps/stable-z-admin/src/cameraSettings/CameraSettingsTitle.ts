import { CameraSettings as TCameraSettings } from "../api/cameraSettings/CameraSettings";

export const CAMERASETTINGS_TITLE_FIELD = "id";

export const CameraSettingsTitle = (record: TCameraSettings): string => {
  return record.id?.toString() || String(record.id);
};
