import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule} from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from "./shared/customer.service";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImportantNumbersPageComponent } from './important-numbers-page/important-numbers-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
 declarations: [
   AppComponent,
   CustomerComponent,
   CustomerListComponent,
   NavbarComponent,
   HomePageComponent,
   ImportantNumbersPageComponent,
   FooterComponent,
   HeaderComponent
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   ReactiveFormsModule,
   AngularFireModule.initializeApp(environment.firebaseConfig),// we called initializeApp function to provide connection details
   AngularFireDatabaseModule, // we will import the classes here too 
   FormsModule
 ],
 providers: [CustomerService],
 bootstrap: [AppComponent]
})
export class AppModule { }