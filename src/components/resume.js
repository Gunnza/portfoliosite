import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={require('../images/profilepic.jpg')}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Christopher McGovern</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I have developed a strong technical ability during my Degree. I started learning programming with Java and have completed modules in Object Orientated Programming and Algorithms and Data Structures. Many modules required me to have a good understanding of programming including mobile app development and games development.
My degree has also helped me develop strong project management and presentation skills as I have completed many projects throughout the years solo and with a team. Pitching projects to the class was also an important part of some modules.
I would relish the opportunity to work with a team on software projects were I will utilise these skills and develop them more.
</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>25 Woodbank Road, Arvalee, Omagh</p>
            <h5>Email</h5>
            <p>mcgovern-c4@ulster.ac.uk</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2011}
              endYear={2018}
              schoolName="Ulster University, Magee Campus"
              schoolDescription="Award: Bachelor of Engineering with Honours in Computer Games Development"

               />

               <Education
                 startYear={2007}
                 endYear={2011}
                 schoolName="Other Qualifications"
                 schoolDescription="Double Award A Level Information Communication Technology       Grade: BC Linked BTEC National Award Games Development                              Grade: Distinction "
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Work Experience</h2>


              <Experience
                startYear={2013}
                endYear={2014}
                jobName="Student Placement Unpaid - Uproar Comics"
                jobDescription="My role at Uproar Comics was to help complete mini-games for the digital comics. One project was to develop a 2D Space-Shooter. Another Student and I worked together to create the game, researching online for help creating certain mechanics or getting help from the other experienced developers. We completed the mini-game that was added to a chapter of the digital comic. This experience enhanced my skills in Object orientated Programming, C# and Project Management. "
                />

                <Experience
                  startYear={2017}
                  endYear={2019}
                  jobName="Dominos Delivery Driver"
                  jobDescription="In Dominos I was to deliver food orders to customer’s houses. Customer Service skills were important so that when I needed to call a customer I was able to communicate effectively to find their house ASAP.
     "
                  />

              <hr style={{borderTop: '3px solid #e22947'}} />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
