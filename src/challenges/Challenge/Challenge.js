import {Line} from "rc-progress";
import {ReactComponent as Trash} from "../../images/trash.svg";
import React from "react";
import "./styles/challenge.css"
export function Challenge(props) {
    const [renderMode, setRenderMode] = React.useState("item");
    const hasAcceptedChallenge = props.progress !== undefined && props.progressText !== undefined;
    switch(renderMode) {
        case "item":  
            return renderItem();
        break;
        case "rules":
            return pageLayout(renderRulePageContent);
        case "tips":
            return pageLayout(tipsPageContent);
        break;   
    }
    function renderRulePageContent() {
        return( <>
            <div className="challenge-page__content-title">Rules</div>
            <div className="challenge-rules__rules">
                {props.rules}
            </div>
            <div className="challenge-rules__prize">
                prize
                <div className="challenge-rules__leave-count"> {props.leaveCount}<div className="challenge__leave" /></div>
            </div>
        </>);
    }
    function tipsPageContent() {
        return (<>
                <div className="challenge-page__content-title">Tips</div>
                <div className="challenge-tips__tip-list">
                    {props.tips.map((t,i) => {
                        return <div key={`tips-${i}`} className="challenge-tips__tip">{t}</div>  
                    })}
                </div>
            </>);
    }
    function pageLayout(renderContent) {
        return (
            <div className="challenge-page">
                <div className="challenge-page__header" style={{backgroundImage: `url(${props.cover})`}} >
                    <div className="challenge-page__name">{props.name}</div>
                </div>
                    <div className="challenge__page-content">
                        {renderContent()}
                    </div>
                <div className="challenge-page__buttons">
                    <div className="challenge-page__back" onClick={() => setRenderMode("item")}>Back</div>
                    {!hasAcceptedChallenge && renderMode === "rules"  && <div className="challenge-page__accept">Accept</div>}
                </div>
            </div>
        )
    }
    function renderItem() {
        return (
            <div className="challenge">
                <div className="challenge__image" style={{backgroundImage: `url(${props.image})`}} />
                <div className="challenge__main">
                    <div className="challenge__title">
                        <div className="challenge__name" onClick={() => setRenderMode("rules")}>
                            {props.name}
                        </div>
                        <div className="challenge__name-separator">
                            -
                        </div>
                        <div className="challenge__leave-count"> {props.leaveCount}<div className="challenge__leave" /></div>
                    </div>
                    <div className="challenge__description">{props.description}.{hasAcceptedChallenge && <div className="challenge__read-tips" onClick={() => setRenderMode("tips")}>Tips</div>}</div>
                    {hasAcceptedChallenge && <Line className="challenge__progress-bar" percent={props.progress} strokeWidth="2" trailWidth="2" strokeColor="#ffca33" trailColor="#FFF2CF" />}
                    {!hasAcceptedChallenge && <div className="challenge__progress-bar-placeholder" percent={props.progress} />}
                </div>
                {hasAcceptedChallenge && <div className="challenge__progress-text">{props.progressText}</div>}
                {!hasAcceptedChallenge && <div className="challenge__accept">Accept</div>}
                {hasAcceptedChallenge && <div className="challenge-delete"><Trash /></div>}
            </div>);
    }
}