import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MessageComponent } from './message.component';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports:[
    MessageComponent
  ]
})
export class MessageModule { }
