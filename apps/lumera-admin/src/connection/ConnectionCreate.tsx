import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { StreamTitle } from "../stream/StreamTitle";
import { UserTitle } from "../user/UserTitle";

export const ConnectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="EndTime" source="endTime" />
        <DateTimeInput label="StartTime" source="startTime" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="stream.id" reference="Stream" label="Stream">
          <SelectInput optionText={StreamTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
