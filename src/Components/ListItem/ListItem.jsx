import React from 'react'
import styles from './ListItem.module.css'
export default function ListItem(props) {
    return (
        <div className={styles.fakeLi}>
            <img className={styles.avatar} src={props.image} alt={props.name}/>
            <div className={styles.name}>
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}
