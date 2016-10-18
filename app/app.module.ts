import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { KegListComponent } from './keg-list.component';
import { NewKegComponent }  from './new-keg.component';
import { EditKegComponent } from './edit-keg.component';
import { LessThanTenPipe } from './lessthanten.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    KegListComponent,
    NewKegComponent,
    EditKegComponent,
    LessThanTenPipe
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
