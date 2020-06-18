import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistasComponent } from './vistas/vistas.component';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalDetallesAutoComponent } from './modal-detalles-auto/modal-detalles-auto.component';
import { ModalAddUpdateComponent } from './modal-add-update/modal-add-update.component';
import { ModalConfirmActionComponent } from './modal-confirm-action/modal-confirm-action.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListComponent,
    TableComponent,
    PageNotFoundComponent,
    ModalDetallesAutoComponent,
    ModalAddUpdateComponent,
    ModalConfirmActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalDetallesAutoComponent,ModalAddUpdateComponent]
})
export class AppModule { }
