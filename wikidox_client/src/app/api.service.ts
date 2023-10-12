import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { UserDataDto } from './dto/user-data-dto';
import { SessionDto } from './dto/session-dto';
import { IdDto } from './dto/id-dto';
import { PageDto } from './dto/page-dto';
import { FileQueryDto } from './dto/file-query-dto';
import { ConfigService } from './config-service.service';


@Injectable(

  )


export class ApiService {

  url="";
  constructor(private httpClient: HttpClient, private cookieService: CookieService,private configService:ConfigService) {

}

API_KEY;
headers={"Content-Type": "application/json"};
options = { headers: this.headers, responseType:'text' };
public ngOnInit()
{
    this.API_KEY=this.cookieService.get("sessionID");
 //   this.cookieService.set("sessionID",this.API_KEY,1/48);

//  this.API_KEY=this.cookieService.get("session");
}

  public getNews(url: string){
    this.API_KEY=this.cookieService.get("sessionID");
    let d=new PageDto(this.API_KEY,url,"");
    return this.httpClient.post(this.configService.baseUrl+"markdownpage/GetMarkupPage",d,{ headers: this.headers, responseType:'text' });
  }

  public saveMarkup(url: string, text: string)
  {
    this.API_KEY=this.cookieService.get("sessionID");
    let d=new PageDto(this.API_KEY,url,text);
    return this.httpClient.post(this.configService.baseUrl+"markdownpage/SaveMarkupPage",d,{ headers: this.headers, responseType:'text' });
  }


  public getPathById(id)
  {
    this.API_KEY=this.cookieService.get("sessionID");
    let d=new IdDto(this.API_KEY,id);
    return this.httpClient.post(this.configService.baseUrl+"markdownpage/GetPathById",d,{ headers: this.headers, responseType:'text' });
  }

  public getIdByPath(url: string) {
    this.API_KEY=this.cookieService.get("sessionID");
    let d=new PageDto(this.API_KEY,url,"");
    return this.httpClient.post(this.configService.baseUrl+"markdownpage/GetIdByPath",d,{ headers: this.headers, responseType:'text' });
  }

  public getFiles(idNode) {
    this.API_KEY=this.cookieService.get("sessionID");
    let d=new IdDto(this.API_KEY,idNode);
    return this.httpClient.post(this.configService.baseUrl+"files/GetFiles",d,{ headers: this.headers, responseType:'text' });
  }

  public login(username, password)
  {
    this.API_KEY=this.cookieService.get("sessionID");
    let d=new UserDataDto("",username,password);
    return this.httpClient.post(this.configService.baseUrl+"session/Login",d,{ headers: this.headers, responseType:'text' });
  }

  public deleteNode(url)
  {
    this.API_KEY=this.cookieService.get("sessionID");
    let d=new PageDto(this.API_KEY,url,"");
    return this.httpClient.post(this.configService.baseUrl+"markdownpage/DeletePage",d,{ headers: this.headers, responseType:'text' });
  }

  public addUser(username, password)
  {
    this.API_KEY=this.cookieService.get("sessionID");
    let d=new UserDataDto(this.API_KEY,username,password);
    return this.httpClient.post(this.configService.baseUrl+"users/AddUser",d,{ headers: this.headers, responseType:'text' });
  }

  public editUser(username, password, canCreate, canEdit, canUpload, isAdmin)
  {
    this.API_KEY=this.cookieService.get("sessionID");
    let d=new UserDataDto(this.API_KEY,username,password,canCreate,canEdit,canUpload,isAdmin);
    return this.httpClient.post(this.configService.baseUrl+"users/EditUser",d,{ headers: this.headers, responseType:'text' });
  }

  public deleteUser(username)
  {
    this.API_KEY=this.cookieService.get("sessionID");
    let d=new UserDataDto(this.API_KEY,username,"");
    return this.httpClient.post(this.configService.baseUrl+"users/DeleteUser",d,{ headers: this.headers, responseType:'text' });
  }
  public getTree()
  {
    this.API_KEY=this.cookieService.get("sessionID");
    let mheaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.httpClient.get(this.configService.baseUrl+`markdownpage/GetNodes?session=`+this.API_KEY,{headers:mheaders});
  }
  public checkAuth()
  {
    console.log("SEF");
    this.API_KEY=this.cookieService.get("sessionID");

      let d=new SessionDto(this.API_KEY);
      return this.httpClient.post(this.configService.baseUrl+"session/GetAuth",d,{ headers: this.headers, responseType:'text' });
  }

  public getUsers()
  {
    console.log("SEF");
    this.API_KEY=this.cookieService.get("sessionID");
    let d=new SessionDto(this.API_KEY);
    return this.httpClient.post(this.configService.baseUrl+"users/GetUserList",d,{ headers: this.headers, responseType:'text' });
  }

  public logout()
  {
    console.log("SEF");
    this.API_KEY=this.cookieService.get("sessionID");
    let d=new SessionDto(this.API_KEY);
    return this.httpClient.post(this.configService.baseUrl+"session/Logout",d,{ headers: this.headers, responseType:'text' });
  }

  public getUserAcl(username)
  {
    this.API_KEY=this.cookieService.get("sessionID");
    let d=new UserDataDto(this.API_KEY,username,"");
    return this.httpClient.post(this.configService.baseUrl+"users/GetUserACL",d,{ headers: this.headers, responseType:'text' });

  }

 public search(query,searchPages,searchFiles)
 {
    this.API_KEY=this.cookieService.get("sessionID");
    let d=new FileQueryDto(this.API_KEY,searchFiles,searchPages,query);
    return this.httpClient.post(this.configService.baseUrl+"search/Search",d,{ headers: this.headers, responseType:'text' });


 }


  public downloadFile(idFile) {
    this.API_KEY=this.cookieService.get("sessionID");
    let d=new IdDto(this.API_KEY,idFile);
    return this.httpClient.post(this.configService.baseUrl+"files/Download",d,{ headers: this.headers, responseType: 'blob' as 'json' });
 }

public uploadFile(formData)
{
    let headers1={"Content-Type": "application/x-www-form-urlencoded"};
    return this.httpClient.post(this.configService.baseUrl+"files/Upload", formData);//, { headers:this.headers, responseType:'text' });//, { headers:headers, responseType:'text' });
}

public install()
{
    return this.httpClient.get(this.configService.baseUrl+"install/Install", { headers:this.headers, responseType:'text' });
}
}
