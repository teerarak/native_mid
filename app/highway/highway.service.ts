import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Rx";

@Injectable()
export class HigwayService {
    constructor(
        private http: Http,
        private router: Router
    ) { }
    getData(): Observable<any> {
        let apiTest = "http://192.168.43.166:3000/getData";
        let api = "https://us-central1-maphomework-1492870415908.cloudfunctions.net/eiei/api/getData"
        return this.http.get(
            api
        )
        .map(response => response.json())
        .catch(this.handleErrors);
    }

      //function other
    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}