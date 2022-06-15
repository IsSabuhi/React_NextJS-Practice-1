import React, { Children, ReactElement } from 'react';
import { Container } from '@mui/material';
import Navbar from '../components/Navbar';

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
        </>
    );
};

export default MainLayout;