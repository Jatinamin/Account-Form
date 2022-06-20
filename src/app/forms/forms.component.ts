import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  item:Array<any> = [];
 
   constructor() { }
 
   ngOnInit(): void {
   }
   sendFormData(_forms:any){
 
     this.item.push(_forms)
   
   
     }
     Deleteinfo(_deta:any): void{
            this.item.splice(this.item.indexOf(_deta),1)
     }
 
     }
 