import { prisma } from '../config/prisma.js';
import { Prisma } from '../../generated/prisma/client.js';

export const createEvent = async (data: Prisma.EventCreateInput) => {
  return await prisma.event.create({
    data,
  });
};
