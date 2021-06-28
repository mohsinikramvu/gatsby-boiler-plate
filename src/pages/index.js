import React, {useEffect, useState} from 'react';

import * as styles from './styles/index.module.scss';
import logo from '../images/logo.svg';
import Layout from '../components/layout/layout';
import { navigate } from 'gatsby';

const Index = () => {

    useEffect(() => {

        const interval = setTimeout(() => {
            navigate('/login');
        },2000);

        return () => {
            clearInterval(interval);
        };

    },[]);

    return (
        <>
            <Layout>
                <header>
                    <div className={styles.ldsFacebook}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </header>
            </Layout>
        </>
    )
}

export default Index;