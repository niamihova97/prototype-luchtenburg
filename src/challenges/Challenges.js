import React from 'react';
import "./styles/challenges.css";
import {ChallengeDiscoveryMenu} from "./ChallengeDiscovery/ChallengeDiscoveryMenu";
import { copyAllProperties } from '@amcharts/amcharts4/.internal/core/utils/Object';
import { challenges } from './challenges.data';
import { MyChallenges } from './ChallengeLists/MyChallenges';
import { renderDailyChallenges, DailyChallenges } from './ChallengeLists/DailyChallenges';
import { WeeklyChallenges } from './ChallengeLists/WeeklyChallenges';
import { MonthlyChallenges } from './ChallengeLists/MonthlyChallenges';
import { YearlyChallenges } from './ChallengeLists/YearlyChallenges';
import { Competition } from './Competitions/Competition';

export function Challenges() {
    const [selectedChallengeCategory, setSelectedChallengeCategory] = React.useState(challenges[0]);
    return (
    <div className="challenges">
        <div className="challenges__title">{selectedChallengeCategory.name}</div>
        <div className="challenges__list">
            <ChallengeDiscoveryMenu options={challenges} onSelectionChange={setSelectedChallengeCategory} selected={selectedChallengeCategory}/>
            {selectedChallengeCategory.name === "My Challenges" && <MyChallenges/>}
            {selectedChallengeCategory.name === "Daily Challenges" && <DailyChallenges/>}
            {selectedChallengeCategory.name === "Weekly Challenges" && <WeeklyChallenges/>}
            {selectedChallengeCategory.name === "Monthly Challenges" && <MonthlyChallenges/>}
            {selectedChallengeCategory.name === "Yearly Challenges" && <YearlyChallenges/>}
            {selectedChallengeCategory.name === "Competitions" && <Competition />}
        </div>
    </div>)
}