import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feature } from '../types';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  constructor(private httpClient: HttpClient) {}

  getFeatures(): Observable<Feature[]> {
    const result = this.httpClient.get('http://localhost:5500/features');
    return result as Observable<Feature[]>;
  }

  addFeature({
    name,
    description,
  }: {
    name: string;
    description: string;
  }): Observable<Feature[]> {
    const response = this.httpClient.post('http://localhost:5500/features', {
      name,
      description,
    });
    return response as Observable<Feature[]>;
  }
}
