import React from 'react';

import PropTypes from "prop-types";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { formatAddress } from '../helpers/formatAddress';

import { withTranslation } from 'react-i18next';

const styles = {
	cardHeader: {
		backgroundColor: 'rgba(0,0,0,0.03', 
		paddingTop: '0.75rem', 
		paddingBottom: '0.75rem', 
		paddingLeft: '1.25rem',
		paddingRight: '1.25rem',
		borderBottom: '1px solid rgba(0,0,0,0.13)'
	}
}

class Resource extends React.Component {

  constructor(props) {
    super(props);
  }

  callNumber = (number) => {
  	window.open(`tel:${number}`);
  };

  openLink = (link) => {
  	window.open(link, "_blank");
  };

  renderDescription = (text) => {
    return (
      <div style={{marginBottom: 12}}>
        {text.split('\n').map ((item, i) => <p style={{marginBottom: 0}} key={i}>{item}</p>)}
      </div>
    )
  }

  render() {
  	const { t, resource } = this.props;
  	const formattedAddress = formatAddress(resource.address, this.props.locale);
    return (
      <Card style={this.props.style}>
      	<div className="d-flex flex-row align-items-center justify-content-between" style={styles.cardHeader}>
      		<h5 style={{marginBottom: 0, lineHeight: undefined}}>{typeof resource.name === "string" ? resource.name : resource.name[this.props.locale]}</h5>
      		{resource.number && (<Button onClick={this.callNumber.bind(this, resource.number)} style={{alignSelf: "flex-end", marginLeft: 12}}>{resource.number}</Button>)}
      	</div>
      	<Card.Body>
      		<p>
      			<FontAwesomeIcon style={{marginRight: 10}} icon={faLocationArrow}/>
      			{typeof resource.city === "string" ? resource.city : resource.city[this.props.locale]}
      			{formattedAddress && (
      				` - ${formattedAddress}`
      			)}
      		</p>
      		<hr/>
      		<Card.Title style={{textTransform: "capitalize"}}>{t(`subCategory.${resource.subCategory}`)}</Card.Title>
      		{resource.description && this.renderDescription(resource.description[this.props.locale || "en"])}
      		{resource.organisers && resource.organisers.length > 0 && (
      			resource.organisers.map((organiser, index) => {
      				return (
      					<p key={index} style={{marginBottom: 0}}>
      						{organiser.name}
      						{organiser.role && ` - ${organiser.role[this.props.locale || "en"]}`}
      						{organiser.number && (
      							<span style={{fontWeight: '700'}}>: {'    ' + organiser.number}</span>
      						)}
      					</p>
      				)
      			})
      		)}
      		<div style={{marginTop: 12}}>
      		{resource.links && resource.links.length > 0 && (
      			resource.links.map((link, index) => {
      				return (
                <>
      					 <Button style={{marginBottom: 6}} key={index} onClick={this.openLink.bind(this, link.url)} variant={"secondary"}>{link.title[this.props.locale || "en"]}</Button>{'  '}
                </>
      				)
      			})
      		)}
      		</div>
      	</Card.Body>
      </Card>
    )
  }
}

Resource.defaultProps = {

}

Resource.propTypes = {
  resource: PropTypes.any,
  locale: PropTypes.string
}

export default withTranslation()(Resource);
