import { SortOrder } from "../../util/SortOrder";

export type GestureOrderByInput = {
  command?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
