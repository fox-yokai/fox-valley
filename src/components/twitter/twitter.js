import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

class Twitter extends React.Component {
    render() {
        return (
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="f0xvalley"
            options={{height: 400}}
          />
        )
    }
}

export default Twitter;