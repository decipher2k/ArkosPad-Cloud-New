export class UserDataDto {
    session="";
    username="";
    password="";
    canEdit=0;
    canCreate=0;
    canUpload=0;
    isAdmin=0;
    constructor(session,username,password,canCreate=false,canEdit=false, canUpload=false, isAdmin=false)
    {
	this.session=session;
	this.username=username;
	this.password=password;
	this.canEdit=canEdit?1:0;
	this.canCreate=canCreate?1:0;
	this.canUpload=canUpload?1:0;
	this.isAdmin=isAdmin?1:0;
    }
}
