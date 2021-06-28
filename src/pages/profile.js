import React, {useEffect, useState} from 'react';
import * as styles from './styles/profile.module.scss';
import Creators from '../state/AppRedux';
import { connect } from 'react-redux';
import Layout from '../components/layout/layout';
import { navigate } from 'gatsby';

const Profile = (props) => {

    const [user, setUser] = useState({
        name: ''
    });
    const logout = () => {
        props.logout();
        navigate('/login');
    };
    useEffect(() => {
        if (props.user !== null) {
            setUser(props.user);
        } else {
            navigate('/login');
        }
    },[]);

    return (
        <>
            <Layout>
                <div className={styles.profile}>
                    <h1 className={styles.bigTitle}>Hi {user.name}</h1>
                    <h4 className={styles.smallTitle}>Welcome to the React Boiler Plate</h4>
                    <p className={styles.text}><button className={styles.link} onClick={logout}>Logout</button></p>
                </div>
            </Layout>
        </>
    );
};

export const mapStateToProps = (state) => {
    return {
        ...state,
        user: state.app.user
    };
};

export const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(Creators.logout()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)