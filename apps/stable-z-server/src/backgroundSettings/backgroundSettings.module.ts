import { Module } from "@nestjs/common";
import { BackgroundSettingsModuleBase } from "./base/backgroundSettings.module.base";
import { BackgroundSettingsService } from "./backgroundSettings.service";
import { BackgroundSettingsController } from "./backgroundSettings.controller";
import { BackgroundSettingsResolver } from "./backgroundSettings.resolver";

@Module({
  imports: [BackgroundSettingsModuleBase],
  controllers: [BackgroundSettingsController],
  providers: [BackgroundSettingsService, BackgroundSettingsResolver],
  exports: [BackgroundSettingsService],
})
export class BackgroundSettingsModule {}
