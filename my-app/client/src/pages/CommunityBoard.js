import React from 'react'
import MarketplaceComponent from '../components/Marketplace';
import TechProvider from '../utils/TechContext';


const CommunityBoardPage = () => {
    return ( 
        <TechProvider>
          <MarketplaceComponent />
        </TechProvider>
      );
    }
    

export default CommunityBoardPage;