import React from 'react';
import './style.css';
import EventDescriptionCard from './../EventDescriptionCard';
import EventTimePlace from './../EventTimePlace';
import EventDecision from './../EventDecision';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

class FeedCard extends React.Component{
	render(){
		const { clubImage, postTime, postClubName, postContent} = this.props;

		let dateSplit = postTime.split(' ')
		let date = dateSplit[0] + ' ' + dateSplit[1] + ' ' + dateSplit[2] + ' ' + dateSplit[3] + ' ' + dateSplit[4]

		return(
			<div id='feedCardMainDiv'>
				<div id='clubProfileImgContainer'>
					<img id='clubImage' src={clubImage} alt='Failed to load image'></img>
				</div>
				<div id='headerContainer'>
					<h2 id='clubName'>{postClubName}</h2>
					<h6 id='postDate'>{date}</h6>
				</div>
				<br/>
				<div id='postContentContainer'>
					<p id='postText'>{postContent}</p>
				</div>
			</div>

		)
	}


}

export default FeedCard;
/*
render(){
	const { posterPic, eventTime, eventPlace, eventTitle, eventDetail, eventClubName } = this.props;
	return (
<div className='feedcard'>
<Container id='primaryContainer'>
<Jumbotron>
		<Row>
		</Row>
		<Row>
			<Col className='eventPosterContainer' xs={6} md={4} xl={4}>
				<Image className='eventPoster' src={posterPic} fluid thumbnail alt='no pic'/>
			</Col>
			<Col>
				<Container>
					<Row>
						<Col>
							<EventDescriptionCard title={eventTitle} detail={eventDetail} clubName={eventClubName}>
							</EventDescriptionCard>
						</Col>
					</Row>
					<Row>
						<Col>
							<EventTimePlace eventTime={eventTime} eventPlace={eventPlace}>
							</EventTimePlace>
						</Col>
					</Row>

				</Container>
			</Col>
		</Row>
	</Jumbotron>
</Container>
</div>);
	}*/
