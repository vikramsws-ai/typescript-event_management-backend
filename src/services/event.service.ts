import * as eventRepository from '../repository/event.repository';
import type { CreateEventRequestDto } from '../dto/event.dto';
import {
  toCreateEventData,
  toEventResponse,
} from '../transformers/event.transformer';

export const createEvent = async (data: CreateEventRequestDto) => {
  try {
    const eventData = toCreateEventData(data);

    const event = await eventRepository.createEvent(eventData);

    return toEventResponse(event);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create event', { cause: error });
  }
};
