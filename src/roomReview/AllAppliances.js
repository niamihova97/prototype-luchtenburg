import {unitOptions} from "../prototype.data";
import React from "react";
import Modal from 'react-modal';
import "./style/all-appliances.css";
import {ReactComponent as AllApplianceBtSVG} from "../images/allAppliances.svg";

function createAppliance(name, money, watt, carbon) {
    return  {
        name: name,
        [unitOptions.money.value]: money,
        [unitOptions.watt.value]: watt,
        [unitOptions.carbon.value]: carbon,
    }
}
const appliances = [
    createAppliance("Heater", "277.52€", "2312.64KWh", "1156.32kg CO2"),
    createAppliance("Dryer", "90.40€", "753.30KWh", "376.65kg CO2"),
    createAppliance("Fridge", "78.89€", "657.00KWh", "328.50kg CO2"),
    createAppliance("Oven", "41.62€", "346.83KWh", "173.42g CO2"),
    createAppliance("Laptop", "29.57€", "246.38KWh", "123.19kg CO2"),
    createAppliance("Microwave", "26.82€", "223.50KWh", "111.75kg CO2"),
    createAppliance("Dish Washer", "17.82€", "148.50KWh", "74.25kg CO2"),
    createAppliance("Kettle", "16.47€", "137.25KWh", "68.63kg CO2"),
    createAppliance("Slow Cooker", "216.32€", "136.00KWh", "68.00kg CO2"),
    createAppliance("Cofee Machine", "13.14€", "109.50KWh", "54.75kg CO2"),
    createAppliance("TV", "10.98€", "91.50KWh", "45.75kg CO2"),
    createAppliance("El. Blanket", "10.80€", "84.00KWh", "42.00kg CO2"),
    createAppliance("Washing Machine", "9.18€", "76.50KWh", "38.25kg CO2"),
    createAppliance("Vacuum", "7.93€", "66.12KWh", "33.06g CO2"),
    createAppliance("Toaster", "4.03€", "33.55KWh", "16.78kg CO2"),
    createAppliance("Hair Dryer", "1.96€", "16.33KWh", "8.17kg CO2"),
    createAppliance("Iron", "1.62€", "13.55KWh", "6.77kg CO2")]


    
   

export default function AllAppliances(props) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [modalTop, setModalTop] = React.useState(0);
    const [modalLeft, setModalRight] = React.useState(0);
    const buttonRef = React.useRef();
    React.useLayoutEffect(() => {
      if (!buttonRef?.current)
        return;
        const rect = buttonRef.current.getBoundingClientRect();
        console.log(rect)
        setModalTop(rect.bottom);
        setModalRight(rect.left);
    })
    console.log(props);
    return (
    <div className="all-appliances">
        <div ref={buttonRef} className={"all-appliances-bt" + (isOpen? " all-appliances-bt--open" : "")} onClick={() => setIsOpen(!isOpen)}><AllApplianceBtSVG/></div>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={{
            overlay: {
              background: 'transparent'
            },
            content : {
              position: 'absolute',     
              top: `${modalTop}px`,
              left: `${modalLeft - 410}px`,
              bottom: undefined,
              width: '400px',
            }
          }}
        >
            <div className="appliance-list">
                {appliances.map((appliance, index) => {
                    return (
                    <div className="appliance-list__appliance" key={`appliance-${index}`}>
                        <div className="appliance__name">{appliance.name}</div>
                        <div className="appliance__consumption">{appliance[props.unit]}</div>
                    </div>)
                })}
            </div>
        </Modal>
    </div>)
}