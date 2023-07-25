import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Exibition, ExibitionLocation } from '../model/exibition.model';
import { ArtWork } from '../model/artwork.model';

const baseUrl = 'http://localhost:3000/api/exibitions';

@Injectable({
  providedIn: 'root',
})
export class ExibitionService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Exibition[]> {
    return this.http.get(baseUrl).pipe(
      map((data: any) => {
        return data.map((elem: any) => new Exibition(elem));
      })
    );
  }

  getLocations(): Observable<ExibitionLocation[]> {
    return this.http.get('http://localhost:3000/api/locations').pipe(
      map((data: any) => {
        return data.map((elem: any) => new ExibitionLocation(elem));
      })
    );
  }

  addExibition(exibition: Exibition): Observable<Exibition> {
    return this.http.post(baseUrl, exibition).pipe(
      map((data: any) => {
        return new Exibition(data);
      })
    );
  }

  getOne(id: number): Observable<Exibition> {
    return this.http.get(baseUrl + '/' + id).pipe(
      map((data: any) => {
        return new Exibition(data);
      })
    );
  }

  getExibitionArtworks(id: number): Observable<ArtWork[]> {
    return this.http.get(baseUrl + '/' + id + '/artworks').pipe(
      map((data: any) => {
        return data.map((elem: any) => new ArtWork(elem)) || [];
      })
    );
  }

  getAllArtworks(params?: any): Observable<ArtWork[]> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set('sort', params.sort)
          .set('sortDirection', params.sortDirection)
          .set('filter', JSON.stringify(params.filter)),
      };
    }

    return this.http.get('http://localhost:3000/api/artworks', options).pipe(
      map((data: any) => {
        return data.map((elem: any) => new ArtWork(elem));
      })
    );
  }

  removeExibitionArtwork(artwork: ArtWork): Observable<ArtWork> {
    return this.http
      .delete(
        'http://localhost:3000/api/exibitions/' +
          artwork.exibition_id +
          '/artworks/' +
          artwork._id
      )
      .pipe(
        map((data: any) => {
          return new ArtWork(data);
        })
      );
  }

  addArtwork(artwork: ArtWork): Observable<ArtWork> {
    return this.http
      .put(
        'http://localhost:3000/api/exibitions/' +
          artwork.exibition_id +
          '/artworks/' +
          artwork._id,
        artwork
      )
      .pipe(
        map((data: any) => {
          return new ArtWork(data);
        })
      );
  }
}
