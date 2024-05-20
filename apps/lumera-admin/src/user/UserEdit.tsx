import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ConnectionTitle } from "../connection/ConnectionTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="connections"
          reference="Connection"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConnectionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Password" source="password" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
