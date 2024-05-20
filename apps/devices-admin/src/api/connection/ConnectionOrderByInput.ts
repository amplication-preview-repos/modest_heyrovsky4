import { SortOrder } from "../../util/SortOrder";

export type ConnectionOrderByInput = {
  connectionType?: SortOrder;
  createdAt?: SortOrder;
  deviceId?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
