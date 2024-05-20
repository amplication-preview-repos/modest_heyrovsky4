import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ProcessCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AssociatedDevice" source="associatedDevice" />
        <TextInput label="LinkedDevice" source="linkedDevice" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="PID" source="pid" />
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
