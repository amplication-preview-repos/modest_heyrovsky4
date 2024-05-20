import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const GestureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Command" source="command" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
