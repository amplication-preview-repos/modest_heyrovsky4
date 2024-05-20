import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";

export const LiveFeedShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Active" source="active" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Resolution" source="resolution" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="URL" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
