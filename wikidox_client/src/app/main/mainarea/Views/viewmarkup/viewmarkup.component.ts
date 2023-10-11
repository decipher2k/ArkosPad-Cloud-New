import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from "@angular/router";
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-viewmarkup',
  templateUrl: './viewmarkup.component.html',
  styleUrls: ['./viewmarkup.component.css']
})  

export class ViewmarkupComponent implements OnInit {
  @Input() url="";
  @Input() content="";
  paramsSubscription;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private router:Router) { }

  ngOnInit() {
    console.log("LASTURL: " + this.url);
    

    this.route.paramMap.subscribe(params => {
      this.url=params.get("url");
      if(this.url=="" || this.url==null)
	this.url="root";
      this.apiService.getNews(this.url).subscribe((data)=>{
        
          this.content = data.toString();
          this.paramsSubscription.unsubscribe();
    });

      });
  
    }

  private getPageContent(page)
  {
   
  }

}
