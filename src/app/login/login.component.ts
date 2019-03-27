import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  

  constructor(private router: Router ,public alertController: AlertController,private http: HttpClient) { }
  username="";
  password="";

  ngOnInit() {}
  onLogin(){
    if(this.username==this.password){
      this.router.navigate(['./movieslist']);
    }else{
    this.presentAlert();
    this.username="name";
    this.password="password";

    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'This is an alert message.',
      subHeader: '',
      message: ' login failed',
      buttons: ['OK']
    });

    await alert.present();
  }
  onRegister(){
    this.router.navigate(['./register']);

  }
}

 
