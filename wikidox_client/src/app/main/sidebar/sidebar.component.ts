import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { jqxTreeComponent } from '../../../assets/jqwidgets-ts/angular_jqxtree';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { showtree } from '../../../assets/showtree.js';
import {FormsModule } from "@angular/forms";
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from '../../config-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
@ViewChild("treeReference",{read:"", static:false}) tree: jqxTreeComponent;
mstate;

ngAfterViewInit(): void 
{
    
  
}

set state(state) {
  this.state=this.mstate;
  console.log(state.focusedNodeId);
}
get state()
{
  return this.mstate;
}

get ccallback()
{
  return this.mcallback;
}

set ccallback(callback)
{  
  
  this.mcallback=callback;
}

mcallback="";

data;

public onChanges($event)
{
  this.html=$event;
}
public onCheckChange($event)
{

}

treeSettings: jqwidgets.TreeOptions;
@Input() html: number;
@Output() htmlChange = new EventEmitter();

items;
key;
session;
baseUrl;
innerDiv;

  constructor( private apiService: ApiService, private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document,private cookieService:CookieService, config: ConfigService) { 

    this.session=cookieService.get("sessionID");
    this.apiService.getTree().toPromise().then((data:string)=>{
    this.data=data;
    this.items=data["items"];
    this.baseUrl=config.baseUrl;    
    
  

    let script = this._renderer2.createElement('script');
        script.type = `text/javascript`;
        script.text = "$('#tree1').tree({  saveState: true, onCanSelectNode: function(node) "+
        "{"+
        " if (node.children.length == 0) {"+
        "     "+
        "     return true;"+
        "  }"+
        "  else {"+
        "      "+
        "      return true;"+
        "  }"+
        "}});"+
        
       `$('#tree1').on(
        'tree.select',
        function(event) {
            if (event.node) {
                
                // node was selected
                var node = event.node;
                //document.getElementById('callback').innerHTML=node.id;
                document.location.href="redir/"+node.id;
            }
            else {
                // event.node is null
                // a node was deselected
                // e.previous_node contains the deselected node
            }
        }
    );`;

        this._renderer2.appendChild(this._document.body, script);
        
        showtree();
     
    });  
  }
  blubb="";
  


  options={}
  ngOnInit() {
  }

}
