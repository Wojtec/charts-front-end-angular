import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Log } from "../models/Logs";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class DataLogsService {
  dataUrl: string = "http://localhost:3000/data";
  constructor(private http: HttpClient) {}

  getLogsData() {
    return this.http.get<Log[]>(this.dataUrl).pipe(
      map((data: Log[]) => {
        console.log(data);
        return data;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
