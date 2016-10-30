import {Component} from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';

//TODO: Get the column components to work with redux-form ... that will make things a bit cleaner
import submitForm from '../submit';

class HarvestLogForm extends Component {
  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <h1>Harvest Log Data</h1>
        <form onSubmit={handleSubmit}>
          <table className="log-table">
            <tbody>
              <tr>
                <th><h5>Take</h5></th>
                <th><h5>Storage</h5></th>
                <th><h5>Tracking</h5></th>
                <th><h5>Notes</h5></th>
              </tr>
              <tr>
                <td>
                  <label>
                    <h5>Quantity</h5>
                    <Field component="input" name="harvest-amount" type="number" step="1" min="0"/>
                  </label>
                  <label>
                    <h5>Units</h5>
                    <Field component="select" name="harvest-units">
                      <option>kg</option>
                    </Field>
                  </label>
                </td>
                <td>
                  <label>
                    <h5>Location</h5>
                    <Field component="select" name="harvest-storage-location" />
                  </label>
                </td>
                <td>
                  <label>
                    <h5>Barcode #</h5>
                    <Field component="input" name="barcode" type="number" step="1" min="0" />
                  </label>
                </td>
                <td>
                  <Field component="textarea" name="harvest-notes" />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="submit-log" type="submit">
            Log Data
          </button>
        </form>
      </div>
    );
  }
}

HarvestLogForm.propTypes = propTypes;

HarvestLogForm = reduxForm({
  form: 'harvest-log',
  //Just a test value for now
  initialValues: {barcode:10000},
  onSubmit:submitForm,
})(HarvestLogForm);

export default HarvestLogForm;
