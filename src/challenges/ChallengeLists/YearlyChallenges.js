import React from 'react';
import { Challenge } from '../Challenge/Challenge';
import { WashingMachine, NumberFive, TurnOff, ThreeHundredChallenges, LessThanLastYear, SevenCompetitions} from "../../images/DataUris";
import { MockTip, MockRule, TreeHundredChallengesDesc, LessThanLastYearDesc, SevenCompetitionsDesc } from '../challenges.data';

export function YearlyChallenges() {
    return (
        <>
            <Challenge cover={ThreeHundredChallenges} image={ThreeHundredChallenges} name="Complete 300 challenges" leaveCount={3000} description="Complete 300 challenges this year" rules={TreeHundredChallengesDesc} tips={MockTip} />
            <div className="challenges__challenge-separator"></div>
            <Challenge cover={LessThanLastYear} image={LessThanLastYear} name="3% less than last year" leaveCount={1000} description="Use #% less energy than last year" rules={LessThanLastYearDesc} tips={MockTip} />
            <div className="challenges__challenge-separator"></div>
            <Challenge cover={SevenCompetitions} image={SevenCompetitions} name="Win 7 competitions" leaveCount={700} description="Join and win 7 competitions this year" rules={SevenCompetitionsDesc} tips={MockTip} />
        </>
    );
}
