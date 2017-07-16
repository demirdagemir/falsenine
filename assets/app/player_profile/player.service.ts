import {Headers, Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class PlayerService {

    constructor(private http: Http) {}

    getPlayerById (id :string) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get(`http://localhost:3000/players/getPlayerById/${id}`, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getPlayerClubById (id :string) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get(`http://localhost:3000/clubs/getPlayerClubById/${id}`, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getNation (name :string) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get(`http://localhost:3000/nations/getNation/${name}`, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}