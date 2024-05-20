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
import { ConnectionUpdateManyWithoutUsersInput } from "./ConnectionUpdateManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ConnectionUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ConnectionUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ConnectionUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  connections?: ConnectionUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string | null;
}

export { UserUpdateInput as UserUpdateInput };
