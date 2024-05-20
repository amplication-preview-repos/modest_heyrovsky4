export type LiveFeed = {
  active: boolean | null;
  createdAt: Date;
  id: string;
  resolution?: "Option1" | null;
  updatedAt: Date;
  url: string | null;
};
