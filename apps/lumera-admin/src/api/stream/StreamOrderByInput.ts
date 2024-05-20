import { SortOrder } from "../../util/SortOrder";

export type StreamOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  protocolId?: SortOrder;
  status?: SortOrder;
  streamUrl?: SortOrder;
  updatedAt?: SortOrder;
};
