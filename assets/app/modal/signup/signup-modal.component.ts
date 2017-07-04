import { Component } from '@angular/core'

@Component({
    selector: 'signup-modal',
    templateUrl: './signup-modal.component.html',
    styleUrls: ['./signup-modal.component.scss']
})

export class SignupModalComponent {
    showModal () {
        console.log("showed modal");
    }
}