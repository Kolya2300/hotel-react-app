import React from 'react';
import styles from  './HeaderTop.module.css'
import Navbar from '../../../../../Router/Navbar'
import LoginButton from "./LoginButton/LoginButton";
import Profile from './LoginButton/Profile';

import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../../../../context/AuthContext';
const HeaderTop = () => {
    const {user} = UserAuth()
    if(user){
        return (
            <div>
                <div className={styles.header__top}>
                    <div></div>
                    <Navbar className="menu__list_item"/>
                    <Profile />
                </div>
            </div>
        );
    }
    if(!user){
        return (
            <div>
                <div className={styles.header__top}>
                    <div></div>
                    <Navbar className="menu__list_item"/>
                    <LoginButton />
                </div>
            </div>
        );
    }
    
};

export default HeaderTop;