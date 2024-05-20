/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumConnectionConnectionType } from "./EnumConnectionConnectionType";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { DeviceWhereUniqueInput } from "../../device/base/DeviceWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumConnectionStatus } from "./EnumConnectionStatus";

@InputType()
class ConnectionCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumConnectionConnectionType,
  })
  @IsEnum(EnumConnectionConnectionType)
  @IsOptional()
  @Field(() => EnumConnectionConnectionType, {
    nullable: true,
  })
  connectionType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => DeviceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DeviceWhereUniqueInput)
  @IsOptional()
  @Field(() => DeviceWhereUniqueInput, {
    nullable: true,
  })
  device?: DeviceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumConnectionStatus,
  })
  @IsEnum(EnumConnectionStatus)
  @IsOptional()
  @Field(() => EnumConnectionStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { ConnectionCreateInput as ConnectionCreateInput };
