import { Protocol as TProtocol } from "../api/protocol/Protocol";

export const PROTOCOL_TITLE_FIELD = "name";

export const ProtocolTitle = (record: TProtocol): string => {
  return record.name?.toString() || String(record.id);
};
