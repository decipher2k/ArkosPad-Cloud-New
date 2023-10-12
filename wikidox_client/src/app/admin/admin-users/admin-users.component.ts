import { Component, OnInit, Inject } from '@angular/core';
import {FormsModule } from "@angular/forms";
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
name;
password;
users;
newPasswordUsername;
showEdit=false;
newPassword;
showSuccess=false;
showError=false;
canEdit;
canCreate;
canUpload;
isAdmin;


onClickNewUser()
{
    this.apiService.addUser(this.name, this.password).subscribe(data=>{
this.apiService.getUsers().subscribe(data2=>{
});
    },err=>{this.showSuccess=false;this.showError=true;});
}

  constructor(private apiService: ApiService) { 
apiService.getUsers().subscribe((data1)=>{

            this.users=JSON.parse(data1.toString());
        });


}
authCurrUser;
clickEdit(event)
{
this.showEdit=true;
this.newPasswordUsername=event;
this.apiService.getUserAcl(event).subscribe(data2=>{
            this.authCurrUser=JSON.parse(data2.toString());
	    this.isAdmin=this.authCurrUser.isAdmin==1?true:false;
	    this.canCreate=this.authCurrUser.canCreate==1?true:false;
	    this.canEdit=this.authCurrUser.canEdit==1?true:false;
	    this.canUpload=this.authCurrUser.canUpload==1?true:false;
});



}

onEditPassword(newPasswordUsername){
this.apiService.editUser(newPasswordUsername,this.newPassword,this.canCreate,this.canEdit,this.canUpload,this.isAdmin).subscribe(data1=>{
this.showSuccess=true;
this.showError=false;
        },err=>{this.showSuccess=false;this.showError=true;});
}

clickDelete(event)
{
this.apiService.deleteUser(event).subscribe((data1)=>{
    this.showSuccess=true;
	    this.showError=false;
this.apiService.getUsers().subscribe(data2=>{
	
            this.users=JSON.parse(data2.toString());
        });

        },err=>{this.showSuccess=false;this.showError=true;});
}
  ngOnInit() {
this.apiService.getUsers().subscribe(data2=>{
	
            this.users=JSON.parse(data2.toString());
        });
  }

}
