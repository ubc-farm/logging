import HarvestLogForm from './harvestlogform';

class HarvestLog extends React.Component {
  render() {
    const handleSubmit = (values) => {
      // Do something with the form values
      console.log(values);
    }
    return (
      <HarvestLogForm onSubmit={handleSubmit} />
    );
  }
}

export default HarvestLog;
