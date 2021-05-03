import React,{Fragment} from 'react'
import {connect} from 'react-redux'
import {getDetail} from '../../Redux/Actions'
import styles from './styles.module.css'
import ListItem from '../../Components/ListItem/ListItem'



function List(props) {
    const {info, results} = props.pageList
    return (
        <Fragment>
            <div>
                <ul>
                    { results && results.map(character => 
                        <ListItem 
                            key={character.id} 
                            name={character.name} 
                            image={character.image}
                        />)}
                </ul>
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
        getDetail: (id) => dispatch(getDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)