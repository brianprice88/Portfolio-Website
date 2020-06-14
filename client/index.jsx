import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import Site from './components/site.jsx';

ReactDOM.render(
    <Suspense fallback={<div id='loading'></div>}>
        <BrowserRouter>
            <Site />
        </BrowserRouter>
    </Suspense>,
    document.getElementById('site'))