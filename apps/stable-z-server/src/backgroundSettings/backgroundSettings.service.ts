import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BackgroundSettingsServiceBase } from "./base/backgroundSettings.service.base";

@Injectable()
export class BackgroundSettingsService extends BackgroundSettingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
