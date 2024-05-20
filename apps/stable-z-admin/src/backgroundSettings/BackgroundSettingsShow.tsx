import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const BackgroundSettingsShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Brightness" source="brightness" />
        <TextField label="Contrast" source="contrast" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="EnableLiveFeed" source="enableLiveFeed" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
