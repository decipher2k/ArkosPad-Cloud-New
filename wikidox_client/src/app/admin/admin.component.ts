import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Input() mpage="";
  constructor(private route: ActivatedRoute, private router: Router) { 

}

  ngOnInit() {
this.route.paramMap.subscribe(params => {
    this.mpage = params.get("mpage")
  })
  }

}
