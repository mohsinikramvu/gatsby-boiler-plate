import React from 'react';
import * as styles from './layout.module.scss';

const Layout = ({ children }) => {
    return (
        <>
            <div className={styles.app}>
                { children }
            </div>
        </>
    )
};

export default Layout;