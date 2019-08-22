import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>

            </div>

            <h2 style={{paddingTop: '2em'}}>Christopher McGovern</h2>
            <h4 style={{color: 'grey'}}>Graduate Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Games Development Graduate ready for an entry-level role in Software Development who enjoys working with a team and is passionate about learning new technologies, building projects and solving problems. Capable of writing, testing and debugging code within an Agile environment and also have knowledge of Object-Oriented -Programming. I am eager for the opportunity to continue learning and to grow my career.
</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>25 Woodbank Road, Arvalee, Omagh</p>
            <h5>Email</h5>
            <p>mcgovern-c4@ulster.ac.uk</p>
            <h5>Web</h5>
            <p>https://gunnza.github.io/portfoliosite/#/</p>
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
                jobName="Games Developer - Uproar Comics"
                jobDescription="My role at Uproar Comics was to help complete mini-games for the digital comics. One project was to develop a 2D Space-Shooter. Another Colleague and I worked together to create the game, researching online for help creating certain mechanics or getting help from the other experienced developers. We completed the mini-game that was added to a chapter of the digital comic. This experience enhanced my skills in Object orientated Programming, C# and Project Management. "
                />

              <Experience
                startYear={2019}
                endYear={"Now"}
                jobName="Omniplex Cinema Staff"
                jobDescription="Serving Customers during busy periods when films are starting and cleaning the cinema studios when they are ready"

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
