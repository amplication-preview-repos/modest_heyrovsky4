import { Module } from "@nestjs/common";
import { CameraSettingsModuleBase } from "./base/cameraSettings.module.base";
import { CameraSettingsService } from "./cameraSettings.service";
import { CameraSettingsController } from "./cameraSettings.controller";
import { CameraSettingsResolver } from "./cameraSettings.resolver";

@Module({
  imports: [CameraSettingsModuleBase],
  controllers: [CameraSettingsController],
  providers: [CameraSettingsService, CameraSettingsResolver],
  exports: [CameraSettingsService],
})
export class CameraSettingsModule {}
