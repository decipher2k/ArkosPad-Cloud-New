import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.css']
})
export class InstallComponent implements OnInit {
content;
  constructor(private apiService:ApiService) { 

	apiService.install().subscribe(data=>{
	this.content=data.toString();
	},err=>{this.content="Unknown Error. Allready installed?";});    
}

  ngOnInit() {
  }

}
