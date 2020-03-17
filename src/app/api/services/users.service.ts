/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserDto } from '../models/user-dto';
import { CreateUserDto } from '../models/create-user-dto';
import { UpdateUserDto } from '../models/update-user-dto';
@Injectable({
  providedIn: 'root',
})
class UsersService extends __BaseService {
  static readonly getUsersPath = '/users';
  static readonly putUsersPath = '/users';
  static readonly getUsersMePath = '/users/me';
  static readonly getUsersPatientsPath = '/users/patients';
  static readonly getUsersDoctorsPath = '/users/doctors';
  static readonly getUsersIdPath = '/users/{id}';
  static readonly postUsersIdPath = '/users/{id}';
  static readonly deleteUsersIdPath = '/users/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return All users
   */
  getUsersResponse(): __Observable<__StrictHttpResponse<Array<UserDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDto>>;
      })
    );
  }
  /**
   * @return All users
   */
  getUsers(): __Observable<Array<UserDto>> {
    return this.getUsersResponse().pipe(
      __map(_r => _r.body as Array<UserDto>)
    );
  }

  /**
   * @param CreateUserDto User to create
   * @return User found
   */
  putUsersResponse(CreateUserDto: CreateUserDto): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CreateUserDto;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * @param CreateUserDto User to create
   * @return User found
   */
  putUsers(CreateUserDto: CreateUserDto): __Observable<UserDto> {
    return this.putUsersResponse(CreateUserDto).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * @return User found
   */
  getUsersMeResponse(): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/me`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * @return User found
   */
  getUsersMe(): __Observable<UserDto> {
    return this.getUsersMeResponse().pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * @return Patients found
   */
  getUsersPatientsResponse(): __Observable<__StrictHttpResponse<Array<UserDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/patients`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDto>>;
      })
    );
  }
  /**
   * @return Patients found
   */
  getUsersPatients(): __Observable<Array<UserDto>> {
    return this.getUsersPatientsResponse().pipe(
      __map(_r => _r.body as Array<UserDto>)
    );
  }

  /**
   * @return Doctors found
   */
  getUsersDoctorsResponse(): __Observable<__StrictHttpResponse<Array<UserDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/doctors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDto>>;
      })
    );
  }
  /**
   * @return Doctors found
   */
  getUsersDoctors(): __Observable<Array<UserDto>> {
    return this.getUsersDoctorsResponse().pipe(
      __map(_r => _r.body as Array<UserDto>)
    );
  }

  /**
   * @param id User id to retrieve
   * @return User found
   */
  getUsersIdResponse(id: number): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * @param id User id to retrieve
   * @return User found
   */
  getUsersId(id: number): __Observable<UserDto> {
    return this.getUsersIdResponse(id).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * @param params The `UsersService.PostUsersIdParams` containing the following parameters:
   *
   * - `id`: User id to update
   *
   * - `UpdateUserDto`: User information to update
   *
   * @return User updated
   */
  postUsersIdResponse(params: UsersService.PostUsersIdParams): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.UpdateUserDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/users/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * @param params The `UsersService.PostUsersIdParams` containing the following parameters:
   *
   * - `id`: User id to update
   *
   * - `UpdateUserDto`: User information to update
   *
   * @return User updated
   */
  postUsersId(params: UsersService.PostUsersIdParams): __Observable<UserDto> {
    return this.postUsersIdResponse(params).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * @param id User id to delete
   */
  deleteUsersIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/users/${id}`,
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
   * @param id User id to delete
   */
  deleteUsersId(id: number): __Observable<null> {
    return this.deleteUsersIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UsersService {

  /**
   * Parameters for postUsersId
   */
  export interface PostUsersIdParams {

    /**
     * User id to update
     */
    id: number;

    /**
     * User information to update
     */
    UpdateUserDto: UpdateUserDto;
  }
}

export { UsersService }
