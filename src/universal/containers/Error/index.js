import React from 'react'
import is from 'react-jss'

import styles from './styles'
import { Route } from 'react-router';

const Status = ({ code, children }) => (
    <Route
        render={({ staticContext }) => {
            if (staticContext) staticContext.status = code;
            return children;
        }}
    />
)

const ErrorScreen = ({
    classes,
}) => (
    <Status code={404}>
        <div className={classes.error}>
            <div className="container">
                <div className="row tac">
                    <div className="col-xs-12">
                        <h1 className={classes.title}>Oops, nothing to see here...</h1>
                        <p>No, really, absolutely nothing!</p>
                    </div>
                </div>
            </div>
        </div>
    </Status>
)

export default is(styles)(ErrorScreen)
