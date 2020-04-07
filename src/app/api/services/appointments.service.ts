/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AppointmentDto } from '../models/appointment-dto';
import { CreateAppointmentDto } from '../models/create-appointment-dto';
import { UpdateAppointmentDto } from '../models/update-appointment-dto';
@Injectable({
  providedIn: 'root',
})
class AppointmentsService extends __BaseService {
  static readonly getAppointmentsPath = '/appointments';
  static readonly putAppointmentsPath = '/appointments';
  static readonly getAppointmentsMePath = '/appointments/me';
  static readonly getAppointmentsIdPath = '/appointments/{id}';
  static readonly postAppointmentsIdPath = '/appointments/{id}';
  static readonly deleteAppointmentsIdPath = '/appointments/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return All appointments
   */
  getAppointmentsResponse(): __Observable<__StrictHttpResponse<Array<AppointmentDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/appointments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AppointmentDto>>;
      })
    );
  }
  /**
   * @return All appointments
   */
  getAppointments(): __Observable<Array<AppointmentDto>> {
    return this.getAppointmentsResponse().pipe(
      __map(_r => _r.body as Array<AppointmentDto>)
    );
  }

  /**
   * @param CreateAppointmentDto Appointment to create
   * @return Appointment found
   */
  putAppointmentsResponse(CreateAppointmentDto: CreateAppointmentDto): __Observable<__StrictHttpResponse<AppointmentDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CreateAppointmentDto;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/appointments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AppointmentDto>;
      })
    );
  }
  /**
   * @param CreateAppointmentDto Appointment to create
   * @return Appointment found
   */
  putAppointments(CreateAppointmentDto: CreateAppointmentDto): __Observable<AppointmentDto> {
    return this.putAppointmentsResponse(CreateAppointmentDto).pipe(
      __map(_r => _r.body as AppointmentDto)
    );
  }

  /**
   * @return Appointment found
   */
  getAppointmentsMeResponse(): __Observable<__StrictHttpResponse<AppointmentDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/appointments/me`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AppointmentDto>;
      })
    );
  }
  /**
   * @return Appointment found
   */
  getAppointmentsMe(): __Observable<AppointmentDto> {
    return this.getAppointmentsMeResponse().pipe(
      __map(_r => _r.body as AppointmentDto)
    );
  }

  /**
   * @param id Appointment id to retrieve
   * @return Appointment found
   */
  getAppointmentsIdResponse(id: number): __Observable<__StrictHttpResponse<AppointmentDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/appointments/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AppointmentDto>;
      })
    );
  }
  /**
   * @param id Appointment id to retrieve
   * @return Appointment found
   */
  getAppointmentsId(id: number): __Observable<AppointmentDto> {
    return this.getAppointmentsIdResponse(id).pipe(
      __map(_r => _r.body as AppointmentDto)
    );
  }

  /**
   * @param params The `AppointmentsService.PostAppointmentsIdParams` containing the following parameters:
   *
   * - `id`: Appointment id to update
   *
   * - `UpdateAppointmentDto`: Appointment information to update
   *
   * @return Appointment updated
   */
  postAppointmentsIdResponse(params: AppointmentsService.PostAppointmentsIdParams): __Observable<__StrictHttpResponse<AppointmentDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.UpdateAppointmentDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/appointments/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AppointmentDto>;
      })
    );
  }
  /**
   * @param params The `AppointmentsService.PostAppointmentsIdParams` containing the following parameters:
   *
   * - `id`: Appointment id to update
   *
   * - `UpdateAppointmentDto`: Appointment information to update
   *
   * @return Appointment updated
   */
  postAppointmentsId(params: AppointmentsService.PostAppointmentsIdParams): __Observable<AppointmentDto> {
    return this.postAppointmentsIdResponse(params).pipe(
      __map(_r => _r.body as AppointmentDto)
    );
  }

  /**
   * @param id Appointment id to delete
   */
  deleteAppointmentsIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/appointments/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id Appointment id to delete
   */
  deleteAppointmentsId(id: number): __Observable<null> {
    return this.deleteAppointmentsIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AppointmentsService {

  /**
   * Parameters for postAppointmentsId
   */
  export interface PostAppointmentsIdParams {

    /**
     * Appointment id to update
     */
    id: number;

    /**
     * Appointment information to update
     */
    UpdateAppointmentDto: UpdateAppointmentDto;
  }
}

export { AppointmentsService }
