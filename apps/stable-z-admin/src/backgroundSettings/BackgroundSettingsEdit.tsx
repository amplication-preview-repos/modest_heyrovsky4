import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const BackgroundSettingsEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Brightness" source="brightness" />
        <NumberInput label="Contrast" source="contrast" />
        <BooleanInput label="EnableLiveFeed" source="enableLiveFeed" />
      </SimpleForm>
    </Edit>
  );
};
