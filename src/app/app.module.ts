import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test.component";
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { UpperCaseDirective } from './upper-case.directive';
import { MyComponentComponent } from './my-component/my-component.component';
import { TestMyComponentComponent } from './test-my-component/test-my-component.component';
import { ChildNewComponent } from './child-new/child-new.component';

@NgModule({
  declarations: [AppComponent, TestComponent, ChildComponent, ParentComponent, UpperCaseDirective, MyComponentComponent, TestMyComponentComponent, ChildNewComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
