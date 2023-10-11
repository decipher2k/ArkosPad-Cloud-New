import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from "@angular/router";
import { ApiService } from '../api.service';
@Component({
  selector: 'app-redir',
  templateUrl: './redir.component.html',
  styleUrls: ['./redir.component.css']
})
export class RedirComponent implements OnInit {
  paramsSubscription;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private router:Router) { 

console.log("1");

this.route.paramMap.subscribe(params => {
  this.mid = params.get("mid");
  this.apiService.getPathById(this.mid).subscribe((data)=>{
        
    this.murl = data.valueOf();
    console.log("URL:" +this.murl);
    
    
    this.router.navigate(['/view/'+this.murl]);
});
});

  }
mid;
murl;
  ngOnInit() {
  
  }

}
