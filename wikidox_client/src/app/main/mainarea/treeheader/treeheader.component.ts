import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-treeheader',
  templateUrl: './treeheader.component.html',
  styleUrls: ['./treeheader.component.css']
})
export class TreeheaderComponent implements OnInit {

@Input() url:string;
  constructor() { }

  ngOnInit() {
  }

}
