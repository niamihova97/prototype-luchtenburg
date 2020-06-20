import React from 'react';
import { PovSelector } from '../povSelector/PovSelector';
import {overviewTotals ,ConvertValueToUnit, timeFrameOptions, unitOptions, timeFrames, units, createTreemapData, overviewDataSets, overviewOptions, getUnitText} from "../prototype.data";
import "./style/room-review.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import AllAppliances from "./AllAppliances";

export function RoomReview(){
    const [selectedTimeFrame, selectTimeFrame] = React.useState(timeFrameOptions.day);
    const [selectedUnit, selectUnit] = React.useState(unitOptions.watt);
    let chart;
    React.useLayoutEffect(() => {
    am4core.useTheme(am4themes_animated);
    // create chart
    chart = am4core.create("room-review-chart", am4charts.TreeMap);
    const data = createTreemapData(overviewDataSets[overviewOptions.overalConsumption.value][selectedTimeFrame.value], selectedUnit.value);
    chart.data = data;
    // only one level visible initially
    chart.maxLevels = 1;
    // define data fields
    chart.dataFields.value = "value";
    chart.dataFields.name = "name";
    chart.dataFields.children = "children";
    chart.homeText = "Home";
    chart.numberFormatter.numberFormat = "#,###.##"
    // enable navigation
    chart.navigationBar = new am4charts.NavigationBar();
    var level0 = chart.seriesTemplates.create("0");
    let level0_column = level0.columns.template;
    level0_column.tooltipText = "{name} : {value}" + ` ${getUnitText(selectedUnit.value)}`
    let level0_bullet = level0.bullets.push(new am4charts.LabelBullet());
    level0_bullet.locationY = 0.5;
    level0_bullet.locationX = 0.5;
    level0_bullet.label.text = "{name}: {value}" + ` ${getUnitText(selectedUnit.value)}`;
    level0_bullet.label.fill = am4core.color("#fff");
    level0_bullet.label.wrap = true;
    var level1 = chart.seriesTemplates.create("1");
    let level1_column = level1.columns.template;
    level1.calculatePercent = true;
    level1_column.tooltipHTML = `<center><strong>{name}</strong></center>
    <hr />
    <table>
    <tr>
      <th align="left">On</th>
      <td align="right">{on}</td>
    </tr>
    <tr>
      <th align="left">Energy Usage</th>
      <td align="right">{value} ${getUnitText(selectedUnit.value)}</td>
    </tr>
    <tr>
      <th align="left">Consumption %</th>
      <td align="right">{percent}%</td>
    </tr>
    </table>
    <hr />
    <center><input type="button" value="Schedule" onclick="alert('You clicked on {categoryX}')" /></center>`;
    const level1_bullet = level1.bullets.push(new am4charts.LabelBullet());
    level1_bullet.locationY = 0.5;
    level1_bullet.locationX = 0.5;
    level1_bullet.label.text = "{name}: {value}" + ` ${getUnitText(selectedUnit.value)}`;
    level1_bullet.label.fill = am4core.color("#fff");
    level1_bullet.label.wrap = true;
    level1.events.on("hit", (ev) => {
        console.log(ev);
    })
    return function cleanup() { 
        if (chart) {
        chart.dispose();
    }};
    })
    return(
        <div className="room-review">
            <div className="room-review__title">{Math.round(ConvertValueToUnit(selectedUnit.value, overviewTotals[overviewOptions.overalConsumption.value][selectedTimeFrame.value])).toLocaleString("en")} {getUnitText(selectedUnit.value)}</div>
            <div className="room-review__pov">
                <PovSelector className="room-review__pov-selector time-frame-selector" options={timeFrames} value={selectedTimeFrame} onChange={value => selectTimeFrame(value)} />
                <PovSelector className="room-review__pov-selector unit-selector" options={units} value={selectedUnit}  onChange={value => selectUnit(value)}/>
            </div>
            <AllAppliances unit={selectedUnit.value}/>    
            <div className="room-review-chart"></div>
        </div>
    );
}