import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './components/DataBinding/binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwitchDirComponent } from './components/Directives/switch-dir/switch-dir.component';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './components/communication/parent/parent.component';
import { ChildComponent } from './components/communication/child/child.component';
import { InbuiltPipesComponent } from './components/inbuilt-pipes/inbuilt-pipes.component';
import { AgePipe } from './pipesEg/age.pipe';
import { UsersService } from './services/users.service';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { UsersDataComponent } from './components/users-data/users-data.component';
import { UserComponent } from './components/user/user.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { AboutComponent } from './components/about/about.component';
import { LocationComponent } from './components/location/location.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AuthService } from './services/auth.service';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ProductDashboardModule } from './modules/product-dashboard/product-dashboard.module';
import { ContactComponent } from './components/contact/contact.component';
import { NotificationboardComponent } from './components/notificationboard/notificationboard.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { CounterComponent } from './components/viewchild/counter/counter.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { ProductWidgetComponent } from './components/contentProjection/product-widget/product-widget.component';
import { headersInterceptor } from './interceptors/headers.interceptor';
import { loggingInterceptor } from './interceptors/logging.interceptor';
import { TdfComponent } from './components/tdf/tdf.component';
import { LifecyclehooksComponent } from './components/lifecyclehooks/lifecyclehooks.component';
import { HookchildComponent } from './components/lifecyclehooks/hookchild/hookchild.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    SwitchDirComponent,
    ParentComponent,
    ChildComponent,
    InbuiltPipesComponent,
    AgePipe,
    UsersDataComponent,
    UserComponent,
    AddressComponent,
    CompanyComponent,
    AboutComponent,
    LocationComponent,
    FeedbackComponent,
    AdduserComponent,
    ContactComponent,
    NotificationboardComponent,
    ViewchildComponent,
    CounterComponent,
    ContentProjectionComponent,
    ProductWidgetComponent,
    TdfComponent,
    LifecyclehooksComponent,
    HookchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
    // ProductDashboardModule
  ],
  providers: [UsersService,AuthService,
    provideHttpClient(withInterceptors([
      headersInterceptor,
      loggingInterceptor
    ]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
