import { Input, Label } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value.trim()))}
      />
    </Label>
  );
};
