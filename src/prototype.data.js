export const timeFrameOptions = {
    day: {
         value: "day",
         label: "Day"
    },
    week:  {
        value: "week",
        label: "Week"
   },
    month: {
        value: "month",
        label: "Month"
   },
    year:  {
        value: "year",
        label: "Year"
   },
}

export const overviewOptions = {
    overalConsumption: { 
        label: "Overal consumption",
        value: "overalConsumption" , 
    },
    alwaysOn: {
        label:"Always on", 
        value: "alwaysOn"
    },
};

export const unitOptions = { 
    watt : {
         label: "Watt",
         value: "watt"
    },
    money : {
         label: "Euro",
         value: "money"
    },
    carbon : {
        label: "CO2",
        value: "carbon"
    }
}

const hourCategories = [...Array(24).keys()].map(hour => [hour < 10 ? `0${hour}`: `${hour}`, "00"].join(":"));
const monthCategories = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekCategories = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const dayCategories = [...Array(30).keys()].map(day => `${1 + day}/06/2020`);
export const appliances = ["Fridge", "Oven", "TV", "Laptop", "Shower", "Washing machine", "Dishwasher", "Dryer", "Lights", "Microwave", "Coffee Machine"];
export const alwaysOnAppliances = [
    "Fridge",
    "TV",      
    "Microwave",
    "Laptop", 
    "Coffee Machine"];
