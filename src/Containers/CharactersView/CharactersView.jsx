import React, {Fragment, useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getCharacters} from '../../Redux/Actions'
import NavButtons from '../NavButtons/NavButtons'
import List from '../List/List'


export default function CharactersView() {
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()

    const handlerRequest =  (name) => {
        const button = name
        let newPage = button === "Prev" && page > 1 ?  page-1 : button === 'Next' ? page+1 : page
        
        setPage(newPage)
        dispatch(getCharacters(newPage))
    }

    useEffect(()=> {dispatch(getCharacters())}, [])

    return (
        <Fragment>
            <NavButtons handlerRequest={handlerRequest} setPage={setPage}/>

            <List />

            <NavButtons handlerRequest={handlerRequest}/>
        </Fragment>
    )
}



