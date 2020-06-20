import React from 'react';
import "./style/overview.css";
import {getUnitText, ConvertValueToUnit, convertConsumptionToUnit, timeFrameOptions, unitOptions, timeFrames, overviews, units, overviewOptions, overviewDataSets, appliances, overviewTotals, alwaysOnAppliances} from "../prototype.data";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { PovSelector } from '../povSelector/PovSelector';
import { getNextUnit } from '@amcharts/amcharts4/.internal/core/utils/Time';

am4core.useTheme(am4themes_animated);

export function Overview() {
    const [selectedTimeFrame, selectTimeFrame] = React.useState(timeFrameOptions.day);
    const [selectedOverview, selectOverview] = React.useState(overviewOptions.overalConsumption);
    const [selectedUnit, selectUnit] = React.useState(unitOptions.watt);

      let chart;
      React.useLayoutEffect(() => {
        const allSeries = selectedOverview.value === overviewOptions.alwaysOn.value ? alwaysOnAppliances : appliances;
          chart = am4core.create("overview-chart", am4charts.XYChart);
          chart.colors.step = 2;
  
          // Add data
          chart.data = convertConsumptionToUnit(overviewDataSets[selectedOverview.value][selectedTimeFrame.value], selectedUnit.value, allSeries);
          
          // Create axes
          var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
          categoryAxis.dataFields.category = "category";
          
          var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
          valueAxis.renderer.labels.template.adapter.add("text", function(text) {
            return text + " " + getUnitText(selectedUnit.value);
          });
          chart.scrollbarX = new am4charts.XYChartScrollbar();
          allSeries.forEach(applicance => {
            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = applicance;
            series.dataFields.categoryX = "category";
            series.name = applicance;
            series.tooltip.background.strokeWidth = 3;
            series.fillOpacity = 0.85;
            series.stacked = true;
            chart.scrollbarX.series.push(series);
          })          
          
          // add legend
          chart.legend = new am4charts.Legend();
          return function cleanup() { 
              if (chart) {
              chart.dispose();
          }};
      })
    return (
        <div className="overview">
            <div className="overview__title">{Math.round(ConvertValueToUnit(selectedUnit.value, overviewTotals[selectedOverview.value][selectedTimeFrame.value])).toLocaleString("en")} {getUnitText(selectedUnit.value)}</div>
            <div className="overview__pov">
                <PovSelector className="overview__pov-selector time-frame-selector" options={timeFrames} value={selectedTimeFrame} onChange={value => selectTimeFrame(value)} />
                <PovSelector className="overview__pov-selector series-selector" options={overviews} value={selectedOverview}  onChange={value => selectOverview(value)}/>
                <PovSelector className="overview__pov-selector unit-selector" options={units} value={selectedUnit}  onChange={value => selectUnit(value) }/>
            </div>    
            <div className="overview-chart"></div>
        </div>
        );
}