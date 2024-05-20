import { BackgroundSettings as TBackgroundSettings } from "../api/backgroundSettings/BackgroundSettings";

export const BACKGROUNDSETTINGS_TITLE_FIELD = "id";

export const BackgroundSettingsTitle = (
  record: TBackgroundSettings
): string => {
  return record.id?.toString() || String(record.id);
};
