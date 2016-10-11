//import { Form } from 'react-redux-form';
import {Component} from 'react';
import Take from './components/take';
import Storage from './components/storage';
import Tracking from './components/tracking';
import Notes from './components/notes';

class Harvest extends Component {
  render() {
    return (
      <div>
      <h1>Harvest Log Data</h1>
      <form>
        <table className="log-table">
          <tbody>
            <tr>
              <th><h5>Take</h5></th>
              <th><h5>Storage</h5></th>
              <th><h5>Tracking</h5></th>
              <th><h5>Notes</h5></th>
            </tr>
            <tr>
              <Take />
              <Storage />
              <Tracking />
              <Notes />
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

export default Harvest;
