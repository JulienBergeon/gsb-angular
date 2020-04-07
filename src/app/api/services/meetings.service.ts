/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MeetingDto } from '../models/meeting-dto';
import { CreateMeetingDto } from '../models/create-meeting-dto';
@Injectable({
  providedIn: 'root',
})
class MeetingsService extends __BaseService {
  static readonly getMeetingsIdPath = '/meetings/{id}';
  static readonly putMeetingsPath = '/meetings';
  static readonly postMeetingsIdAcceptPath = '/meetings/{id}/accept';
  static readonly postMeetingsIdDeclinePath = '/meetings/{id}/decline';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param id undefined
   * @return User meetings
   */
  getMeetingsIdResponse(id: number): __Observable<__StrictHttpResponse<Array<MeetingDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/meetings/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MeetingDto>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return User meetings
   */
  getMeetingsId(id: number): __Observable<Array<MeetingDto>> {
    return this.getMeetingsIdResponse(id).pipe(
      __map(_r => _r.body as Array<MeetingDto>)
    );
  }

  /**
   * @param CreateMeetingDto Meeting to create
   * @return User found
   */
  putMeetingsResponse(CreateMeetingDto: CreateMeetingDto): __Observable<__StrictHttpResponse<MeetingDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CreateMeetingDto;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/meetings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MeetingDto>;
      })
    );
  }
  /**
   * @param CreateMeetingDto Meeting to create
   * @return User found
   */
  putMeetings(CreateMeetingDto: CreateMeetingDto): __Observable<MeetingDto> {
    return this.putMeetingsResponse(CreateMeetingDto).pipe(
      __map(_r => _r.body as MeetingDto)
    );
  }

  /**
   * @param id Meeting identifier to accept
   * @return Accepted Meeting
   */
  postMeetingsIdAcceptResponse(id: number): __Observable<__StrictHttpResponse<MeetingDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/meetings/${id}/accept`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MeetingDto>;
      })
    );
  }
  /**
   * @param id Meeting identifier to accept
   * @return Accepted Meeting
   */
  postMeetingsIdAccept(id: number): __Observable<MeetingDto> {
    return this.postMeetingsIdAcceptResponse(id).pipe(
      __map(_r => _r.body as MeetingDto)
    );
  }

  /**
   * @param id Meeting identifier to decline
   * @return Declined Meeting
   */
  postMeetingsIdDeclineResponse(id: number): __Observable<__StrictHttpResponse<MeetingDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/meetings/${id}/decline`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MeetingDto>;
      })
    );
  }
  /**
   * @param id Meeting identifier to decline
   * @return Declined Meeting
   */
  postMeetingsIdDecline(id: number): __Observable<MeetingDto> {
    return this.postMeetingsIdDeclineResponse(id).pipe(
      __map(_r => _r.body as MeetingDto)
    );
  }
}

module MeetingsService {
}

export { MeetingsService }
