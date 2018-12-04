import * as React from 'react';
import { Link } from 'react-router-dom';
import { SessionContext } from '../../common';


export const PageB = () =>
    <div>
        <SessionContext.Consumer>
            {
                ({ login }) => (
                    <>
                        <h2>Hello from pageB</h2>
                        <Link to="/">Navigate to Page A</Link>
                        <h3>{login}</h3>
                    </>
                )
            }
        </SessionContext.Consumer>
    </div>
