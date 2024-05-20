/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Gesture as PrismaGesture } from "@prisma/client";

export class GestureServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.GestureCountArgs, "select">): Promise<number> {
    return this.prisma.gesture.count(args);
  }

  async gestures<T extends Prisma.GestureFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GestureFindManyArgs>
  ): Promise<PrismaGesture[]> {
    return this.prisma.gesture.findMany<Prisma.GestureFindManyArgs>(args);
  }
  async gesture<T extends Prisma.GestureFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GestureFindUniqueArgs>
  ): Promise<PrismaGesture | null> {
    return this.prisma.gesture.findUnique(args);
  }
  async createGesture<T extends Prisma.GestureCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GestureCreateArgs>
  ): Promise<PrismaGesture> {
    return this.prisma.gesture.create<T>(args);
  }
  async updateGesture<T extends Prisma.GestureUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GestureUpdateArgs>
  ): Promise<PrismaGesture> {
    return this.prisma.gesture.update<T>(args);
  }
  async deleteGesture<T extends Prisma.GestureDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GestureDeleteArgs>
  ): Promise<PrismaGesture> {
    return this.prisma.gesture.delete(args);
  }
}
