import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import { ImportantNumbersPageComponent } from './important-numbers-page/important-numbers-page.component';
import { CustomerComponent } from './customer/customer.component';
const routes: Routes = [{path:"", component: HomePageComponent
},
{
        path:"Important-Numbers-page",component: ImportantNumbersPageComponent
}, {path:"customer", component: CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
