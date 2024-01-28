import { RouterModule, Routes } from "@angular/router";
import { AddEditSongComponent } from "./add-edit-song.component";
import { NgModule } from "@angular/core";

const routes: Routes = [

    { path: '', children: [ {path: 'add-song', component: AddEditSongComponent }],
    }
    // Add other routes as needed
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [AddEditSongComponent],
    providers: []
  })
  export class SongFormsModule { }