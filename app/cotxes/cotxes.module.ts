import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { EsborrarComponent } from './esborrar/esborrar.component';
import { ClientComponent } from './client/client.component';
import { MarcaComponent } from './marca/marca.component';
import { EquipamentComponent } from './equipament/equipament.component';
import { ModelComponent } from './model/model.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      CrearComponent,
      ConsultarComponent,
      ModificarComponent,
      EsborrarComponent,
      ClientComponent,
      MarcaComponent,
      EquipamentComponent,
      ModelComponent
  ]
})
export class CotxesModule { }
