import { Stream } from "../stream/Stream";

export type Protocol = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  streams?: Array<Stream>;
  updatedAt: Date;
  version: string | null;
};
