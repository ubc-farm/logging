import PropTypes from 'react';
const Tracking = ({input}) => {
  console.log(name);
  console.log(input);

  //let barcode = value;
  return (
    <td>
      <label>
        <h5>Barcode #</h5>
        <input name={name} type="number" step="1" min="0" />
      </label>
    </td>
  );
}

/*Tracking.propTypes = {
	input: PropTypes.shape({
		value: PropTypes.object,
		name: PropTypes.string,
	}).isRequired,
};*/

export default Tracking;
