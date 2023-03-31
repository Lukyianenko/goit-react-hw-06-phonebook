import { LabelFilt } from './BookContacts.styled';
import { useSelector, useDispatch } from "react-redux/es/exports";
import { onFilter } from '../../redux/contactsState';

export const Filter = () => {
    const value = useSelector(state => state.contact.filter);
    const dispatch = useDispatch();

    return(
        <LabelFilt>
            Find contacts by name
            <input type="text" name='filtr' value={value} onChange={(e) => dispatch(onFilter(e.target.value))} />
        </LabelFilt>
    )
        
   }

