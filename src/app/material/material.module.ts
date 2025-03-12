import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';


const matArr =[
  MatButtonModule,
  MatIconModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatTableModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [...matArr]
  ],
  exports:[
    [...matArr]
  ]
})
export class MaterialModule { }