export const applicanceColor = {
    Fridge: "#2233", 
    Oven: 0, 
    TV: 130,      
    Microwave: 50,
    Laptop: 50, 
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 0,
}
export function toOptionArray(optionEnum) {
    return Object.keys(optionEnum).map(key => optionEnum[key]);
}
export const timeFrames = toOptionArray(timeFrameOptions);
export const overviews = toOptionArray(overviewOptions);
export const units = toOptionArray(unitOptions);
const hourlyConsumption = [{
    category: "00:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 130,      
    Microwave: 50,
    Laptop: 50, 
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 0,
},
{
    category: "02:00",
    Fridge: 1000, 
    Oven: 0,
    Laptop: 50,
    TV: 130,
    Microwave: 50,
    Laptop: 0, 
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 0
},
{
    category: "03:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 130, 
    Laptop: 50, 
    Microwave: 50,
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 0
},
{
    category: "04:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 130, 
    Laptop: 50,
    Microwave: 50, 
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 0
},
{
    category: "05:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 130, 
    Laptop: 50, 
    Microwave: 50,
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 0
},
{
    category: "06:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 300, 
    Laptop: 50,
    Microwave: 50,
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 600,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 700
},
{
    category: "07:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 300, 
    Laptop: 50,
    Microwave: 50,
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 600,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 700
},
{
    category: "08:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 300, 
    Laptop: 50,
    Microwave: 50, 
    Shower: 4000, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 700
},
{
    category: "09:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 130, 
    Laptop: 50,
    Microwave: 50, 
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 0
},
{
    category: "10:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 130, 
    Laptop: 50,
    Microwave: 50, 
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 0
},
{
    category: "11:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 130, 
    Laptop: 50,
    Microwave: 50, 
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 0
},
{
    category: "12:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 130, 
    Laptop: 50,
    Microwave: 50, 
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 0
},
{
    category: "13:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 130, 
    Laptop: 50,
    Microwave: 50, 
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 0
},
{
    category: "14:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 130, 
    Laptop: 50,
    Microwave: 50, 
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 0
},
{
    category: "15:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 130, 
    Laptop: 50,
    Microwave: 50, 
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 0
},
{
    category: "16:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 130, 
    Laptop: 50,
    Microwave: 1000, 
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 0
},
{
    category: "17:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 600, 
    Laptop: 300,
    Microwave: 50, 
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 300,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 800
},
{
    category: "18:00",
    Fridge: 1000, 
    Oven: 2500, 
    TV: 600, 
    Laptop: 300,    
    Microwave: 50,
    Shower: 0, 
    ["Washing machine"]: 700,
    ["Coffee Machine"]: 300,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 800
},
{
    category: "19:00",
    Fridge: 1000, 
    Oven: 2500, 
    TV: 600, 
    Laptop: 300,
    Microwave: 50, 
    Shower: 0, 
    ["Washing machine"]: 700,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 800
},
{
    category: "20:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 600, 
    Laptop: 300,
    Microwave: 50, 
    Shower: 4000, 
    ["Washing machine"]: 700,
    ["Coffee Machine"]: 50,
    Dishwasher: 1800, 
    Dryer: 3000, 
    Lights: 800
},
{
    category: "21:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 600,
    Microwave: 50, 
    Laptop: 300, 
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 1800, 
    Dryer: 0, 
    Lights: 800
},
{
    category: "22:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 600,
    Microwave: 50,
    Laptop: 300, 
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 0
},
{
    category: "23:00",
    Fridge: 1000, 
    Oven: 0, 
    TV: 130, 
    Laptop: 50,
    Microwave: 50, 
    Shower: 0, 
    ["Washing machine"]: 0,
    ["Coffee Machine"]: 50,
    Dishwasher: 0, 
    Dryer: 0, 
    Lights: 0
}];
export function getOveralConsumption(consumptions){
    return consumptions.reduce((prev, curr, index) => {
        return {
            category: curr.category,
            Fridge: prev.Fridge + curr.Fridge, 
            Oven: prev.Oven + curr.Oven, 
            TV: prev.TV + curr.TV, 
            Laptop: prev.Laptop + curr.Laptop, 
            Shower: prev.Shower + curr.Shower, 
            ["Washing machine"]: prev["Washing machine"] + curr["Washing machine"],
            ["Coffee Machine"]: prev["Coffee Machine"] + curr["Coffee Machine"],
            Dishwasher: prev.Dishwasher + curr.Dishwasher, 
            Dryer: prev.Dryer + curr.Dryer, 
            Lights: prev.Lights + curr.Lights,
            Microwave: prev.Microwave + curr.Microwave
        }
    })
}
function extrapolate(categories, overalConsumption) {
    return categories.map(week => {
        return {
            category: week,
            Fridge: overalConsumption.Fridge,
            Oven: overalConsumption.Oven * (Math.random() * 2),
            TV: overalConsumption.TV * (Math.random() * 2),
            Laptop: overalConsumption.Laptop * (Math.random() * 2),
            Shower: overalConsumption.Shower * Math.random(),
            ["Washing machine"]: overalConsumption["Washing machine"] * Math.random(),
            ["Coffee Machine"]: overalConsumption["Coffee Machine"] * (Math.random() * 2),
            Dishwasher: overalConsumption.Dishwasher * Math.random(), 
            Dryer: overalConsumption.Dryer * Math.random(), 
            Lights: overalConsumption.Lights * (Math.random() * 2),
            Microwave: overalConsumption.Microwave * Math.random()
        }
    })
}
function generalize(categories, existingData, periodicity) {
    return categories.map((category, index) => {
        const day = index % periodicity;
        return {
            ...existingData[day],
            category: category,
        }
    });
}
function filterProps(dataPoint, props){
    return props.reduce((prev, curr) => ({
        ...prev,
        [curr]: dataPoint[curr],
    }), {category: dataPoint.category});
}
const overalDayConsumption = getOveralConsumption(hourlyConsumption)
const weekConsumption = extrapolate(weekCategories, overalDayConsumption);
const monthConsumption = generalize(dayCategories, weekConsumption, 7);
const overalMonthConsumption = getOveralConsumption(monthConsumption);
const yearConsumption = extrapolate(monthCategories, overalMonthConsumption);

export const overviewDataSets = {
    [overviewOptions.overalConsumption.value]: {
        day: hourlyConsumption,
        week: weekConsumption,
        month: monthConsumption,
        year: yearConsumption
    },
    [overviewOptions.alwaysOn.value]: {
        day: hourlyConsumption.map(c => filterProps(c, alwaysOnAppliances)),
        week: weekConsumption.map(c => filterProps(c, alwaysOnAppliances)),
        month: monthConsumption.map(c => filterProps(c, alwaysOnAppliances)),
        year:  yearConsumption.map(c => filterProps(c, alwaysOnAppliances))
    },
}

