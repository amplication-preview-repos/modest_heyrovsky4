import { LiveFeed as TLiveFeed } from "../api/liveFeed/LiveFeed";

export const LIVEFEED_TITLE_FIELD = "url";

export const LiveFeedTitle = (record: TLiveFeed): string => {
  return record.url?.toString() || String(record.id);
};
