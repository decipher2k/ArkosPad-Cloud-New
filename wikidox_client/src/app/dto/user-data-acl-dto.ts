export class UserDataAclDto {
    constructor (canEdit=false,canUpload=false,isAdmin=false,canCreate=false)
    {
	this.canEdit=canEdit;
	this.canUpload=canUpload;
	this.isAdmin=isAdmin;
        this.canCreate=canCreate;
    }
    canEdit=false;
    canUpload=false;
    isAdmin=false;
    canCreate=false;
}
