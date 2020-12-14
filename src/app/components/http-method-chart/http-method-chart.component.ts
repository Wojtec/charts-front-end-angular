import { Component, OnInit } from "@angular/core";
import { DataLogsService } from "../../services/data-logs.service";
import { Log } from "../../models/Logs";
@Component({
  selector: "app-http-method-chart",
  templateUrl: "./http-method-chart.component.html",
  styleUrls: ["./http-method-chart.component.sass"],
})
export class HttpMethodChartComponent implements OnInit {
  da: Array<object> = [];

  constructor(private dataLogs: DataLogsService) {}
  public pieChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public pieChartLabels = ["GET", "POST", "HEAD", "Invalid"];
  public pieChartType = "pie";
  public pieChartLegend = true;
  public pieChartData: any = [{ data: [0, 0, 0, 0] }];
  ngOnInit(): void {
    this.dataLogs.getLogsData().subscribe((methods) => {
      const data = {
        get: 0,
        post: 0,
        head: 0,
        invalid: 0,
      };

      methods.map((e) => {
        if (e.request.method === "GET") {
          data.get++;
        }
        if (e.request.method === "POST") {
          data.post++;
        }
        if (e.request.method === "HEAD") {
          data.head++;
        }
        if (
          e.request.method !== "GET" &&
          e.request.method !== "POST" &&
          e.request.method !== "HEAD"
        ) {
          data.invalid++;
        }
      });
      this.pieChartData = [
        { data: [data.get, data.head, data.post, data.invalid] },
      ];
    });
  }
}
