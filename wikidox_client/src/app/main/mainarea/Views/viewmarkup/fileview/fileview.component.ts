import { Component, OnInit, Input, Renderer2,Inject,ElementRef,HostListener } from '@angular/core';
import { DOCUMENT, CommonModule  } from '@angular/common';
import { ApiService } from '../../../../../api.service';
import { CookieService } from 'ngx-cookie-service';
import {  ControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../../../../../config-service.service';

@Component({
  selector: 'app-fileview',
  templateUrl: './fileview.component.html',
  styleUrls: ['./fileview.component.css']
})
export class FileviewComponent implements OnInit,ControlValueAccessor  {
  @Input() url;
 url1;
fileContent;
scrpt;
idNode;
files;
session;
baseUrl;
  constructor( private _router: Router,private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,private apiService: ApiService, private cookieService:CookieService, private host: ElementRef<HTMLInputElement>, private config: ConfigService) {
    this.session=cookieService.get("sessionID");
    this.baseUrl=config.baseUrl;
//    this.router.navigate(['/view/'+this.murl]);

}

  ngOnInit() {
this.apiService.getIdByPath(this.url).subscribe((data)=>{

    this.idNode = data.valueOf();
//    this.url1="<div>  <span>Choose file</span>  <span>{{file ? file.name : 'or drag and drop file here' }}</span>  <input class='file-input' type='file'></div><app-progress [progress]='progress'></app-progress>";
//";

//<form  method='post' action=baseUrl+'/api/files/Upload?idNode="+this.idNode+"&session="+this.session+"' id='myForm' enctype='multipart/form-data'> <div class='form-group'>    <input style='position:absolute;' type='file' name='formFile' class='file' ><div  class='input-group col-xs-12'><span class='input-group-addon'><i class='glyphicon glyphicon-picture'></i></span>      <input type='text' class='form-control input-lg' disabled placeholder='Upload File'>      <span class='input-group-btn'>        <button class='browse btn btn-primary input-lg' type='button'><i class='glyphicon glyphicon-search'></i> Browse</button>      </span>    </div>  </div></form>";
        this.apiService.getFiles(this.idNode).subscribe((data1)=>{

	    this.files=JSON.parse(data1);
	});
  });

}

uploading:boolean=false;
uploadDone:boolean=false;
@Input() progress;
  onChange: Function;
  private file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.file = file;
    this.uploading=true;
    this.apiService.uploadFile(this.toFormData()).subscribe(data=>{
      this.uploading=false;

      this.apiService.getFiles(this.idNode).subscribe((data1)=>{

        this.files=JSON.parse(data1);
    });
    },error=>{this.uploading=false;
      this.apiService.getFiles(this.idNode).subscribe((data1)=>{

        this.files=JSON.parse(data1);
    });});

  }


  writeValue( value: null ) {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange( fn: Function ) {
    this.onChange = fn;
  }

  registerOnTouched( fn: Function ) {
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


 toFormData() {
  const formData = new FormData();
  formData.append("session",this.session);
  formData.append("file",this.file,this.file.name);
  formData.append("id",this.idNode);
  formData.append("fileName",this.file.name);
  return formData;
}
}

