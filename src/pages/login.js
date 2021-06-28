import React, {useEffect, useState} from 'react';
import Layout from '../components/layout/layout';
import * as styles from './styles/login.module.scss';
import { connect } from 'react-redux';
import Creators from '../state/AppRedux';
import { navigate } from 'gatsby';

const Login = (props) => {

    const formData = {
        email: '',
        password: ''
    };

    const [user, setuser] = useState(formData);

    const setInputField = (event) => {
        setuser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const saveData = (e) => {
        e.preventDefault();
        const data = {
            user
        };
        props.login(data);
    };

    useEffect(() => {
        if (props.user !== null) {
            navigate('/profile');
        }
    });

    useEffect(() => {
        if (props.error !== null) {
            props.removeErrors();
        }
        if (props.loading) {
            props.stopFetching();
        }
    },[]);

    return (
        <>
            <Layout>
                <div className={styles.loginBox}>
                    {
                        props.error &&
                            <p className={styles.error}>{props.error}</p>
                    }
                    <div className={styles.loginHeader}>
                        <h1>Log In</h1>
                    </div>
                    <div className={styles.loginBody}>
                        <form onSubmit={saveData} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>Email Address</label>
                                <input type="email" name="email" value={user.email} onChange={setInputField} className={styles.inputField} autoComplete="off" placeholder="Enter Email Address" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="password" className={styles.label}>Password</label>
                                <input type="password" name="password" onChange={setInputField} className={styles.inputField} autoComplete="off" placeholder="Enter Password" />
                            </div>
                            <div className={styles.formFooter}>
                                <input type="submit" value="Login" className={styles.btn} />
                                {
                                    props.loading && <span className={styles.loader}></span>
                                }
                            </div>
                        </form>
                        <p className={styles.text}><button className={styles.link}>Forgot Password?</button></p>
                    </div>
                </div>
            </Layout>
        </>
    )
}


export const mapStateToProps = (state) => {
    return {
        ...state,
        error: state.app.error,
        user: state.app.user,
        loading: state.app.loading
    }
};

export const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(Creators.login(data)),
    logout: () => dispatch(Creators.logout()),
    removeErrors: () => dispatch(Creators.removeErrors()),
    stopFetching: () => dispatch(Creators.stopFetching()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)