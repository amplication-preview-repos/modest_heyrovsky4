import { StreamWhereInput } from "./StreamWhereInput";
import { StreamOrderByInput } from "./StreamOrderByInput";

export type StreamFindManyArgs = {
  where?: StreamWhereInput;
  orderBy?: Array<StreamOrderByInput>;
  skip?: number;
  take?: number;
};
