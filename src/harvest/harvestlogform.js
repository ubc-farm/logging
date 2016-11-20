import {Component} from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';
import locations from '../fetch.js';

//TODO: Get the column components to work with redux-form ... that will make things a bit cleaner
//than having all the columns implemented in this component, as is done now
import submitForm from '../submit';

class HarvestLogForm extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  componentWillMount(){
    locations().then(locations => {
      var locs = [];
      for (var location in locations) {
        if (locations.hasOwnProperty(location)) {
          locs.push(locations[location]);
        }
      }
    this.setState({locations:locs})
    });
  }
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
                    <Field component="input" name="quantity" type="number" step="0.01" min="0"/>
                  </label>
                  <label>
                    <h5>Units</h5>
                    <Field component="select" name="units">
                      <option>kg</option>
                    </Field>
                  </label>
                </td>
                <td>
                  <label>
                    <h5>Location</h5>
                    <Field component="select" name="locationId">
                      {this.state.locations?
                        this.state.locations.map(location =>
                          <option value={location.id} key={location.id}>{location.name}</option>):<option />
                      }
                    </Field>
                  </label>
                </td>
                <td>
                  <label>
                    <h5>Barcode #</h5>
                    <Field component="input" name="barcode" type="number" step="1" min="0" />
                  </label>
                </td>
                <td>
                  <Field component="textarea" name="notes" type="text" />
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
  initialValues: {locationId:'1', quantity:0.00},
  onSubmit:submitForm,
})(HarvestLogForm);

export default HarvestLogForm;
