import React from 'react';
import { Challenge } from '../Challenge/Challenge';
import { WashingMachine, NumberFive, TurnOff, JoinCompetition, LessThanLastWeek, EarlyBird} from "../../images/DataUris";
import { MockTip, MockRule, JoinCompetitionDesc, LessThanLastWeekDescr, EarlyBirdDesc } from '../challenges.data';

export function WeeklyChallenges() {
    return (
        <>
            <Challenge cover={JoinCompetition} image={JoinCompetition} name="Join a competition" leaveCount={70} description="Join a competition that is running at the moment" rules={JoinCompetitionDesc} tips={MockTip} />
            <div className="challenges__challenge-separator"></div>
            <Challenge cover={LessThanLastWeek} image={LessThanLastWeek} name="5 Percent less than last week" leaveCount={100} description="Use 5% less energy than you used last week" rules={LessThanLastWeekDescr} tips={MockTip} />
            <div className="challenges__challenge-separator"></div>
            <Challenge cover={EarlyBird} image={EarlyBird} name="Early bird" leaveCount={75} description="Shut all your applicance after 22:00" rules={EarlyBirdDesc} tips={MockTip} />
        </>
    );
}
