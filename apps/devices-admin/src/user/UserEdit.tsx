import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Password" source="password" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
