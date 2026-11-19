import * as eventRepository from '../repository/event.repository.js';
import type { CreateEventRequestDto } from '../dto/event.dto.js';
import {
  toCreateEventData,
  toEventResponse,
} from '../transformers/event.transformer.js';

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
