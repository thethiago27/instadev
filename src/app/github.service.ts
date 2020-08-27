import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {GithubProfile} from './github.profile';
import {GithubRepos} from './github.repos';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  httpOptions = {
    headers: new Headers({'Content-Type': 'application/json' })
  };

  getGithubRepos(username: string): Observable<GithubRepos[]> {
    return this.http.get<GithubRepos[]>(`https://api.github.com/users/${username}/repos`).pipe(
      tap(_ => this.log('Find repos')),
      catchError(this.handleError<GithubRepos[]>('getInfos', []))
    );
  }

  getGithubProfile(username: string): Observable<GithubProfile[]> {
    return this.http.get<GithubProfile[]>(`https://api.github.com/users/${username}`).pipe(
      tap(_ => this.log('Fetched Infos...')),
      catchError(this.handleError<GithubProfile[]>('getInfos', []))
    );
  }

  getFollowers(username: string): Observable<GithubProfile[]> {
    return this.http.get<GithubProfile[]>(`https://api.github.com/users/${username}/followers`).pipe(
      tap(_ => this.log(`Fecthed Followers`)),
      catchError(this.handleError<GithubProfile[]>('getFollowers', []))
    );
  }

  private log(msg: string) {
    console.log(msg);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient
  ) { }
}
