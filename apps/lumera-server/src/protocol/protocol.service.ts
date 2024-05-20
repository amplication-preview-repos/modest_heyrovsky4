import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProtocolServiceBase } from "./base/protocol.service.base";

@Injectable()
export class ProtocolService extends ProtocolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
