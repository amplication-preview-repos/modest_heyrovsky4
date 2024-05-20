import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { DeviceTitle } from "../device/DeviceTitle";

export const ConnectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="connectionType"
          label="ConnectionType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="device.id" reference="Device" label="Device">
          <SelectInput optionText={DeviceTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
