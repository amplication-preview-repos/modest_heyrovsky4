import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const BackgroundSettingsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Brightness" source="brightness" />
        <NumberInput label="Contrast" source="contrast" />
        <BooleanInput label="EnableLiveFeed" source="enableLiveFeed" />
      </SimpleForm>
    </Create>
  );
};
