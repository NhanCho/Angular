import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'app-product',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
})

export class ProductComponent {
    constructor() {}

    @Input() product: any;
    @Output() onBuy = new EventEmitter ();
    @Output() onDelete = new EventEmitter ();

    handleBuy(){
      this.onBuy.emit(this.product)
    }

    handleDelete(){
      this.onDelete.emit(this.product.id)
    }
 }
