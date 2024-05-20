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
import { ProtocolWhereUniqueInput } from "./ProtocolWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteProtocolArgs {
  @ApiProperty({
    required: true,
    type: () => ProtocolWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProtocolWhereUniqueInput)
  @Field(() => ProtocolWhereUniqueInput, { nullable: false })
  where!: ProtocolWhereUniqueInput;
}

export { DeleteProtocolArgs as DeleteProtocolArgs };
