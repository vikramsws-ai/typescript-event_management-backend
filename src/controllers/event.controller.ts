import { Request, Response } from 'express';
import * as eventService from '../services/event.service.js';
import {
  toCreateEventData,
  toEventResponse,
} from '../transformers/event.transformer.js';
import type { CreateEventDto, EventResponseDto } from '../dto/event.dto.js';

export const createEvent = async (
  req: Request<Record<string, never>, Record<string, never>, CreateEventDto>,
  res: Response<{ message: string; data?: EventResponseDto }>
) => {
  try {
    const eventData = toCreateEventData(req.body);

    const event = await eventService.createEvent(eventData);

    res.status(201).json({
      message: 'Event created successfully',
      data: toEventResponse(event),
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to create event',
    });
  }
};
