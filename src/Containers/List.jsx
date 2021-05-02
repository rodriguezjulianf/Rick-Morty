import React,{Fragment, useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getCharacters, getDetail} from '../Redux/Actions'

function List(props) {
    const [page, setPage] = useState(1)

    const updatePage = (boton) => {
        let newPage = boton === "prev" && page > 1 ?  page-1 : boton === 'next' ? page+1 : 1

        setPage(newPage)
    }

    const handleLlamar = async (event) => {
        const boton = event.target.name
        
        await updatePage(boton)

        props.getCharacters(page)
    }
    useEffect(()=>{},
    )

    return (
        <Fragment>
            <div>
                <h1>Rick & Morty</h1>
                <ul>
                    { props.pageList[0] && props.pageList.map(character => <li key={character.id}>{character.name}</li>)}
                </ul>
                <span>
                <button onClick={handleLlamar} name="prev">PREV</button>
                <button onClick={handleLlamar} name="call">Llamar</button>
                <button onClick={handleLlamar} name="next">NEXT</button>
                </span>
            </div>
        </Fragment>
    )
}

function mapStateToProps(state){
    return{
        pageList: state.pageList
    }
}

function mapDispatchToProps(dispatch){
    return{
        getCharacters: (page) => dispatch(getCharacters(page)),
        getDetail: (id) => dispatch(getDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)