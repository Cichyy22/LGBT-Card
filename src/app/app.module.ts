import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { PronouceComponent } from './pronouce/pronouce.component';
import { SlidersComponent } from './sliders/sliders.component';
import { AboutComponent } from './about/about.component';
import { PronouceListComponent } from './pronouce/pronouce-list/pronouce-list.component';
import { PronouceWordsComponent } from './pronouce/pronouce-words/pronouce-words.component';
import { PronouceSexualityComponent } from './pronouce/pronouce-sexuality/pronouce-sexuality.component';
import { AuthComponent } from './auth/auth.component';
import { PronouceNamesComponent } from './pronouce/pronouce-names/pronouce-names.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    PronouceComponent,
    SlidersComponent,
    AboutComponent,
    PronouceListComponent,
    PronouceWordsComponent,
    PronouceSexualityComponent,
    AuthComponent,
    PronouceNamesComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
