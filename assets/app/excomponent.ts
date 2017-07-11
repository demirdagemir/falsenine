import { Component } from '@angular/core'
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'ex-component',
    template: '{{ obj }}',
})

export class ExComponent {
    public obj = {}

    constructor(private http: Http) {
       this.getData().subscribe(
            data => console.log(data),
            error => console.log(error)
        );
    }

    getData () {
        const headers = new Headers({'X-Auth-Token': '3cc7236eb92146f7a14d8af2c5397c00'});
        return this.http.get('http://api.football-data.org/v1/competitions/452/teams', {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}