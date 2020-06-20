import React from 'react';
import { participants } from "./Competition.data";
import "./styles/competition.css";
export function Competition(props) {
    const [hasJoined, setJoined] = React.useState(false)
    function renderParticipants() {
        return participants.map((p,i) => {
            const rank = i + 1;
            return (
                <div className="competition__participant">
                    <div className="competition__participant-rank">{rank}</div>
                    <div className="participant__profile-picture" style={{backgroundColor: p.backgroundColor}}>
                        <div  className="participant__profile-picture-placeholder">{p.name.slice(0, 2)}</div>
                    </div>
                    <div className="participant__name">{p.name}</div>
                    {rank < 4 ? <div className="participant__trophee"><div className="participant__trophee-rank">{rank}</div></div> : <div className="participant__trophee-placeholder"/>}
                    <div className="participant__score">{p.score}</div>
                </div>
            )
        });
    }
    function renderJoin() {
        return <div className="competition__join" onClick={() => setJoined(true)}>Join the competition</div>
    }
    return (
    <div className="competition">
        <div className="competition__header"><div className="competition__title">Energy saver !</div></div>
        
        <div className="competition__description">Complete in challenges and obtain the most leaves to win this competition</div>
        <div className="competition__content">
            {hasJoined? renderParticipants() : renderJoin()}
        </div>
    </div>
    );
}