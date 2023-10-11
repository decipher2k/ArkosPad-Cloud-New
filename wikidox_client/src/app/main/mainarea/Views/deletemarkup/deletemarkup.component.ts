import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-deletemarkup',
  templateUrl: './deletemarkup.component.html',
  styleUrls: ['./deletemarkup.component.css']
})
export class DeletemarkupComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router,private apiService: ApiService) { }
  @Input() url:string;
  @Input() action:string;
  delete:boolean;
  error:boolean;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.url=params.get("url");
      this.action=params.get("action");


          if(this.action=="delete")
          {

            this.apiService.deleteNode(this.url).subscribe((data)=>{
              this.error=data.toString()=="HASCHILDREN"?true:false;
            });

            this.delete=true;
          }
          else
          {
            this.delete=false;
          }

  });
  }

}
