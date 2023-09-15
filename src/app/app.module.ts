import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FavoriteColorComponent } from './components/favorite-color/favorite-color.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddNewComponent } from './admin/add-new/add-new.component';
import { EditComponent } from './admin/edit/edit.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    StarRatingComponent,
    ProductDetailComponent,
    FavoriteColorComponent,
    DashboardComponent,
    AddNewComponent,
    EditComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
