/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MedicinesDto } from '../models/medicines-dto';
import { UpdateMedicinesDto } from '../models/update-medicines-dto';
import { CreateMedicinesDto } from '../models/create-medicines-dto';
@Injectable({
  providedIn: 'root',
})
class MedicinesService extends __BaseService {
  static readonly getMedicinesAllPath = '/medicines/all';
  static readonly getMedicinesIdPath = '/medicines/{id}';
  static readonly postMedicinesIdPath = '/medicines/{id}';
  static readonly deleteMedicinesIdPath = '/medicines/{id}';
  static readonly putMedicinesPath = '/medicines';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return All medicines
   */
  getMedicinesAllResponse(): __Observable<__StrictHttpResponse<Array<MedicinesDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/medicines/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MedicinesDto>>;
      })
    );
  }
  /**
   * @return All medicines
   */
  getMedicinesAll(): __Observable<Array<MedicinesDto>> {
    return this.getMedicinesAllResponse().pipe(
      __map(_r => _r.body as Array<MedicinesDto>)
    );
  }

  /**
   * @param id Medicines id to retrieve
   * @return Medicines found
   */
  getMedicinesIdResponse(id: number): __Observable<__StrictHttpResponse<MedicinesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/medicines/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MedicinesDto>;
      })
    );
  }
  /**
   * @param id Medicines id to retrieve
   * @return Medicines found
   */
  getMedicinesId(id: number): __Observable<MedicinesDto> {
    return this.getMedicinesIdResponse(id).pipe(
      __map(_r => _r.body as MedicinesDto)
    );
  }

  /**
   * @param params The `MedicinesService.PostMedicinesIdParams` containing the following parameters:
   *
   * - `id`: Medicines id to update
   *
   * - `UpdateMedicinesDto`: Medicines information to update
   *
   * @return Medicines updated
   */
  postMedicinesIdResponse(params: MedicinesService.PostMedicinesIdParams): __Observable<__StrictHttpResponse<MedicinesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.UpdateMedicinesDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/medicines/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MedicinesDto>;
      })
    );
  }
  /**
   * @param params The `MedicinesService.PostMedicinesIdParams` containing the following parameters:
   *
   * - `id`: Medicines id to update
   *
   * - `UpdateMedicinesDto`: Medicines information to update
   *
   * @return Medicines updated
   */
  postMedicinesId(params: MedicinesService.PostMedicinesIdParams): __Observable<MedicinesDto> {
    return this.postMedicinesIdResponse(params).pipe(
      __map(_r => _r.body as MedicinesDto)
    );
  }

  /**
   * @param id Medicines id to delete
   */
  deleteMedicinesIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/medicines/${id}`,
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
   * @param id Medicines id to delete
   */
  deleteMedicinesId(id: number): __Observable<null> {
    return this.deleteMedicinesIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param CreateMedicinesDto Medicines to create
   * @return Medicines found
   */
  putMedicinesResponse(CreateMedicinesDto: CreateMedicinesDto): __Observable<__StrictHttpResponse<MedicinesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CreateMedicinesDto;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/medicines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MedicinesDto>;
      })
    );
  }
  /**
   * @param CreateMedicinesDto Medicines to create
   * @return Medicines found
   */
  putMedicines(CreateMedicinesDto: CreateMedicinesDto): __Observable<MedicinesDto> {
    return this.putMedicinesResponse(CreateMedicinesDto).pipe(
      __map(_r => _r.body as MedicinesDto)
    );
  }
}

module MedicinesService {

  /**
   * Parameters for postMedicinesId
   */
  export interface PostMedicinesIdParams {

    /**
     * Medicines id to update
     */
    id: number;

    /**
     * Medicines information to update
     */
    UpdateMedicinesDto: UpdateMedicinesDto;
  }
}

export { MedicinesService }
