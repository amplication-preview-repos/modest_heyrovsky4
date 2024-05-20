import { Gesture as TGesture } from "../api/gesture/Gesture";

export const GESTURE_TITLE_FIELD = "name";

export const GestureTitle = (record: TGesture): string => {
  return record.name?.toString() || String(record.id);
};
