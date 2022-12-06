import { useDispatch, useSelector } from 'react-redux';

import { filter } from 'redux/filterSlice';

import { Wrapper, Input, Label } from './Filter.styled';
const Filter = () => {
  const dipatch = useDispatch();
  const storeFilter = useSelector(state => state.filter);

  const onChangeFilter = event => {
    dipatch(filter(event.currentTarget.value));
  };

  return (
    <Wrapper>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        value={storeFilter}
        onChange={onChangeFilter}
        id="filter"
      />
    </Wrapper>
  );
};
export default Filter;
