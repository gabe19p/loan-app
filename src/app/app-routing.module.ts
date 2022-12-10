import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { BaseLayoutComponent } from "./base-layout/base-layout.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  {
    path: "",
    component: BaseLayoutComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
