import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { getRandomVideo } from '../services/services';

export default class VideoContainer extends Component {
    state = { videoId: "" };
    componentWillMount() {
        getRandomVideo()
        .then((resp) => {
            this.setState({ videoId: resp.data.id });
        })
        .catch((error) => {
            console.log('Error while trying to get video ', error);
        })
    }
    render() {
        return (
            <div className="App-header">
                <YouTube
                    videoId={this.state.videoId}
                />
            </div>
        )};
}
