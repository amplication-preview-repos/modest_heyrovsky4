/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BackgroundSettingsWhereInput } from "./BackgroundSettingsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BackgroundSettingsOrderByInput } from "./BackgroundSettingsOrderByInput";

@ArgsType()
class BackgroundSettingsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BackgroundSettingsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BackgroundSettingsWhereInput, { nullable: true })
  @Type(() => BackgroundSettingsWhereInput)
  where?: BackgroundSettingsWhereInput;

  @ApiProperty({
    required: false,
    type: [BackgroundSettingsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BackgroundSettingsOrderByInput], { nullable: true })
  @Type(() => BackgroundSettingsOrderByInput)
  orderBy?: Array<BackgroundSettingsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BackgroundSettingsFindManyArgs as BackgroundSettingsFindManyArgs };
