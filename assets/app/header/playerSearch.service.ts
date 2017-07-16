import {Headers, Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class PlayerSearch {

    constructor(private http: Http) {}

    getSearchPlayerResult (name :string) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get(`http://localhost:3000/players/search/${name}`, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

}