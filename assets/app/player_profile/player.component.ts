import { Component } from '@angular/core'

@Component({
    selector: 'player-component',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})

export class PlayerComponent {
    content = 'Some content';
}