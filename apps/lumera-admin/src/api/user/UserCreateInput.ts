import { ConnectionCreateNestedManyWithoutUsersInput } from "./ConnectionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  connections?: ConnectionCreateNestedManyWithoutUsersInput;
  email?: string | null;
  password?: string | null;
  username?: string | null;
};
