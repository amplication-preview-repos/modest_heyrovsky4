import { SortOrder } from "../../util/SortOrder";

export type ProcessOrderByInput = {
  associatedDevice?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  linkedDevice?: SortOrder;
  name?: SortOrder;
  pid?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
