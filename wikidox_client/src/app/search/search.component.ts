import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {FormsModule } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
search;
searchFiles;
searchPages;
searchResult;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

onSearch(){

    this.apiService.search(this.search,this.searchPages,this.searchFiles).subscribe((data)=>{

        this.searchResult=JSON.parse(data.toString());
    console.log("SRCH");
        });
}


downloadFile(id, filename): void{

    this.apiService.downloadFile(id).subscribe(
        (response: any) =>{
            let dataType = response.type;
            let binaryData = [];
            binaryData.push(response);
            let downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
            if (filename)
                downloadLink.setAttribute('download', filename);
            document.body.appendChild(downloadLink);
            downloadLink.click();
        }
    )
}



}
