/* tslint:disable */
export interface CreateUserDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  role: 'Commercial' | 'Doctor';
  gender: 'Male' | 'Female';
}
