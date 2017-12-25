import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import { browserHistory } from 'react-router';

class DiscussionProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      host: 'waiting...', 
      image: 'http://support.cashbackcloud.co/wp-content/uploads/2017/01/add-on-force-pending-referrals.png',
      description: 'waiting...',
      }
    }

    componentWillMount(){
      axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/conversations${this.props.location.search}`)
        .then((response) => 
          this.setState({host: response.data.host,
            image: response.data.image,
            description: response.data.description
          }))
        .catch(function (error) {
          console.log(error)
        })
    }


  render() {
    return (
      <Card>
      <CardHeader
        title={this.state.host}
        subtitle={this.state.description}
        avatar={this.state.image}
      />
      <CardMedia
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
      >
        <img src={this.state.image} alt="" />
      </CardMedia>
      <CardTitle title={this.state.host} subtitle="Card subtitle" />
      <CardText>
        {this.state.description}
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  );
}

}

export default DiscussionProfile;