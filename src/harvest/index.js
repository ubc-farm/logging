import HarvestLogForm from './harvestlogform';
import submit from '../submit';

class HarvestLog extends React.Component {
  render() {
    const handleSubmit =  submit(values, 'harvest-log');
    return (
      <HarvestLogForm onSubmit={handleSubmit} />
    );
  }
}

export default HarvestLog;
