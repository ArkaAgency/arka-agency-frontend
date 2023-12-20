import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <h1 className={'text-2xl font-mona font-bold'}>Hello, World!</h1>
        </ThemeProvider>
    </React.StrictMode>
);