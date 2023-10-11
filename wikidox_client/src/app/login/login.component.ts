import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Input() username="";
@Input() password="";
err=false;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private router:Router, private cookieService:CookieService) { }

 onClick($event)
  {
    this.apiService.login(this.username,this.password).subscribe(
      (res) => { this.cookieService.set("sessionID",res.toString(),1/48,'/',"",false,'Lax');this.err=false;window.location.reload();},
      (err) => {this.err=true;}
    );
  }

  ngOnInit() {
  }

}
