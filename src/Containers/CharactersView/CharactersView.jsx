import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../Redux/Actions';
import NavButtons from '../NavButtons/NavButtons';
import List from '../List/List';

export default function CharactersView() {
  // const [page, setPage] = useState(1)

  const apiInfo = useSelector((state) => state.pageList.info);
  var { prev, next } = apiInfo ? apiInfo : { prev: null, next: null }; //ternario necesario porque sino hace el dispatch sin state y creashea.
  const dispatch = useDispatch();

  const handlerRequest = (name) => {
    let apiCall =
      name === 'Prev' && prev ? prev : name === 'Next' ? next : null;

    // setPage(apiCall)
    dispatch(getCharacters(apiCall));
  };

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <Fragment>
      <NavButtons handlerRequest={handlerRequest} />

      <List />

      <NavButtons handlerRequest={handlerRequest} />
    </Fragment>
  );
}
