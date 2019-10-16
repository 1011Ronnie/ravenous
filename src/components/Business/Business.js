import React from "react";
import "./Business.css";


class Business extends React.Component {
  openBusinessSite (url) {
    window.open(url);
  }

  openMaps (address, city) {
    const encodingAddress = address.replace(/ /g, '+').replace(/'/g, '%27').replace(/-/g, '%2D');
    const googlePlate = 'https://www.google.com/maps/search/?api=1&query=';
    window.open(googlePlate + `${city}+` + encodingAddress);
  }

  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.imageSrc}
               alt=""
               onClick={() => this.openBusinessSite(this.props.business.url)}
               />
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address"
               onClick={() => this.openMaps(this.props.business.address, this.props.business.city)}
               >
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{`${this.props.business.state} ${
              this.props.business.zipCode
            }`}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${this.props.business.rating} stars`}</h3>
            <p>{`${this.props.business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
