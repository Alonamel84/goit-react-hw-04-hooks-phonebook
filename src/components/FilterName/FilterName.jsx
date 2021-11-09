import s from '../FilterName/FilterName.module.css'
import PropTypes from 'prop-types';
const FilterName = ({ value, onChange }) => {
    return(
        <>
            <label className={ s.label}>
          Find contacts by name
                <input name='filter'
            type="text"
            placeholder="Enter name"
            value={value}
             onChange={onChange}
                    
          />
    </label >
         
   </>
    )
};
FilterName.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default FilterName;