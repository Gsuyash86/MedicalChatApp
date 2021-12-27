import React from "react";
import { StreamChat } from "stream-chat";
import { ChannelList, Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import {
  ChannelContainer,
  ChannelListContainer,
  Auth,
} from "./components/index";

import "./App.css";

const apiKey = process.env.REACT_APP_STREAM_API_KEY;

const client = StreamChat.getInstance(apiKey);

const authToken = false;

console.log(client);

const App = () => {
  if (!authToken) return <Auth />;

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
