import React from 'react'
import styles from './NavButtons.module.css'
import PageButton from '../../Components/PageButton/PageButton'

export default function NavButtons({handlerRequest, setPage}) {
    return (
        <div>
            <span className={styles.buttonContainer}>
                <PageButton handlerRequest={handlerRequest} setPage={setPage} name="Prev"/>
                <PageButton handlerRequest={handlerRequest} setPage={setPage} name="Next"/>
            </span>
        </div>
    )
}
