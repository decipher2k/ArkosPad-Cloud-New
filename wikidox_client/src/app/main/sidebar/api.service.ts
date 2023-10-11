import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable(
  
)
export class ApiService {
  API_KEY = 'YOUR_API_KEY';
  url="";
  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }
public ngOnInit()
{
  this.API_KEY=this.cookieService.get("session");  
}

  public getNews(url: string){
    return this.httpClient.get(`https://xn--gnrgy-jua.co/api/markdownpage/GetMarkupPage?session=`+this.API_KEY+"&url="+url,{responseType: 'text'});
  }

  public saveMarkup(url: string, text: string)
  {
    return this.httpClient.put(`https://xn--gnrgy-jua.co/api/markdownpage/SaveMarkupPage?session=`+this.API_KEY+"&url="+url,{body: text},{responseType: 'text'});    
  }

  public getTree()
  {
    let mheaders = new HttpHeaders().set('Content-Type', 'application/json')        
    return this.httpClient.get(`https://xn--gnrgy-jua.co/api/markdownpage/GetNodes?session=`+this.API_KEY,{headers:mheaders});    
  }

  public getFiles(url: string) {
    return this.httpClient.put(`https://xn--gnrgy-jua.co/api/files/GetFiles?session=` + this.API_KEY + "&url=" + url, { responseType: 'text' });    
  }
}
