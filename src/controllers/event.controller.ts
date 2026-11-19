import type { RequestHandler } from 'express';
import * as eventService from '../services/event.service';
import type {
  CreateEventRequestDto,
  CreateEventResponseDto,
} from '../dto/event.dto.js';

export const createEvent: RequestHandler<
  Record<string, never>,
  CreateEventResponseDto,
  CreateEventRequestDto
> = async (req, res) => {
  try {
    const event = await eventService.createEvent(req.body);

    res.status(201).json({
      message: 'Event created successfully',
      data: event,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Failed to create event',
    });
  }
};
