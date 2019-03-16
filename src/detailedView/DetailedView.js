import React, { Component } from "react";

class DetailedView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detailedData: []
    };
    this.getDetailedData = this.getDetailedData.bind(this);
  }

  componentDidMount() {
    this.getDetailedData();
  }

  getDetailedData() {
    this.setState({ isFetching: true });
    fetch(
      `https://sleepingpill.javazone.no/data/session/31d7e476662f48f8bcdfcac88d9ff742`,
      {
        method: "GET",
        headers: new Headers({
          Authorization: "Basic " + btoa(`user:password`),
          "Content-Type": "application/x-www-form-urlencoded"
        })
      }
    )
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        this.setState({ detailedData: json });
        console.log(json);
      })
      .catch(error => {
        throw Error(error);
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  render() {
    if (this.state.detailedData.speakers === undefined) {
      return null;
    }
    return (
      <>
        <h1>{this.state.detailedData.data.title.value}</h1>
        <hr />
        {this.state.detailedData.speakers.map(speaker => {
          return (
            <div key={speaker.name}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={`https://sleepingpill.javazone.no/public/picture/${
                        speaker.data.pictureId.value
                      }`
                      }
                      alt="Image of speaker"
                    />
                    <h3>{speaker.name}</h3>
                    <h4>{speaker.email}</h4>
                    <h4>
                      <i>{speaker.data.twitter.value}</i>
                    </h4>
                  </div>
                  <div className="col-md-7" style={{"text-align":"left"}}>
                    <p>{speaker.data.bio.value}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <b>Tags: </b>
        {this.state.detailedData.data.tags.value.map(tag =>{
          return(
            <>
              <i>{tag} </i>
            </>
          )
        })
        }
        <input type="text" placeholder="add tag"/>

        <hr />

        <b>Keyword: </b>
        {this.state.detailedData.data.keywords.value.map(keyword =>{
          return(
            <>
              <i>{keyword} </i>
            </>
          )
        })
        }

        <p>
          <b>level: </b>{this.state.detailedData.data.level.value}
          |<b> length: </b>{this.state.detailedData.data.length.value}
          |<b> format: </b>{this.state.detailedData.data.format.value}
          |<b> language: </b>{this.state.detailedData.data.language.value}
          |<b>equipment: </b>{this.state.detailedData.data.equipment.value}</p>
        <p><b>abstract: </b>{this.state.detailedData.data.abstract.value}</p>
        <p><b>video: </b>{this.state.detailedData.data.video.value}</p>
        <p><b>speakernoteUrl: </b>{this.state.detailedData.data.speakernoteUrl.value}</p>
        <p><b>room: </b>{this.state.detailedData.data.speakernoteUrl.value}</p>
        <p><b>outline: </b>{this.state.detailedData.data.outline.value}</p>
        <p><b>suggestedKeywords: </b>{this.state.detailedData.data.suggestedKeywords.value}</p>
        <p><b>infoToProgramCommittee: </b>{this.state.detailedData.data.infoToProgramCommittee.value}</p>
        <p><b>startTime: </b>{this.state.detailedData.data.startTime.value}</p>
        <p><b>endTime: </b>{this.state.detailedData.data.endTime.value}</p>

        {this.state.detailedData.data.pkomfeedbacks.value.map(pkom =>{
          return(
            <>
              <b>{pkom.author} </b>
              <br/>
              <i>{pkom.created} </i>
              <i>{pkom.feedbacktype} </i>
              <p>{pkom.info} </p>
            </>
          )
        })
        }

        <div className="container">
          <div className="row">
            <div />
          </div>
        </div>
      </>
    );
  }
}

export default DetailedView;
