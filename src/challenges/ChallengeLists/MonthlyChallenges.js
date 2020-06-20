import React from 'react';
import { Challenge } from '../Challenge/Challenge';
import { WashingMachine, NumberFive, TurnOff,TightSchedule, PowerfulSaver, LessThanLastMonth, MostEcoMonth } from "../../images/DataUris";
import { MockTip, MockRule, TightScheduleDesc, PowerfulSaverDesc, LessThanLastMonthDesc, MostEcoMonthDesc } from '../challenges.data';

export function MonthlyChallenges() {
    return (
        <>
            <Challenge cover={TightSchedule} image={TightSchedule} name="Tight schedule" leaveCount={150} description="Use your bathroom appliances in off peak hours" rules={TightScheduleDesc} tips={MockTip} />
            <div className="challenges__challenge-separator"></div>
            <Challenge cover={PowerfulSaver} image={PowerfulSaver} name="Powerful saver" leaveCount={300} description="Complete a daily challenge every day of the month" rules={PowerfulSaverDesc} tips={MockTip} />
            <div className="challenges__challenge-separator"></div>
            <Challenge cover={LessThanLastMonth} image={LessThanLastMonth} name="5% less than last month" leaveCount={180} description="Use 10% less energy than you used lass month" rules={LessThanLastMonthDesc} tips={MockTip} />
            <div className="challenges__challenge-separator"></div>
            <Challenge cover={MostEcoMonth} image={MostEcoMonth} name="The most eco friendly month" leaveCount={300} description="Shut all your applicance for an hour" rules={MostEcoMonthDesc} tips={MockTip} />
        </>
    );
}
