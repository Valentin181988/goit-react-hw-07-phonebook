import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/filterSlice";
import { FilterLabel, FilterInput } from './Filter.styled';


export const Filter = () => {
    const filterValue = useSelector(state => state.filter.value);
    const dispatch = useDispatch();

    const changeSearchFilter = event => {
        dispatch(filter(event.currentTarget.value))
    };

    return(
        <>
            <FilterLabel>Find contacts by name</FilterLabel>
            <FilterInput
            type="text"
            value={filterValue}
            onChange={changeSearchFilter}></FilterInput>
        </>
    );
};

