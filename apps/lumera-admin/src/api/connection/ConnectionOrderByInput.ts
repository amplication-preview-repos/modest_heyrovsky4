import { SortOrder } from "../../util/SortOrder";

export type ConnectionOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  status?: SortOrder;
  streamId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
