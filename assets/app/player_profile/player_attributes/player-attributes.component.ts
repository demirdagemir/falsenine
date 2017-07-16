import {Component, Injectable, OnDestroy, OnInit} from '@angular/core'
import {AttributeService} from "./player-attributes.service";
import {PlayerComponent} from "../player.component";
import {Player} from "../../viewModels/player.model";
import {PlayerService} from "../player.service";
import {PlayerSearch} from "../../header/playerSearch.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'player-attributes-component',
    templateUrl: './player-attributes.component.html',
    styleUrls: ['./player-attributes.component.scss'],
    providers: [AttributeService]
})

@Injectable()
export class PlayerAttributesComponent implements OnInit, OnDestroy {
    sub: any;
    attributes: Object;
    player: Player;

    constructor(private route: ActivatedRoute, private attributesService: AttributeService, private playerComponent: PlayerComponent){}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.attributesService.getPlayerAttributesById(params['id']).subscribe(
                data => this.attributes = {
                    technical: data.attributes.technical,
                    mental: data.attributes.mental,
                    physical: data.attributes.physical
                }
            );
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}