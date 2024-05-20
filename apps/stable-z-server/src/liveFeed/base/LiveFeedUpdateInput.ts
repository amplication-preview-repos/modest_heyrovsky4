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
import { IsBoolean, IsOptional, IsEnum, IsString } from "class-validator";
import { EnumLiveFeedResolution } from "./EnumLiveFeedResolution";

@InputType()
class LiveFeedUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  active?: boolean | null;

  @ApiProperty({
    required: false,
    enum: EnumLiveFeedResolution,
  })
  @IsEnum(EnumLiveFeedResolution)
  @IsOptional()
  @Field(() => EnumLiveFeedResolution, {
    nullable: true,
  })
  resolution?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url?: string | null;
}

export { LiveFeedUpdateInput as LiveFeedUpdateInput };
