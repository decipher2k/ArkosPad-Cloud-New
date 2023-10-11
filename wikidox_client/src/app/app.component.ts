import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router, RoutesRecognized  } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import {
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'docuwiki';
blubb;
 data=null;
  @Input() url:string;
  @Input() mpage:string;

  constructor(private route: ActivatedRoute,private apiService: ApiService,private router:Router, private cookieService: CookieService) {


}


  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
    }
  }
showOverlay;


  ngOnInit() {
 this.router.events.subscribe(val => {

      if (val instanceof RoutesRecognized) {

          this.url=val.state.root.firstChild.params["url"];

      }


//      this.url = params.get("url");
/*
	let API_KEY=this.cookieService.get("sessionID");
	if(API_KEY.length>0)
	this.data=true;
	else
	this.data=false;*/


	if(this.url!="Install")
	{

    	this.apiService.checkAuth().subscribe(data=>{
	console.log("DATA:"+data);
	this.blubb=data;
	if(data.toString().length>0)
	{
	     //this.cookieService.set("sessionID",JSON.parse(data.toString()).session);
	     this.data=true;

	}
	else
	{
	    this.data=false;
	}
	},err =>{this.data=false;})	;
	}
else
{
this.data=true;
}

    });}

  }

