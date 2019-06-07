import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static.wixstatic.com/media/0f442e_71e685b0fa7f4b90bdb3e0e7927e0177.png/v1/fill/w_954,h_714,al_c,q_85,usm_0.66_1.00_0.01/0f442e_71e685b0fa7f4b90bdb3e0e7927e0177.webp) center / cover' }} >Don't Feed the Fish</CardTitle>
            <CardText>
              University Project developed in Unity with C#. The player must circle the big fish to stay alive.
            </CardText>
            <CardActions border>
              <Button href = "https://github.com/Gunnza/Don-t-Feed-The-Fish-Game" target="_blank"  colored>GitHub</Button>
              <Button href = "https://play.google.com/store/apps/details?id=com.GunzaGaming.CircleJump" target="_blank"  colored>Google Play Store</Button>

            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static.wixstatic.com/media/0f442e_0dcb32c81bba45ce8b3951ba61c3e1f6.png/v1/fill/w_614,h_614,al_c,lg_1,q_85/0f442e_0dcb32c81bba45ce8b3951ba61c3e1f6.webp) center / cover' }} >Office Escape</CardTitle>
            <CardText>
              University Project developed in Unity with C#. This is a top down sneaking game where the player must sneak through the office
            </CardText>
            <CardActions border>
              <Button href = "https://github.com/Gunnza/TopDown-2D-Stealth-Game" target="_blank"  colored>GitHub</Button>
              <Button href = "https://github.com/Gunnza/TopDown-2D-Stealth-Game" target="_blank" colored>Youtube Video</Button>

            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/en/0/0a/Flappy_Bird_icon.png) center / cover' }} >Flappy Bird Clone</CardTitle>
            <CardText>
            Decided to code the mechanics of Flappy Bird when it was popular
            </CardText>
            <CardActions border>
              <Button href = "https://github.com/Gunnza/Flappy-Bird" target="_blank"  colored>GitHub</Button>

            </CardActions>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://lh3.googleusercontent.com/EK8Ek3ft2U_t0ADX5iC49QDCM96ovuohUKlfbk-9Fdqd6bTeY38BPm7WLh87CdadWDw=s180-rw) center / cover' }} >Golf Blocks</CardTitle>
            <CardText>
            Project at University to design & develop a golf game with your own creative spin then upload to the google play store
            </CardText>
            <CardActions border>
              <Button href = "https://play.google.com/store/apps/details?id=com.GunnzaGaming.GolfBlocks" target="_blank"  colored>Google Play Store</Button>
            </CardActions>
          </Card>




        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.oceanwp.org/wp-content/uploads/2017/07/portfolio-image.png) center / cover' }} ></CardTitle>
            <CardText>
              Old Portfolio Website created with Html, CSS and Javascript
            </CardText>
            <CardActions border>
              <Button href = "https://github.com/Gunnza/Gunnza.github.io" target="_blank"  colored>GitHub</Button>

            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://simpleicon.com/wp-content/uploads/responsive-design.png) center / cover' }} ></CardTitle>
            <CardText>
              Testing CSS ability with this responsive web page
            </CardText>
            <CardActions border>
              <Button href = "https://github.com/Gunnza/ResponsiveWebPage" target="_blank"  colored>GitHub</Button>

            </CardActions>
          </Card>

          </div>
      )
    }
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Games</Tab>
          <Tab>Websites</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
