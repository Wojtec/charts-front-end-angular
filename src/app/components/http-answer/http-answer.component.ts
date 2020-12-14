import { Component, OnInit } from "@angular/core";
import { DataLogsService } from "../../services/data-logs.service";

@Component({
  selector: "app-http-answer",
  templateUrl: "./http-answer.component.html",
  styleUrls: ["./http-answer.component.sass"],
})
export class HttpAnswerComponent implements OnInit {
  constructor(private dataLogs: DataLogsService) {}
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = [];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [{ data: [0, 0, 0, 0], label: "Requests per minute" }];
  ngOnInit(): void {
    this.getRequests();
  }

  getRequests() {
    let res200 = [];
    let res300 = [];
    let res302 = [];
    let res404 = [];
    let res304 = [];
    let tt = [];
    this.dataLogs.getLogsData().subscribe((data) => {
      data.map((e) => {
        tt.indexOf(e.response_code) === -1 ? tt.push(e.response_code) : null;
        if (e.response_code === "200") {
          res200.push(e.response_code);
        }
        if (e.response_code === "302") {
          res302.push(e.response_code);
        }
        if (e.response_code === "404") {
          res404.push(e.response_code);
        }
        if (e.response_code === "304") {
          res304.push(e.response_code);
        }
        if (e.response_code === "300") {
          res300.push(e.response_code);
        }
      });
      console.log(res200, res300, res302, res304, res404, tt);
    });
  }
}
