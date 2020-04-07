/* tslint:disable */
import { MedicinesDto } from './medicines-dto';
export interface UserDto {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  role: 'Commercial' | 'Doctor';
  gender: 'Male' | 'Female';
  medicines: Array<MedicinesDto>;
}
