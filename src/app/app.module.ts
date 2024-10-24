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
import { DeeperDirectivesComponent } from './deeper-directives/deeper-directives.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { LimitCharsDirective } from './directives/limit-chars.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelpcenterComponent,
    FooterComponent,
    HeaderComponent,
    LadingpageComponent,
    ListitemsComponent,
    CarditemComponent,
    DeeperDirectivesComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    LimitCharsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
