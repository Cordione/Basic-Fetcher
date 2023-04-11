import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiRequest {
  constructor(private httpClient: HttpClient) {}

  async getApi(input: string) {
    return (
      (await this.httpClient
        .get<string[]>(input)
        .toPromise()) ?? []
    );
  }
}
