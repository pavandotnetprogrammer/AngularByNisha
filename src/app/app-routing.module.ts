import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/communication/parent/parent.component';
import { ChildComponent } from './components/communication/child/child.component';
import { InbuiltPipesComponent } from './components/inbuilt-pipes/inbuilt-pipes.component';
import { UsersDataComponent } from './components/users-data/users-data.component';
import { UserComponent } from './components/user/user.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { AboutComponent } from './components/about/about.component';
import { LocationComponent } from './components/location/location.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { AdduserComponent } from './components/adduser/adduser.component';
import { unsavedchangesGuard } from './guards/unsavedchanges.guard';
import { resolveGuard } from './guards/resolve.guard';
import { ContactComponent } from './components/contact/contact.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { TdfComponent } from './components/tdf/tdf.component';
import { LifecyclehooksComponent } from './components/lifecyclehooks/lifecyclehooks.component';

const routes: Routes = [
  {path:'',redirectTo:'parent',pathMatch:'full'},//default route
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'pipes',component:InbuiltPipesComponent},
  {path:'users',component:UsersDataComponent, canActivate:[authGuard], resolve:{
    data:resolveGuard
  }},
  // {path:'user/:id/:name/:email...etc',component:UserComponent}, if we want to pass multiple route parameters in the url, then we need to append like /:parametername.
  {path:'user/:id',component:UserComponent, canActivateChild:[adminGuard], children:[
    // {path:'',redirectTo:'address',pathMatch:'full'}, //setting default child route.
    // if we specify canActivateChild guard on the route and if we are setting default route, then we can't able to access the particular parent route also, because child routes are returning false. So, in order to work parent route incase of canActivateChild, we need to remove default route of child routes.
    {path:'address',component:AddressComponent},
    {path:'company',component:CompanyComponent}
  ]}, // use children attribute if we want implement nested routes
  {path:'about',component:AboutComponent,children:[
    {path:'location',component:LocationComponent,outlet:'map'}, //specifying named router outlets with outlet attribute. 
    {path:'feedback',component:FeedbackComponent, outlet:'feeds'}
  ]},
  {path:'adduser',component:AdduserComponent, canDeactivate:[unsavedchangesGuard]},
  {path:'product',loadChildren:()=>import('./modules/product-dashboard/product-dashboard.module').then(m=>m.ProductDashboardModule)},
  {path:'contact',component:ContactComponent},
  {path:'viewchild',component:ViewchildComponent},
  {path:'contentprojection',component:ContentProjectionComponent},
  {path:'tdf',component:TdfComponent},
  {path:'lifecyclehooks', component:LifecyclehooksComponent},
  {path:'**',redirectTo:'parent'}//handling invalid route url. for example, if we manually trype url value which is not mathing any of the existed routes.
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
