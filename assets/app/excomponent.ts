import { Component } from '@angular/core'
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

/* This class is not used anywhere in the application. It's used for debugging purposes as well as populating the DB with an api. */

@Component({
    selector: 'ex-component',
    template: '{{ obj }}',
})

export class ExComponent {
    public players = [];
    public nationId = "";

    constructor(private http: Http) {
        this.getPlayerById("596a53f1c6f20f7f938ea888")
            .subscribe(data => console.log(data),
            error => console.log(error));
        /*
        for(let i = 20; i < 21; i++) {
            this.getTeam(i).subscribe(
                data => {
                    const teamName = data.name;
                    this.getTeamId(teamName).subscribe(
                        data => {
                        const teamId = data.clubId;
                        this.getPlayersFromTeam(i).subscribe(
                            data => {
                                var players = data.players.map(function (player) {
                                            var playerJson = {
                                                    name: player.name,
                                                    position: player.position,
                                                    jerseyNumber: player.jerseyNumber,
                                                    dateOfBirth: player.dateOfBirth,
                                                    nationality: player.nationality,
                                                    contractUntil: player.contractUntil,
                                                    marketValue: player.marketValue,
                                                    club_id: teamId,
                                                    nation_name: player.nationality,
                                                attributes: {
                                                    physical: {
                                                        Acceleration: 0,
                                                        Agility: 0,
                                                        Balance: 0,
                                                        JumpingReach: 0,
                                                        NaturalFitness: 0,
                                                        Pace: 0,
                                                        Stamina: 0,
                                                        Strength: 0,
                                                        GoalkeeperRating: 0
                                                    },
                                                    mental: {
                                                        Aggression: 0,
                                                        Anticipation: 0,
                                                        Bravery: 0,
                                                        Composure: 0,
                                                        Concentration: 0,
                                                        Decision: 0,
                                                        Determination: 0,
                                                        Flair: 0,
                                                        Leadership: 0,
                                                        OfftheBall: 0,
                                                        Positioning: 0,
                                                        Teamwork: 0,
                                                        Vision: 0,
                                                        WorkRate: 0
                                                    },
                                                    technical: {
                                                        Crossing: 0,
                                                        Dribbling: 0,
                                                        Finishing: 0,
                                                        FirstTouch: 0,
                                                        FreeKickTaking: 0,
                                                        Heading: 0,
                                                        LongShots: 0,
                                                        LongThrows: 0,
                                                        Marking: 0,
                                                        Passing: 0,
                                                        PenaltyTaking: 0,
                                                        Tackling: 0,
                                                        Technique: 0
                                                    }
                                                }
                                            };
                                        return playerJson;
                                }, this);

                                this.players = this.players.concat(players);
                                //console.log(JSON.stringify(players, null, 2);
                                console.log(JSON.stringify(this.players, null, 2));
                                console.log(this.players.length);
                            },

                        error => console.log(error)
                        },
                        error => console.log(error)
                    );
                },
                error => console.log(error)
            );
        }
        */
    }

    getData () {
        const headers = new Headers({'X-Auth-Token': '3cc7236eb92146f7a14d8af2c5397c00'});
        return this.http.get('http://api.football-data.org/v1/competitions/452/teams', {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getTeam (teamId :Number) {
        const headers = new Headers({'X-Auth-Token': '3cc7236eb92146f7a14d8af2c5397c00'});
        return this.http.get(`http://api.football-data.org/v1/teams/${teamId}`, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getPlayersFromTeam (teamId :Number) {
        const headers = new Headers({'X-Auth-Token': '3cc7236eb92146f7a14d8af2c5397c00'});
        return this.http.get(`http://api.football-data.org/v1/teams/${teamId}/players`, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getTeamId (teamName :String) {
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.get(`http://localhost:3000/clubs/getTeamId/${teamName}`, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getNationId (nationName :string) {
        const headers = new Headers({'Content-Type' : 'application/json'});
        this.http.get(`http://localhost:3000/nations/getNationId/${nationName}`, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
        return this.nationId;
    }

    getPlayerById (id :string) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get(`http://localhost:3000/players/getPlayerById/${id}`, {headers: headers})
            .map((response: Response) => response.json());
    }


}