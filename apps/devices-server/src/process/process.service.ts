import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcessServiceBase } from "./base/process.service.base";

@Injectable()
export class ProcessService extends ProcessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
