import React from 'react';
import { Challenge } from '../Challenge/Challenge';
import { WashingMachine, NumberFive, TurnOff, ProSaver, AllDayAlwaysOn, TenPercentLess } from "../../images/DataUris";
import { MockTip, MockRule, ProSaverDescr, ProSaverTip, AllDayAlwaysOnDesc, AllDayAlwaysOnTip, TenPercentLessDesc, TenPercentLessTip } from '../challenges.data';

export function DailyChallenges() {
    return (
        <>
            <Challenge cover={ProSaver} image={ProSaver} name="Pro saver" leaveCount={120} description="Complete three daily challenes in one day"  rules={ProSaverDescr} tips={ProSaverTip} />
            <div className="challenges__challenge-separator"></div>
            <Challenge cover={AllDayAlwaysOn} image={AllDayAlwaysOn} name="All day Always on consumption" leaveCount={100} description="Spend a whole day without turning on appliances that are not Always on" rules={TenPercentLessDesc} tips={TenPercentLessTip} />
            <div className="challenges__challenge-separator"></div>
            <Challenge cover={TenPercentLess} image={TenPercentLess} name="10% less than yesterday" leaveCount={140} description="Use 10% ;ess energy than you used yesterday" rules={AllDayAlwaysOnDesc} tips={AllDayAlwaysOnTip}  />
        </>
    );
}

