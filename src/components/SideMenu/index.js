import React, { Component } from 'react'
import styles from './styles.css'
import {HOME, ANALYTICS, SETTINGS, UNIT} from '../../svg/icons.js'

class SideMenu extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return (
                <div className={styles.menuWrap}>
                    <div className={styles.profileHeader}>
                        <span className={styles.circle}>
                            <span className={styles.unitContainer}>{UNIT}</span>
                        </span>
                        <span className={styles.accountName}>{this.props.accountName}</span>
                    </div>
                    <nav className={styles.itemList}>
                        <a className={styles.item}>
                            <span className={styles.iconContainer}>{HOME}</span>
                            <span className={styles.tabText}>Home</span>
                        </a>
                        <a className={styles.item}>
                            <span className={styles.iconContainer}>{ANALYTICS}</span>
                            <span className={styles.tabText}>Analytics</span>
                        </a>
                        <a className={styles.item}>
                            <span className={styles.iconContainer}>{SETTINGS}</span>
                            <span className={styles.tabText}>Settings</span>
                        </a>
                    </nav>
                </div>
        )
    }
}

export default SideMenu