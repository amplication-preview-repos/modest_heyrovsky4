import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CameraSettingsServiceBase } from "./base/cameraSettings.service.base";

@Injectable()
export class CameraSettingsService extends CameraSettingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
