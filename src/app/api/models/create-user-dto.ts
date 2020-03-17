/* tslint:disable */
export interface CreateUserDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  role: 'Patient' | 'Doctor';
  gender: 'Male' | 'Female';
}
