import { Module } from "@nestjs/common";
import { GestureModuleBase } from "./base/gesture.module.base";
import { GestureService } from "./gesture.service";
import { GestureController } from "./gesture.controller";
import { GestureResolver } from "./gesture.resolver";

@Module({
  imports: [GestureModuleBase],
  controllers: [GestureController],
  providers: [GestureService, GestureResolver],
  exports: [GestureService],
})
export class GestureModule {}
