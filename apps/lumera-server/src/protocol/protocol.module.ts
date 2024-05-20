import { Module } from "@nestjs/common";
import { ProtocolModuleBase } from "./base/protocol.module.base";
import { ProtocolService } from "./protocol.service";
import { ProtocolController } from "./protocol.controller";
import { ProtocolResolver } from "./protocol.resolver";

@Module({
  imports: [ProtocolModuleBase],
  controllers: [ProtocolController],
  providers: [ProtocolService, ProtocolResolver],
  exports: [ProtocolService],
})
export class ProtocolModule {}
