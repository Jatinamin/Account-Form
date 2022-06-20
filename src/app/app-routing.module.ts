import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FormsComponent } from './forms/forms.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [{
  path:"footer",
  component:FooterComponent
},
{
  path:"nav",
  component:NavComponent
},
{
  path:"header",
  component:HeaderComponent

},
{
  path:"forms",
  component:FormsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
