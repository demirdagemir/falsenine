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

    addFavorite  (userId :string, playerId :string) {
        const body = {
            userId,
            playerId
        };
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.post('http://localhost:3000/favorites/addFavorite', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getIfMarkedFavorite (userId :string, playerId :string) {
        const body = {
            userId,
            playerId
        };
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.post('http://localhost:3000/favorites/getFavorite', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteFavorite  (favId :string) {
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.delete(`http://localhost:3000/favorites/deleteFavorite/${favId}`, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}