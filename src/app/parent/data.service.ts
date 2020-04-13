import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DataModule} from './data.Module';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class DataService {
  constructor(private http: HttpClient) {
  }

  getAllData(): Observable<any> {
    return this.http.get<DataModule[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      map(res => {
        let data = res;
        data.forEach(item => {
          item.isRead = true;
        });
        return res;
      })
    );
  }

  getById(dataId: number): Observable<DataModule> {
    return this.getAllData().pipe(map(item => item.find(i => i.id === dataId)));
  }

  addData(data: DataModule): Observable<DataModule> {
    return this.http.post<DataModule>('https://jsonplaceholder.typicode.com/posts', {userId: 1, title: data.title, body: data.body});
  }

  addDataWithInput(data: DataModule): Observable<DataModule> {
    return this.http.post<DataModule>('https://jsonplaceholder.typicode.com/posts', {userId: 1, title: data, body: 'hey'});
  }

  deletePost(data) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + data.id);
  }
}
