import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import 'hammerjs';
import { NguCarouselConfig } from '@ngu/carousel';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  panelOpenState = false;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 4, sm: 4, md: 4, lg: 4, all: 0 },
    load: 1,
    interval: { timing: 6000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2
  }
  carouselItemsImages = [{
    carImages: "../../assets/Asset 2.png",
    desc: "Fridge"
  }, {
    carImages: "../../assets/Asset 3.png",
    desc: "Microwave"
  }, {
    carImages: "../../assets/Asset 4.png",
    desc: "Washing machine"
  }, {
    carImages: "../../assets/Asset 5.png",
    desc: "Televison"
  }, {
    carImages: "../../assets/Asset 2.png",
    desc: "Fridge"
  }, {
    carImages: "../../assets/Asset 3.png",
    desc: "Microwave"
  }, {
    carImages: "../../assets/Asset 4.png",
    desc: "Washing machine"
  }, {
    carImages: "../../assets/Asset 5.png",
    desc: "Televison"
  }, {
    carImages: "../../assets/Asset 2.png",
    desc: "Fridge"
  }, {
    carImages: "../../assets/Asset 3.png",
    desc: "Microwave"
  }, {
    carImages: "../../assets/Asset 4.png",
    desc: "Washing machine"
  }, {
    carImages: "../../assets/Asset 5.png",
    desc: "Televison"
  }, {
    carImages: "../../assets/Asset 2.png",
    desc: "Fridge"
  }, {
    carImages: "../../assets/Asset 3.png",
    desc: "Microwave"
  }, {
    carImages: "../../assets/Asset 4.png",
    desc: "Washing machine"
  }, {
    carImages: "../../assets/Asset 5.png",
    desc: "Televison"
  }]

  constructor() { }

  ngOnInit(): void {
    this.executePieChart();
  }
  pChart = [{
    "stocktypes": "Low stock variants",
    "values": 30,
    "color":"orange"
  }, {
    "stocktypes": "Surplus",
    "values": 27,
    "color":"blue"
  }, {
    "stocktypes": "All variants",
    "values": 43,
    "color":"green"
  },
  ];
  executePieChart() {
    let chart = am4core.create("pieChart", am4charts.PieChart);
    // Add data
    chart.data = this.pChart;
    // Add and configure Series

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "values";
    pieSeries.dataFields.category = "stocktypes";
    pieSeries.ticks.template.disabled = true;
    pieSeries.alignLabels = false;
    pieSeries.labels.template.text = "";
    pieSeries.labels.template.radius = am4core.percent(-40);
    pieSeries.labels.template.fill = am4core.color("white");
    chart.hiddenState.properties.radius = am4core.percent(0);

    pieSeries.colors.list = [
      am4core.color("orange"),
      am4core.color("#2f81ff"),
      am4core.color("#008000"),

    ];
  }
  cards = [
    { 'name': 'New order', 'count': '29', 'title': '15% from this yesterday' },
    { 'name': 'To be shipped', 'count': '35', 'title': '15% from this yesterday' },
    { 'name': 'To be invoiced', 'count': '17', 'title': '15% from this yesterday' },
    { 'name': 'To be delivered', 'count': '24', 'title': '15% from this yesterday' },
  ];
  accord = [
    { title: 'High', count: '30', desc: 'This is high' },
    { title: 'Medium', count: '10', desc: 'This is Medium' },
    { title: 'Low', count: '40', desc: 'This is Low' }

  ];
  sellitems = [
    { name: 'Arbtus', title: 'Marina', count: '25' },
    { name: 'Sempvirens', title: 'Buxus', count: '25' },
    { name: 'camellia', title: 'Jab purity', count: '25' },
    { name: 'Bitella', title: 'Utils', count: '25' },
  ]
}
