import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ProcessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
