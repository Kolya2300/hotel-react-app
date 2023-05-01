import React from 'react';
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderContent from "./HeaderContent/HeaderContent";
import styles from './Header.modules.css'
import CounterPeople from "../CounterPeople/CounterPeople";
const Header = () => {
    return (
        <div>
            <div  className={styles.header}>
                <HeaderTop />
                <HeaderContent />
                <CounterPeople/>
            </div>
        </div>
    );
};

export default Header;
