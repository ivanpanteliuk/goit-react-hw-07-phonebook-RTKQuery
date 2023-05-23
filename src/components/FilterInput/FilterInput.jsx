import { nanoid } from 'nanoid';
import { Input, Label } from './FilterInput.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

const FilterInput = () => {
  const dispatch = useDispatch();
  const filterInputId = nanoid();

  const onFilterChange = evt =>
    dispatch(setFilter(evt.currentTarget.value.trim()));

  return (
    <Label htmlFor={filterInputId}>
      Find contacts by name
      <Input id={filterInputId} type="text" onChange={onFilterChange} />
    </Label>
  );
};

export default FilterInput;
