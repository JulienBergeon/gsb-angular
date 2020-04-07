/* tslint:disable */
import { UserDto } from './user-dto';
export interface MeetingDto {
  id: number;
  attendee: UserDto;
  organizer: UserDto;
  date: number;
  state: 'Declined' | 'Accepted' | 'Pending';
}
