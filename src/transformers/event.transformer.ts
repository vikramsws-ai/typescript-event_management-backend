import type { Event, Prisma } from '../../generated/prisma/client';
import type { CreateEventRequestDto } from '../dto/event.dto';

export const toCreateEventData = (
  data: CreateEventRequestDto
): Prisma.EventCreateInput => {
  return {
    event_name: data.event_name.trim(),
    location: data.location.trim(),
    start_date: new Date(data.start_date),
    end_date: new Date(data.end_date),
  };
};

// Response transformation
export const toEventResponse = (event: Event) => {
  return {
    event_id: event.event_id,
    event_name: event.event_name,
    location: event.location,
    start_date: event.start_date.toISOString(),
    end_date: event.end_date.toISOString(),
    created_at: event.created_at.toISOString(),
    updated_at: event.updated_at.toISOString(),
  };
};
