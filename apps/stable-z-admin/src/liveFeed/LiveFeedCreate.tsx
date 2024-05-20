import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const LiveFeedCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Active" source="active" />
        <SelectInput
          source="resolution"
          label="Resolution"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Create>
  );
};
