import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from '../../config-service.service';

@Injectable(
  
)
export class ApiService {
  API_KEY = 'YOUR_API_KEY';
  url="";
  constructor(private httpClient: HttpClient, private cookieService: CookieService, config: ConfigService) { this.url=config.baseUrl;}
public ngOnInit()
{
  this.API_KEY=this.cookieService.get("session");  
  
}

  public getNews(url: string){
    return this.httpClient.get(this.url+`/api/markdownpage/GetMarkupPage?session=`+this.API_KEY+"&url="+url,{responseType: 'text'});
  }

  public saveMarkup(url: string, text: string)
  {
    return this.httpClient.put(this.url+`/api/markdownpage/SaveMarkupPage?session=`+this.API_KEY+"&url="+url,{body: text},{responseType: 'text'});    
  }

  public getTree()
  {
    let mheaders = new HttpHeaders().set('Content-Type', 'application/json')        
    return this.httpClient.get(this.url+`/api/markdownpage/GetNodes?session=`+this.API_KEY,{headers:mheaders});    
  }

  public getFiles(url: string) {
    return this.httpClient.put(this.url+`/api/files/GetFiles?session=` + this.API_KEY + "&url=" + url, { responseType: 'text' });    
  }
}
