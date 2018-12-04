import * as React from 'react';
import { Link } from 'react-router-dom';

export const PageB = () =>
    <div>
        <h2>Hello from pageB</h2>
        <Link to="/">Navigate to Page A</Link>
    </div>