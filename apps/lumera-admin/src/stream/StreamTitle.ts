import { Stream as TStream } from "../api/stream/Stream";

export const STREAM_TITLE_FIELD = "createdBy";

export const StreamTitle = (record: TStream): string => {
  return record.createdBy?.toString() || String(record.id);
};
