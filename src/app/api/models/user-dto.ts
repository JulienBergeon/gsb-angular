/* tslint:disable */
export interface UserDto {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  role: 'Commercial' | 'Doctor';
  gender: 'Male' | 'Female';
  doctors?: Array<number>;
}
