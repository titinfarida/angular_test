import { NgModule } from "@angular/core";
import {MatCardModule} from "@angular/material/card"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import {MatButtonModule} from "@angular/material/button"
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatNativeDateModule } from "@angular/material/core";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from "@angular/material/select";
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    exports:[
        MatCardModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatButtonModule, 
        MatTableModule, 
        MatPaginatorModule, 
        MatSortModule,
        MatDatepickerModule, 
        MatNativeDateModule, 
        MatSelectModule, 
        MatDividerModule
       

    ]
})
export class MaterialModule{

}