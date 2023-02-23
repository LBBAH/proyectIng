import { NgModule } from "@angular/core";


import { MatButtonModule } from '@angular/material/button'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
    imports:[
        MatButtonModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule
    ],
    exports:[ 
        MatButtonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule
    ]
})

export class MaterialModule{}