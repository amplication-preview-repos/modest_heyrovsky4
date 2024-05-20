import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { STREAM_TITLE_FIELD } from "./StreamTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PROTOCOL_TITLE_FIELD } from "../protocol/ProtocolTitle";

export const StreamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="CreatedBy" source="createdBy" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Protocol"
          source="protocol.id"
          reference="Protocol"
        >
          <TextField source={PROTOCOL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
        <TextField label="StreamURL" source="streamUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Connection"
          target="streamId"
          label="Connections"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="EndTime" source="endTime" />
            <TextField label="ID" source="id" />
            <TextField label="StartTime" source="startTime" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Stream"
              source="stream.id"
              reference="Stream"
            >
              <TextField source={STREAM_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
