import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'products/:id',
        component: ProductDetailsComponent
    }
];
