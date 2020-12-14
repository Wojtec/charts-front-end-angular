import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpMethodChartComponent } from "./components/http-method-chart/http-method-chart.component";
import { ChartsModule } from "ng2-charts";
import { RequestsComponent } from "./components/requests/requests.component";
import { DataLogsService } from "../app/services/data-logs.service";
import { HttpAnswerComponent } from './components/http-answer/http-answer.component';
@NgModule({
  declarations: [AppComponent, HttpMethodChartComponent, RequestsComponent, HttpAnswerComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ChartsModule],
  providers: [DataLogsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
