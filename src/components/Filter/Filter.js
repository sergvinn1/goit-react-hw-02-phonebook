import PropTypes from 'prop-types';
import s from './Filter.module.scss';

function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
