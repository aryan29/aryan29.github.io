import React from 'react'
import './style.css';
const SKILLS_LIST = [
  {
    label: 'C++ 90%',
    percentage: '90%',
  },
  {
    label: 'Python / 80%',
    percentage: '80%',
  },
  {
    label: 'Flutter - 65%',
    percentage: '65%',
  },
  {
    label: 'HTML/CSS - 60%',
    percentage: '60%',
  },
  {
    label: 'ReactJS - 40%',
    percentage: '40%',
  },
  {
    label: 'Django/Flask - 85%',
    percentage: '85%',
  },
  {
    label: 'Java - 45%',
    percentage: '45%',
  },
];
console.log(SKILLS_LIST)
const ProgressLine = ({ label, percentage, barBg, progresBg, barHeight }) => {
    const [widths, setWidths] = React.useState(0);

    React.useEffect(() => {
        requestAnimationFrame(() => setWidths(percentage));
    }, [percentage]);

    return (
        <section className="progress-line">
            <span className="progress-line__label">{ label }</span>
            <div
                className="progress-line__outer"
                style={ {
                    background: barBg,
                    height: `${barHeight}px`,
                }}>
                <div
                    className="progress-line__inner"
                    style={ {
                        width: widths,
                        background: progresBg,
                        transition: 'width 2s',
                   } } />
            </div>
        </section>
    );
};

const Skills = ()=> (
  <section className="container">
     <div className="row">
        <div className="col-12 pt-5">
             <h1>Skills</h1>
           </div>
       </div>
    <div className="row" id="bars">
         <div className="col-12 py-5">
          {
              SKILLS_LIST.map((skill, index) => ( // index: static values
                  <ProgressLine
                      key={ index }
                      barHeight="15"
                      barBg="#b0daa0"
                      progresBg="green"
                      label={ skill.label }
                      percentage={ skill.percentage } />
              ))
           }
        </div>
      </div>
    </section>
);

export default Skills;
