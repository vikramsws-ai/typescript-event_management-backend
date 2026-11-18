export type CreateEventDto = {
  event_name: string;
  location: string;
  start_date: string;
  end_date: string;
};
export type EventResponseDto = {
  event_id: string;
  event_name: string;
  location: string;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
};
