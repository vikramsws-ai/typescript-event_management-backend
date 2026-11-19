import { prisma } from '../config/prisma';
import { Prisma } from '../../generated/prisma/client';

export const createEvent = async (data: Prisma.EventCreateInput) => {
  return await prisma.event.create({
    data,
  });
};
