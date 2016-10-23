import {Component} from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';
import { connect } from 'react-redux';

import Take from './components/take';
import Storage from './components/storage';
import Tracking from './components/tracking';
import Notes from './components/notes';

class HarvestLogForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    console.log (this);
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
                <Field name="take" component={Take} />
                <Field name="storage" component={Storage} />
                <td>
                  <label>
                    <h5>Barcode #</h5>
                    <Field component="input" name="barcode" type="number" step="1" min="0" />
                  </label>
                </td>
                <Field name="notes" component={Notes} />
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
  initialValues: {barcode:10000},
})(HarvestLogForm);

//HarvestLogForm = connect()(HarvestLogForm);

export default HarvestLogForm;
