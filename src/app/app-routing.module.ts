import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddNewComponent } from './admin/add-new/add-new.component';
import { EditComponent } from './admin/edit/edit.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { AdminModule } from './admin/admin.module';

// const routes: Routes = [
//   {
//     path: '',
//     component: ProductListComponent,
//   },
// ];

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/dashboard/dashboard.component').then(
            (mod) => mod.DashboardComponent
          ),
        // component: DashboardComponent,
      },
      { path: 'products/add', component: AddNewComponent },
      { path: 'products/:id/edit', component: EditComponent },
      { path: 'products/:id/delete', component: DeleteComponent },
      { path: 'products', component: ProductListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