function getTotal(data) {
    return appliances.reduce((prev, app) => {
        return prev + (data[app] ?? 0)
    }, 0);
}
function getTotalConsumption(consumption) {
    return consumption.reduce((prev, curr) => {
        return prev + getTotal(curr)
    }, 0);
}

export const overviewTotals = {
    [overviewOptions.overalConsumption.value]: {
        day: getTotalConsumption(overviewDataSets.overalConsumption.day),
        week: getTotalConsumption(overviewDataSets.overalConsumption.week),
        month: getTotalConsumption(overviewDataSets.overalConsumption.month),
        year: getTotalConsumption(overviewDataSets.overalConsumption.year),
    },
    [overviewOptions.alwaysOn.value]: {
        day: getTotalConsumption(overviewDataSets.alwaysOn.day),
        week: getTotalConsumption(overviewDataSets.alwaysOn.week),
        month: getTotalConsumption(overviewDataSets.alwaysOn.month),
        year: getTotalConsumption(overviewDataSets.alwaysOn.year),
    },
}

export function ConvertValueToUnit(unit, value) {
    if(unit === unitOptions.money.value)
        return value * 0.00022;
    if(unit === unitOptions.carbon.value)
        return value * 0.048
    return value;
}
export function convertConsumptionToUnit(consumption, unit, series) {
    return consumption.map(c => series.reduce((prev, curr) => {
        return {
            ...prev,
            [curr] : ConvertValueToUnit(unit, c[curr])
        }
    }, {category: c.category}))
}

const rooms = [
    {
        name: "living room",
        appliance: [
            {
                name: "TV",
                ratio: 1,
                on: "11:30-12:00"
            },
            {
                name: "Laptop",
                ratio: 0.5,
                on: "11:30-12:00 <br/> 11:30-12:00"

            },
            {
                name: "Lights",
                ratio: 0.4,
                on: "11:30-12:00"
            },
        ]
    },
    {
        name: "Bedroom",
        appliance: [
            {
                name: "Laptop",
                ratio: 0.5,
                on: "11:30-12:00"
            },
            {
                name: "Lights",
                ratio: 0.1,
                on: "11:30-12:00"
            },
        ]
    },   
    {
        name: "Bathroom",
        appliance: [
            {
                name: "Shower",
                ratio: 1,
                on: "11:30-12:00"
            },
            {
                name: "Dryer",
                ratio: 1,
                on: "11:30-12:00"
            },
            {
                name: "Washing machine",
                ratio: 1,
                on: "11:30-12:00"
            },{
                name: "Lights",
                ratio: 0.2,
                on: "11:30-12:00"
            },
        ]
    },   
    {
        name: "Kitchen",
        appliance: [
            {
                name: "Oven",
                ratio: 1,
                on: "11:30-12:00"
            },
            {
                name: "Microwave",
                ratio: 1,
                on: "11:30-12:00"
            },
            {
                name: "Dishwasher",
                ratio: 1,
                on: "11:30-12:00"
            },
            {
                name: "Coffee Machine",
                ratio: 1,
                on: "11:30-12:00"

            },
            {
                name: "Fridge",
                ratio: 1,
                on: "11:30-12:00"

            },            {
                name: "Lights",
                ratio: 0.3,
                on: "11:30-12:00"
            },
        ]
    },
];

export function createTreemapData(consumption, unit) {
    const overalConsumption = getOveralConsumption(convertConsumptionToUnit(consumption, unit, appliances))
    return rooms.map(room => {
        return {
            name: room.name,
            children: room.appliance.map(c => {
                return {
                    name: c.name,
                    value: c.ratio * overalConsumption[c.name],
                    on: c.on,
                }
            })
        }
    })
}

export function getUnitText(selectedUnit) {
    if(selectedUnit === unitOptions.carbon.value)
        return "g";
    if(selectedUnit === unitOptions.money.value)
        return "€"
    return "W";
}