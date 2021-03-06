import React, { Component } from "react";
import YouTube from "react-youtube";
import { getRandomVideo } from "../services/services";

export default class VideoContainer extends Component {
    public state = { videoId: "" };
    public componentWillMount() {
        getRandomVideo()
        .then((resp) => {
            this.setState({ videoId: resp.data.id });
        })
        .catch((error) => {
            // console.log("Error while trying to get video ", error);
        });
    }
    public render() {
        return (
            <div className="App-header">
                <p>Here is a random youtube video!</p>
                <YouTube
                    videoId={this.state.videoId}
                />
            </div>
        );}
}
