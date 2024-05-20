import { Process as TProcess } from "../api/process/Process";

export const PROCESS_TITLE_FIELD = "name";

export const ProcessTitle = (record: TProcess): string => {
  return record.name?.toString() || String(record.id);
};
