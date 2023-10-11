import { Component, OnInit, Input } from '@angular/core';
import {ViewmarkupComponent} from './Views/viewmarkup/viewmarkup.component'
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-mainarea',
  templateUrl: './mainarea.component.html',
  styleUrls: ['./mainarea.component.css']
})
export class MainareaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) { }
@Input() url:string;
doNotEdit=true;
action="";
  ngOnInit() {
    console.log("URL1:"+this.url);
    
    this.route.paramMap.subscribe(params => {
      this.url=params.get("url");
      this.action=params.get("action");

        
        
        if(this.action=="edit")
          this.doNotEdit=false;
        else
          this.doNotEdit=true;
        

        });

  } 
    }