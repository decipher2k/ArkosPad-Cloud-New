import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  @Input() url:string;
  ngOnInit() {
    this.router.events.subscribe(val => {

      if (val instanceof RoutesRecognized) {

          this.url=val.state.root.firstChild.params["url"];

      }
  });
  }

}
