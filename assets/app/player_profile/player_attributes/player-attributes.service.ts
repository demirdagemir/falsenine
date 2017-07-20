import {Headers, Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {PlayerAttributesComponent} from "./player-attributes.component";

@Injectable()
export class AttributeService {

    constructor(private http: Http) {}

    getPlayerAttributesById (id :string) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get(`http://localhost:3000/players/getPlayerAttributesById/${id}`, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    updateMentalRating(newAttribute :Object, playerId: String) {
        const body = newAttribute;
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('http://localhost:3000/players/updateMentalRating/' + playerId, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    updateTechnicalRating(newAttribute :Object, playerId: String) {
        const body = newAttribute;
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('http://localhost:3000/players/updateTechnicalRating/' + playerId, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    updatePhysicalRating(newAttribute :Object, playerId: String) {
        const body = newAttribute;
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('http://localhost:3000/players/updatePhysicalRating/' + playerId, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}