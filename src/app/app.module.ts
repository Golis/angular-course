import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule } from '@angular/forms';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LadingpageComponent } from './ladingpage/ladingpage.component';
import { ListitemsComponent } from './listitems/listitems.component';
import { CarditemComponent } from './carditem/carditem.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelpcenterComponent,
    FooterComponent,
    HeaderComponent,
    LadingpageComponent,
    ListitemsComponent,
    CarditemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
