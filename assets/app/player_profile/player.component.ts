import {Component, Injectable, OnDestroy, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from "@angular/router";
import {Player, Attributes, PhysicalAttributes, MentalAttributes, TechnicalAttributes} from "../viewModels/player.model";
import {PlayerService} from "./player.service";
import {Club} from "../viewModels/club.model";
import {Nation} from "../viewModels/nation.model";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../modal/authentication/auth.service";

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

    constructor(private router: Router, private route: ActivatedRoute, private playerService: PlayerService, private  authService: AuthService){};

    ngOnInit() {

        if(!this.authService.isLoggedIn()) {
            this.router.navigateByUrl('/');
        }

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
                    new Attributes(
                        new PhysicalAttributes(
                            data.player.attributes.physical.Acceleration,
                            data.player.attributes.physical.Agility,
                            data.player.attributes.physical.Balance,
                            data.player.attributes.physical.JumpingReach,
                            data.player.attributes.physical.NaturalFitness,
                            data.player.attributes.physical.Pace,
                            data.player.attributes.physical.Stamina,
                            data.player.attributes.physical.Strength,
                            data.player.attributes.physical.GoalkeeperRating
                        ),
                        new MentalAttributes(
                            data.player.attributes.mental.Aggression,
                            data.player.attributes.mental.Anticipation,
                            data.player.attributes.mental.Bravery,
                            data.player.attributes.mental.Composure,
                            data.player.attributes.mental.Concentration,
                            data.player.attributes.mental.Decision,
                            data.player.attributes.mental.Determination,
                            data.player.attributes.mental.Flair,
                            data.player.attributes.mental.Leadership,
                            data.player.attributes.mental.OfftheBall,
                            data.player.attributes.mental.Positioning,
                            data.player.attributes.mental.Teamwork,
                            data.player.attributes.mental.Vision,
                            data.player.attributes.mental.WorkRate
                        ),
                        new TechnicalAttributes(
                            data.player.attributes.technical.Crossing,
                            data.player.attributes.technical.Dribbling,
                            data.player.attributes.technical.Finishing,
                            data.player.attributes.technical.FirstTouch,
                            data.player.attributes.technical.FreeKickTaking,
                            data.player.attributes.technical.Heading,
                            data.player.attributes.technical.LongShots,
                            data.player.attributes.technical.LongThrows,
                            data.player.attributes.technical.Marking,
                            data.player.attributes.technical.Passing,
                            data.player.attributes.technical.PenaltyTaking,
                            data.player.attributes.technical.Tackling,
                            data.player.attributes.technical.Technique
                        )
                    )
                );
                console.log(this.player);
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