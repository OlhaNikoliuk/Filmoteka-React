import PropTypes from 'prop-types';
import { Form, SearchFormBtn, SearchFormInput } from './SearchForm.styled';
import { BsSearch } from 'react-icons/bs';

export function SearchForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const query = e.target.elements.movie.value;
    if (query.trim() === '') {
      return;
    }
    onSubmit(query);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
      <SearchFormBtn type='submit'>
          <BsSearch size='20' />{' '}
        </SearchFormBtn>
        <SearchFormInput
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search film'
          name='movie'
        ></SearchFormInput>
        
      </Form>
    </>
  );
}

SearchForm.propTypes = {
  handleSubmit: PropTypes.node,
};
