import { Form } from 'react-redux-form';
import Take from './components/take';
import Storage from './components/storage';
import Tracking from './components/tracking';
import Notes from './components/notes';

class Harvest extends Component {
  render() {
    return (
      <div>
      <h1>Harvest Log Data</h1>
      <Form>
        <table>
          <tr>
            <th>Take</th>
            <th>Storage</th>
            <th>Tracking</th>
            <th>Notes</th>
          </tr>
          <tr>
            <Take />
            <Storage />
            <Tracking />
            <Notes />
          </tr>
        </table>
        <button type="submit">
          Log Data
        </button>
      </Form>
      </div>
    );
  }
}

export default Harvest;
