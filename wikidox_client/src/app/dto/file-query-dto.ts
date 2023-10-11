export class FileQueryDto {

    searchFiles=false;;
    searchPages=false;
    query="";
    session="";
    constructor(session, searchFiles,searchPages,query)
    {
	this.session=session;
	this.searchFiles=searchFiles;
	this.searchPages=searchPages;
	this.query=query;
    }

}
