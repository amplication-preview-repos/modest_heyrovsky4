/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumConnectionConnectionType } from "./EnumConnectionConnectionType";
import {
  IsEnum,
  IsOptional,
  IsDate,
  ValidateNested,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { Device } from "../../device/base/Device";
import { EnumConnectionStatus } from "./EnumConnectionStatus";

@ObjectType()
class Connection {
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
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Device,
  })
  @ValidateNested()
  @Type(() => Device)
  @IsOptional()
  device?: Device | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Connection as Connection };
