import type { components } from '../generated/types/api.js';

// Request DTO
export type CreateEventRequestDto = components['schemas']['CreateEventRequest'];

// Event DTO
export type EventResponseDto = components['schemas']['Event'];

// Complete API response DTO
export type CreateEventResponseDto = {
  message: string;
  data?: EventResponseDto;
};
