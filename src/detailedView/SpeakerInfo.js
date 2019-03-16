import React, { Component } from "react";

class SpeakerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }

  render() {
    if(this.props.detailedData.speakers === undefined){
      return null;
    }
    return (
      <>
        {this.props.speaker.map(speaker => {
          return (
            <div key={speaker.name}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={`https://sleepingpill.javazone.no/public/picture/${
                        speaker.data.pictureId.value
                      }`}
                      alt="Speaker"
                    />
                    <h3>{speaker.name}</h3>
                    <h4>{speaker.email}</h4>
                    <h4>
                      <i>{speaker.data.twitter.value}</i>
                    </h4>
                  </div>
                  <div className="col-md-7" style={{ "text-align": "left" }}>
                    <p>{speaker.data.bio.value}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}


export default SpeakerInfo;



