import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { debug } from 'util';

@Component({
  selector: 'app-editmarkup',
  templateUrl: './editmarkup.component.html',
  styleUrls: ['./editmarkup.component.css']
})
export class EditmarkupComponent implements OnInit {
  @Input() ckeditorContent:string;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private router:Router) { }
  @Input() url="";

  ngOnInit() {

    this.apiService.getNews(this.url).subscribe((data)=>{

      this.ckeditorContent = data.toString();
    });


    console.log("BEFORE");

    console.log("URL: "+this.url);
    this.router.events.subscribe(val => {
      console.log("SUBSCRIBE");
      if (val instanceof RoutesRecognized) {

        this.url=val.state.root.firstChild.params["url"];
        console.log("URL:" +this.url);
      }
      else
      console.log("ERR");
  },error=>{console.log("ERROR SUBSCRIBE:"+error.html);});
  }


  onClick($event)
  {
    this.apiService.saveMarkup(this.url,this.ckeditorContent).subscribe((data)=>{
        console.log(data.toString());
});

  }

  onEditorChange($event)
  {
  }

  onChange($event)
  {

  }
}
