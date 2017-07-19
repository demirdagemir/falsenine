import {Component, Injectable, OnDestroy, OnInit} from '@angular/core'
import {ActivatedRoute} from "@angular/router";
import {Player} from "../viewModels/player.model";
import {PlayerService} from "./player.service";
import {Club} from "../viewModels/club.model";
import {Nation} from "../viewModels/nation.model";
import {PlayerAttributesComponent} from "./player_attributes/player-attributes.component";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'player-component',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss'],
    providers: [PlayerService]
})

@Observable()
export class PlayerComponent implements OnInit, OnDestroy {
    id: string;
    public sub: any;
    public player: Player;
    private club: Club;
    private nationality: Nation;
    private markedFavorite: boolean;
    private favId: string;

    constructor(private route: ActivatedRoute, private playerService: PlayerService){};

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];

        this.getFavorite(this.id);
        this.playerService.getPlayerById(this.id).subscribe(
            data => {
                this.player = new Player(
                    data.player.name,
                    data.player.marketValue,
                    data.player.dateOfBirth,
                    data.player.contractUntil,
                    data.player.nation_name,
                    data.player.club_id,
                    data.player.jerseyNumber,
                    data.player.position,
                    data.player.attributes.technical,
                    data.player.attributes.mental,
                    data.player.attributes.physical
                );

                this.playerService.getPlayerClubById(data.player.club_id).subscribe(
                    data => this.club = new Club(
                        data.club.name,
                        data.club.nation_id,
                        data.club.logoDir
                    ),
                    error => console.log(error)
                );

                this.playerService.getNation(data.player.nation_name).subscribe(
                    data => this.nationality = new Nation(
                        data.nation.name,
                        data.nation.flag_128
                    ),
                    error => console.log(error)
                )
            },
            error => console.log(error)
        );

        });
    }

    addFavorite() {
        const userId = localStorage.getItem('userId');
        const playerId = this.id;
        this.playerService.addFavorite(userId, playerId).subscribe(
            data => {this.markedFavorite = true; this.favId = data.favId;},
            error => console.log(error)
        )
    }

    getFavorite(playerId :string) {
        const userId = localStorage.getItem('userId');
        this.playerService.getIfMarkedFavorite(userId, playerId).subscribe(
            data => {this.markedFavorite = data.markedAsFavorite; this.favId = data.favId;},
            error => console.log(error)
        )
    }

    deleteFavorite() {
        if (this.favId) {
            console.log(`Fav id is set at ${this.favId}`);
            this.playerService.deleteFavorite(this.favId).subscribe(
                data => {
                    this.markedFavorite = false;
                    this.favId = null;
                },
                error => console.log(error)
            )
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}