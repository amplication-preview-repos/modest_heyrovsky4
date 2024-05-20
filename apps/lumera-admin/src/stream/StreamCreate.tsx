import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ConnectionTitle } from "../connection/ConnectionTitle";
import { ProtocolTitle } from "../protocol/ProtocolTitle";

export const StreamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="connections"
          reference="Connection"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConnectionTitle} />
        </ReferenceArrayInput>
        <TextInput label="CreatedBy" source="createdBy" />
        <ReferenceInput
          source="protocol.id"
          reference="Protocol"
          label="Protocol"
        >
          <SelectInput optionText={ProtocolTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="StreamURL" source="streamUrl" />
      </SimpleForm>
    </Create>
  );
};
