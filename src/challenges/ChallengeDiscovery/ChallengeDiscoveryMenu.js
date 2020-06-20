import React, { useLayoutEffect } from "react";
import {ReactComponent as GridIcon} from "../../images/gridIcon.svg";
import Modal from 'react-modal';
import "./styles/challenge-discovery-menu.css";

export function ChallengeDiscoveryMenu(props) {
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
    function imageUrl(imageName) {
      return `url(../../../images/${imageName})`
    }
    return (
    <div className="challenge-discover-menu">
        <div ref={buttonRef} className={"challenge-discovery-menu-button" + (isOpen ? " challenge-discovery-menu-button--is-open" : "")} onClick={() => setIsOpen(!isOpen)}><GridIcon/></div>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={{
            overlay: {
              background: 'transparent'
            },
            content : {
              position: 'absolute',     
              top: `${modalTop + 15}px`,
              left: `${modalLeft - 415}px`,
              bottom: undefined,
              width: '400px',
            }
          }}
        >
          <div className="challenge-discovery__challenges">
            {props.options.map((c, i) => {
              const className = ["challenge-category-bt", props.selected == c? "challenge-category-bt--selected" : ""].join(" ");
              const imageClassName = ["challenge-category-bt__image", `challenge-category-bt__image--${c.image}`].join(" ");
              return (
              <div key={"ccbt" + i} className={className} onClick={() => props.onSelectionChange(c)}>
                <div className={imageClassName} />
                <div className="challenge-category-bt__text">
                  {c.name}
                </div>
              </div>
            )})}
          </div>
        </Modal>
    </div>
    );
}