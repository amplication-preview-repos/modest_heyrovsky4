import { GestureWhereUniqueInput } from "./GestureWhereUniqueInput";
import { GestureUpdateInput } from "./GestureUpdateInput";

export type UpdateGestureArgs = {
  where: GestureWhereUniqueInput;
  data: GestureUpdateInput;
};
