import { Component, OnInit } from "@angular/core";
import { DataLogsService } from "../../services/data-logs.service";
@Component({
  selector: "app-requests",
  templateUrl: "./requests.component.html",
  styleUrls: ["./requests.component.sass"],
})
export class RequestsComponent implements OnInit {
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
    let min = [];
    let allRequests = [];
    this.dataLogs.getLogsData().subscribe((data) => {
      console.log(data);
      data.map((e) => {
        allRequests.push(e.datetime.minute);
        min.indexOf(e.datetime.minute) === -1
          ? min.push(e.datetime.minute)
          : null;
      });
      this.barChartLabels = min;
      this.countRequestPerMinut(min, allRequests);
    });
  }

  countRequestPerMinut(min: Array<string>, allRequests: Array<string>) {
    let obj = [];
    min.map((m) => {
      const times = allRequests.filter((r) => r === m).length;
      obj.push(times);
    });
    this.barChartData = [{ data: obj, label: "Requests per minute" }];
  }
}
