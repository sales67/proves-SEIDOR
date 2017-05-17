import {Component, OnInit} from '@angular/core';
//import {StateService} from '../common/state.service';
import {CotxeService} from '../cotxe/cotxe.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';
import { Cotxe }   from './cotxe';
import {Model} from './model';
import {sprintf} from "sprintf-js";


@Component({
  selector: 'cotxe',
  templateUrl:'./cotxe.component.html',
  providers: [CotxeService]
})


export class CotxeComponent{
    message: string;
    errorMessage:string;
    nom:any; 
    cotxes:Cotxe;
    models:Model;
    idMarca;
    addName;
    addConce;
    addCountry;
    addYear;
    idMarca2;
    addName2;
    addConce2;
    addCountry2;
    addYear2;
    addId3;
    idMarca3;
    addName3;
    addConce3;
    addCountry3;
    addYear3;
      

    constructor(private cotxeService: CotxeService) { }

  listMarca(){
     this.cotxeService.getCotxes()
                .subscribe(
                data => { this.cotxes = data;console.log(data);},
                err => console.error(err),
                () => console.log('done')
      );}

   listModel(){        
    this.cotxeService.getModel(this.idMarca)
    .subscribe(
                data => { this.models = data;console.log(data);},
                err => console.error(err),
                () => console.log('done')
      );}  
    addMarcaGet(){        this.cotxeService.addMarcaGet(this.addName,this.addConce,this.addCountry,this.addYear)
               .subscribe(
                data => { this.addName = data;},                
                () => console.log('has afegit la marca: '+this.addName)
      );}
    addMarcaPost(){        this.cotxeService.addMarcaPost(this.addName2,this.addConce2,this.addCountry2,this.addYear2)
               .subscribe(
                data => { this.addName2 = data;},    
                () => console.log('has afegit la marca: '+this.addName2)
      );}
     updateMarca(){        this.cotxeService.updateMarca(this.addId3,this.addName3,this.addConce3,this.addCountry3,this.addYear3)
               .subscribe(
                data => { this.addName3 = data;},                    
                () => console.log('has actualitzat la marca: '+this.addName3)
      );}               
    }
