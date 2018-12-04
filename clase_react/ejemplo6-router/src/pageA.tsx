import * as React from 'react';
import { Link } from 'react-router-dom';

export const PageA = () =>
    <div>
        <h2>Hello from pageA</h2>
        <Link to="/PageB">Navigate to Page B</Link>
    </div>