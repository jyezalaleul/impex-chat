import React from 'react';
import "./Widgets.css";
import { TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
           <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
           </div>
         
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                
                <TwitterTweetEmbed tweetID={"1291342417367621632"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="jyezalaleul" options={{ height: 600 }} />
                <TwitterShareButton url={"https://www.linkedin.com/in/jonathan-yezalaleul-998396149/"} options={{ text: "#check out my linked in!", via: "jyezalaleul" }} />
            </div>
        </div>
    );
}

export default Widgets;
