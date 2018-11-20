import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {IonicPageModule} from 'ionic-angular';
import {NewuserPage} from './newuser';

@NgModule({
  declarations: [
    NewuserPage,
  ],
  imports: [
    IonicPageModule.forChild(NewuserPage),
    TranslateModule.forChild()
  ],
  exports: [
    NewuserPage
  ]
})
export class NewuserPageModule {
}
