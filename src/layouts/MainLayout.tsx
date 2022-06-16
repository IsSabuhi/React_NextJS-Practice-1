import React, { Children, ReactElement } from 'react';
import Navbar from '../components/Navbar';
import Player from '../components/Player';

interface MainLayoutProps {
    children: ReactElement
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return (
        <>
            <Navbar/>
            <div style={{margin: '90px 0px'}}>
                {children}
            </div>
            <Player/>
        </>
    );
};

export default MainLayout;