import React from 'react';
import './ReactJsExp.css';
import Card from '../assignmentCard/Card';
// importing pics from assets
import stopwatch from '../../../assets/React-Stopwatch.png';
import QuizApp from '../../../assets/quiz-App.png';
import formHandling from '../../../assets/Form-handling.png';
import themeToggler from '../../../assets/Theme toggler.png';


const reactJsExpArr = [
    {
        Pic: stopwatch,
        projectName: 'Stop Watch',
        URL: 'https://iam-nilanj0n.github.io/react-basic-stopwatch.github.io/'
    },
    {
        Pic: QuizApp,
        projectName: 'Quiz App',
        URL: 'https://iam-nilanj0n.github.io/react-quiz-app.github.io/'
    },
    {
        Pic: formHandling,
        projectName: 'Basic Form Handing',
        URL: 'https://iam-nilanj0n.github.io/react-basic-form.github.io/'
    },
    {
        Pic: themeToggler,
        projectName: 'Theme Toggler',
        URL: 'https://iam-nilanj0n.github.io/react-theme-toggler.github.io/'
    },

]

export default function ReactJsExp() {
  return (
    <div className='ReactJsExp'>
        {reactJsExpArr.map((project, i) => {
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
