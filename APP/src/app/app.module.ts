import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NewOrdersComponent } from './components/new-orders/new-orders.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    OrderHistoryComponent,
    NotificationsComponent,
    NewOrdersComponent
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatChipsModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
