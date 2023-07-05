import "./App.css";
import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import ChatsPage from "./pages/ChatsPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CommunityBoardPage from "./pages/CommunityBoard";

import Nav from './components/Nav';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return (
      // <ApolloProvider client={client}>
        <Router>
          <div>
            
              <Nav />
              <Routes>
                <Route 
                  path="/" 
                  element={<HomePage />} 
                />
                <Route 
                  path="/chats" 
                  element={<ChatsPage user={user} />} 
                />
                <Route 
                  path="/profile" 
                  element={<ProfilePage />} 
                />
                <Route 
                  path="/community" 
                  element={<CommunityBoardPage />} 
                />
              </Routes>
            
          </div>
        </Router>

       
     
    );

    // return <HomePage/>
    // (
    //   <div className="App">
    //     <HomePage/>
    //   </div>
    // );
    // return <ChatsPage user={user} />;
  }
}

export default App;
