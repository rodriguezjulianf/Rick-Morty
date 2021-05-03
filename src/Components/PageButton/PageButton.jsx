import React from 'react'
import styles from './PageButton.module.css'


export default function PageButton({handlerRequest, name}) {
    return (
        <div className={styles.button}>
            <input type="button" onClick={() => handlerRequest(name)} name={name} value={name.toUpperCase()} />
        </div>
    )
}
