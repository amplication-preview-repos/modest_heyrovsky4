import { GestureWhereInput } from "./GestureWhereInput";
import { GestureOrderByInput } from "./GestureOrderByInput";

export type GestureFindManyArgs = {
  where?: GestureWhereInput;
  orderBy?: Array<GestureOrderByInput>;
  skip?: number;
  take?: number;
};
