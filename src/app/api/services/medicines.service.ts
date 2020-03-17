/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PaginatedMedicinesDto } from '../models/paginated-medicines-dto';
import { MedicinesDto } from '../models/medicines-dto';
import { CreateMedicinesDto } from '../models/create-medicines-dto';
import { UpdateMedicinesDto } from '../models/update-medicines-dto';
@Injectable({
  providedIn: 'root',
})
class MedicinesService extends __BaseService {
  static readonly getMedicinesPath = '/medicines';
  static readonly putMedicinesPath = '/medicines';
  static readonly getMedicinesIdPath = '/medicines/{id}';
  static readonly postMedicinesIdPath = '/medicines/{id}';
  static readonly deleteMedicinesIdPath = '/medicines/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `MedicinesService.GetMedicinesParams` containing the following parameters:
   *
   * - `search`: Search field
   *
   * - `pageSize`: Page size for pagination
   *
   * - `pageIndex`: Page index for pagination
   *
   * @return All medicines
   */
  getMedicinesResponse(params: MedicinesService.GetMedicinesParams): __Observable<__StrictHttpResponse<PaginatedMedicinesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.search != null) __params = __params.set('search', params.search.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageIndex != null) __params = __params.set('pageIndex', params.pageIndex.toString());
    let req = new HttpRequest<any>(
      'GET',
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
        return _r as __StrictHttpResponse<PaginatedMedicinesDto>;
      })
    );
  }
  /**
   * @param params The `MedicinesService.GetMedicinesParams` containing the following parameters:
   *
   * - `search`: Search field
   *
   * - `pageSize`: Page size for pagination
   *
   * - `pageIndex`: Page index for pagination
   *
   * @return All medicines
   */
  getMedicines(params: MedicinesService.GetMedicinesParams): __Observable<PaginatedMedicinesDto> {
    return this.getMedicinesResponse(params).pipe(
      __map(_r => _r.body as PaginatedMedicinesDto)
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
}

module MedicinesService {

  /**
   * Parameters for getMedicines
   */
  export interface GetMedicinesParams {

    /**
     * Search field
     */
    search: string;

    /**
     * Page size for pagination
     */
    pageSize: number;

    /**
     * Page index for pagination
     */
    pageIndex: number;
  }

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
