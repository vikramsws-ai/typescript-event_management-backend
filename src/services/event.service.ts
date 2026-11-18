import * as eventRepository from '../repository/event.repository.js';
import type { Prisma } from '../../generated/prisma/client.js';

export const createEvent = async (data: Prisma.EventCreateInput) => {
  return eventRepository.createEvent(data);
};
