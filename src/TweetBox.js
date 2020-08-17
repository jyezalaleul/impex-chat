import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
        
        db.collection('posts').add({
            displayName: "Jonathan Yezalaleul",
            username: "jyezalaleul",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://media-exp1.licdn.com/dms/image/C5603AQH6LwXJZX7QkA/profile-displayphoto-shrink_100_100/0?e=1602115200&v=beta&t=oPiOhbskFPeOZXmvJDuPTaUtaE9FGEDT2EOKbS6nDU4"
        });
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input"> 
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQH6LwXJZX7QkA/profile-displayphoto-shrink_100_100/0?e=1602115200&v=beta&t=oPiOhbskFPeOZXmvJDuPTaUtaE9FGEDT2EOKbS6nDU4" />
                    <input
                    onChange={(e) => setTweetMessage(e.target.value)} 
                        value={tweetMessage} 
                        placeholder="What's happening?" 
                        type="text" 
                    />
                </div>
                <input 
                onChange={(e) => setTweetImage(e.target.value)} 
                    value={tweetImage} 
                    className="tweetBox__imageInput" 
                    placeholder="Optional: Enter image URL" 
                    type="text" 
                />
                
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
