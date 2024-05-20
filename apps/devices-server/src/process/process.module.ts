import { Module } from "@nestjs/common";
import { ProcessModuleBase } from "./base/process.module.base";
import { ProcessService } from "./process.service";
import { ProcessController } from "./process.controller";
import { ProcessResolver } from "./process.resolver";

@Module({
  imports: [ProcessModuleBase],
  controllers: [ProcessController],
  providers: [ProcessService, ProcessResolver],
  exports: [ProcessService],
})
export class ProcessModule {}
