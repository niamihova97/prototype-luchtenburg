import React from 'react';
import { Challenge } from '../Challenge/Challenge';
import { WashingMachine, NumberFive, TurnOff, QuickSaveBackground, LessThanYesterday,AlwaysOnHour } from "../../images/DataUris";
import { MockTip, MockRule, LessThanYesterdayDescr, LessThanYesterdayTip, AlwaysOnHourDesc, AlwaysOnHourTip } from '../challenges.data';

export function MyChallenges() {
    return <>
        <Challenge cover={QuickSaveBackground} image={QuickSaveBackground} name="Quick save" progress="33" leaveCount={30} description="Do 3 laundries before 16:00 or after 19:00" progressText={"1/3"} rules={MockRule} tips={MockTip} />
        <div className="challenges__challenge-separator"></div>
        <Challenge cover={LessThanYesterday} image={LessThanYesterday} name="3% less than yesterday" progress="0" leaveCount={60} description="Use 3% less Watts than yesterday" progressText={"0/1"} rules={LessThanYesterdayDescr} tips={LessThanYesterdayTip} />
        <div className="challenges__challenge-separator"></div>
        <Challenge cover={AlwaysOnHour} image={AlwaysOnHour} name="Only always on for 1 hours" progress="15" leaveCount={45} description="Shut all your applicance for an hour" progressText={"15/60"} rules={AlwaysOnHourDesc} tips={AlwaysOnHourTip} />
    </>;
}
