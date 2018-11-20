import {Component} from '@angular/core';
import {App,IonicPage, NavController, ToastController, LoadingController, ViewController} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../providers";
import {UsersPage} from "../users_lists/users_lists";

@IonicPage()
@Component({
  selector: 'page-newuser',
  templateUrl: 'newuser.html'

})
export class NewuserPage {
  form: FormGroup;
  isReadyToSave: boolean;
  falsemsg:string;
  // @ViewChild(Nav) nav: Nav;
  pages: any[] = [
    {title: 'Users Lists', component: 'UsersPage'},
    {title: 'New Patient', component: 'NewuserPage'}
  ];
  account: { email: string , password:string} = {
    email: '',
    password: ''
  };
  private signinErrorString: string;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public translateService: TranslateService,
              public loadingCtrl: LoadingController,public formBuilder: FormBuilder,
              public viewCtrl: ViewController,public app: App,public user: User) {

    this.form = formBuilder.group({
      user_name: ['',Validators.required],
      user_pass: ['', Validators.required]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signinErrorString = value;
    })

    this.falsemsg = "Welcome !";
  }
  
  goToNewUser() {
	this.navCtrl.push('NewuserPage');  
  }

 
 
}
