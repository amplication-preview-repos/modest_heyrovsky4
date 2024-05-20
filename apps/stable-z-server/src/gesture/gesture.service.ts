import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GestureServiceBase } from "./base/gesture.service.base";

@Injectable()
export class GestureService extends GestureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
