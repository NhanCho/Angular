import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
// import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductListComponent
    },
    {
        path: 'products/:id',
        component: ProductDetailsComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
