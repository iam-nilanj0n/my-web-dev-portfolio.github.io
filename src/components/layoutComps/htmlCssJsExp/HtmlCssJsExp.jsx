import React from 'react';
import Card from '../assignmentCard/Card';
// Importing Pic from assets
import GradeCalc from '../../../assets/Grade-calculator.png';
import TipCalc from '../../../assets/Tip-calculator.png';
import UsZipSearch from '../../../assets/US-Zip-Code-Search.png';
import showMoreOrLess from '../../../assets/showMoreOrLess.png';
import weightConverter from '../../../assets/weight-converter.png';
import jsLiveTime from '../../../assets/live-time-with-js.png';
import nameSeacrh from '../../../assets/name-search.png';
import jsSecondCounter from '../../../assets/js-second-counter.png';
import './HtmlCssJsExp.css';

const htmlCssJsExpArr = [
    {
        Pic: GradeCalc,
        projectName: 'Grade Calculator',
        URL: 'https://iam-nilanj0n.github.io/gradeCalculator.github.io/'
    },
    {
        Pic: TipCalc,
        projectName: 'Tip Calculator',
        URL: 'https://iam-nilanj0n.github.io/tip-calculator.github.io/'
    },
    {
        Pic: UsZipSearch,
        projectName: 'US Zip Code Search',
        URL: 'https://iam-nilanj0n.github.io/US-zip-code-search.github.io/'
    },
    {
        Pic: showMoreOrLess,
        projectName: 'Show more or less',
        URL: 'https://iam-nilanj0n.github.io/showMoreOrLess.github.io/'
    },
    {
        Pic: weightConverter,
        projectName: 'Weight Converter',
        URL: 'https://iam-nilanj0n.github.io/Weight-Converter-App/'
    },
    {
        Pic: jsLiveTime,
        projectName: 'Live Time',
        URL: 'https://iam-nilanj0n.github.io/Live-time-by-HTML-CSS-JS/'
    },
    {
        Pic: nameSeacrh,
        projectName: 'Country People Name Search',
        URL: 'https://iam-nilanj0n.github.io/Name-Seach-App/'
    },
    {
        Pic: jsSecondCounter,
        projectName: 'Second Counter',
        URL :'https://iam-nilanj0n.github.io/second-counter/'
    }
]

export default function HtmlCssJsExp() {
    return (
        <div className='HtmlCssJsExp'>
            {htmlCssJsExpArr.map((project, i) => {
                return (

                    <Card
                        key={`${i}${project.URL}`}
                        image={project.Pic}
                        ProjectName={project.projectName}
                        projectURL={project.URL}
                    />

                )
            })}
        </div>
    )
}
