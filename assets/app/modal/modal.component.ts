import { Component } from '@angular/core'

@Component({
    selector: 'modal-component',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})

export class ModalComponent {
    public visible = false;
    public modalVisible = ''

    public show(modal: String): void {
        this.visible = true;
        this.modalVisible = modal;
    }

    public hide(): void {
        this.visible = false;
    }
}