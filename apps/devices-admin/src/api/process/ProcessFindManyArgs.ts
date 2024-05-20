import { ProcessWhereInput } from "./ProcessWhereInput";
import { ProcessOrderByInput } from "./ProcessOrderByInput";

export type ProcessFindManyArgs = {
  where?: ProcessWhereInput;
  orderBy?: Array<ProcessOrderByInput>;
  skip?: number;
  take?: number;
};
