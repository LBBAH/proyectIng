import { NgModule } from "@angular/core";


import { MatButtonModule } from '@angular/material/button'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
    imports:[
        MatButtonModule,
        MatAutocompleteModule,
        MatDialogModule
    ],
    exports:[ 
        MatButtonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule
    ]
})

export class MaterialModule{}