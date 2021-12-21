import React, { useState, useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../components/chatFeed';
import LoginForm from '../components/loginForm';

const projectID = '961dcab5-27b6-4270-b141-698aaf5a5afd';

const App = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");

    useEffect(() => {
        setUsername(localStorage.username)
        setPassword(localStorage.password);
    },[])

    if (!username) return <LoginForm />;
  return (
      <ChatEngine
          height="100vh"
          projectID={projectID}
          userName={username}
          userSecret={password}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
  );
};

// infinite scroll, logout, more customizations...

export default App;