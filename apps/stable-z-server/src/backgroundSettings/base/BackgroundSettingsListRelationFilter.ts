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
import { BackgroundSettingsWhereInput } from "./BackgroundSettingsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BackgroundSettingsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BackgroundSettingsWhereInput,
  })
  @ValidateNested()
  @Type(() => BackgroundSettingsWhereInput)
  @IsOptional()
  @Field(() => BackgroundSettingsWhereInput, {
    nullable: true,
  })
  every?: BackgroundSettingsWhereInput;

  @ApiProperty({
    required: false,
    type: () => BackgroundSettingsWhereInput,
  })
  @ValidateNested()
  @Type(() => BackgroundSettingsWhereInput)
  @IsOptional()
  @Field(() => BackgroundSettingsWhereInput, {
    nullable: true,
  })
  some?: BackgroundSettingsWhereInput;

  @ApiProperty({
    required: false,
    type: () => BackgroundSettingsWhereInput,
  })
  @ValidateNested()
  @Type(() => BackgroundSettingsWhereInput)
  @IsOptional()
  @Field(() => BackgroundSettingsWhereInput, {
    nullable: true,
  })
  none?: BackgroundSettingsWhereInput;
}
export { BackgroundSettingsListRelationFilter as BackgroundSettingsListRelationFilter };
