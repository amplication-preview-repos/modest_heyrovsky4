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
import { GestureWhereInput } from "./GestureWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GestureListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GestureWhereInput,
  })
  @ValidateNested()
  @Type(() => GestureWhereInput)
  @IsOptional()
  @Field(() => GestureWhereInput, {
    nullable: true,
  })
  every?: GestureWhereInput;

  @ApiProperty({
    required: false,
    type: () => GestureWhereInput,
  })
  @ValidateNested()
  @Type(() => GestureWhereInput)
  @IsOptional()
  @Field(() => GestureWhereInput, {
    nullable: true,
  })
  some?: GestureWhereInput;

  @ApiProperty({
    required: false,
    type: () => GestureWhereInput,
  })
  @ValidateNested()
  @Type(() => GestureWhereInput)
  @IsOptional()
  @Field(() => GestureWhereInput, {
    nullable: true,
  })
  none?: GestureWhereInput;
}
export { GestureListRelationFilter as GestureListRelationFilter };
