import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const LiveFeedEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
