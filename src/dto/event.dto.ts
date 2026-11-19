import type { components } from '../generated/types/api';

// Request DTO
export type CreateEventRequestDto =
  components['schemas']['create-event-request'];

// Event DTO
export type EventResponseDto = components['schemas']['event'];

// Complete API response DTO
export type CreateEventResponseDto = {
  message: string;
  data?: EventResponseDto;
};
