import { LiveFeedWhereInput } from "./LiveFeedWhereInput";
import { LiveFeedOrderByInput } from "./LiveFeedOrderByInput";

export type LiveFeedFindManyArgs = {
  where?: LiveFeedWhereInput;
  orderBy?: Array<LiveFeedOrderByInput>;
  skip?: number;
  take?: number;
};
