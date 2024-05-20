import { StreamWhereInput } from "./StreamWhereInput";

export type StreamListRelationFilter = {
  every?: StreamWhereInput;
  some?: StreamWhereInput;
  none?: StreamWhereInput;
};
