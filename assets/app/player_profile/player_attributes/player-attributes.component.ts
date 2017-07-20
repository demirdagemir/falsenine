import {Component, Injectable, OnDestroy, OnInit} from '@angular/core'
import {AttributeService} from "./player-attributes.service";
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
    playerId: String;


    constructor(private route: ActivatedRoute, private attributesService: AttributeService){}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.playerId = params['id'];
            this.attributesService.getPlayerAttributesById(params['id']).subscribe(
                data => this.attributes = {
                    technical: data.attributes.technical,
                    mental: data.attributes.mental,
                    physical: data.attributes.physical
                }
            );
        });
    }

    updateMentalRating(attribute: String, upDown: String, attributeValue: Number) {
        let newAttributeValue;
        if (upDown == "up") {
           newAttributeValue  = attributeValue + 1 > 20 ? 20 : attributeValue + 1;
        } else {
            newAttributeValue = attributeValue -1 < 0 ? 0 : attributeValue - 1;
        }

        const newAttributes = {}
        Object.assign(newAttributes, this.attributes.mental, {[attribute]: newAttributeValue});
        this.attributesService.updateMentalRating(newAttributes, this.playerId).subscribe(
            data => {
                this.attributes = data.obj.attributes;
            },
            error => console.log(error)
        )
    }

    updateTechnicalRating(attribute: String, upDown: String, attributeValue: Number) {
        let newAttributeValue;
        if (upDown == "up") {
            newAttributeValue  = attributeValue + 1 > 20 ? 20 : attributeValue + 1;
        } else {
            newAttributeValue = attributeValue -1 < 0 ? 0 : attributeValue - 1;
        }

        const newAttributes = {}
        Object.assign(newAttributes, this.attributes.technical, {[attribute]: newAttributeValue});
        this.attributesService.updateTechnicalRating(newAttributes, this.playerId).subscribe(
            data => {
                this.attributes = data.obj.attributes;
            },
            error => console.log(error)
        )
    }

    updatePhysicalRating(attribute: String, upDown: String, attributeValue: Number) {
        let newAttributeValue;
        if (upDown == "up") {
            newAttributeValue  = attributeValue + 1 > 20 ? 20 : attributeValue + 1;
        } else {
            newAttributeValue = attributeValue -1 < 0 ? 0 : attributeValue - 1;
        }

        const newAttributes = {}
        Object.assign(newAttributes, this.attributes.physical, {[attribute]: newAttributeValue});
        this.attributesService.updatePhysicalRating(newAttributes, this.playerId).subscribe(
            data => {
                this.attributes = data.obj.attributes;
            },
            error => console.log(error)
        )
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}