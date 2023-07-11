import "./App.css";
import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import ChatsPage from "./pages/ChatsPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CommunityBoardPage from "./pages/CommunityBoard";
import Nav from './components/Nav';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const [user, setUser] = useState(null);

  const handleAuth = (userData) => {
    setUser(userData);
  };

  if (!user) {
    return <AuthPage onAuth={handleAuth} />;
  } else {
    return (
       <ApolloProvider client={client}>
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
              element={<ProfilePage username={user.username} />} 
                />
                <Route 
                  path="/community" 
                  element={<CommunityBoardPage />} 
                />
              </Routes>
            
          </div>
        </Router>
      </ApolloProvider>
       
     
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
