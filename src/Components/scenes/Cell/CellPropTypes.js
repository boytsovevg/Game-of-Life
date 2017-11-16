import PropTypes from 'prop-types';

export default {
   cellClass: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   row: PropTypes.number.isRequired,
   col: PropTypes.number.isRequired,
   onSelectCell: PropTypes.func.isRequired
};
