import { SortOrder } from "../../util/SortOrder";

export type LiveFeedOrderByInput = {
  active?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  resolution?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
