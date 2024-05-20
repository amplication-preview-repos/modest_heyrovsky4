import { ConnectionUpdateManyWithoutUsersInput } from "./ConnectionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  connections?: ConnectionUpdateManyWithoutUsersInput;
  email?: string | null;
  password?: string | null;
  username?: string | null;
};
