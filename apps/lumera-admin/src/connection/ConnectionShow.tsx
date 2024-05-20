import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { STREAM_TITLE_FIELD } from "../stream/StreamTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ConnectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="EndTime" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="StartTime" source="startTime" />
        <TextField label="Status" source="status" />
        <ReferenceField label="Stream" source="stream.id" reference="Stream">
          <TextField source={STREAM_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
