/* eslint-disable react/prop-types */
import { LineChart } from './components/lineChart';

const App = () => {
  const data = [1,5,3,7,6,8,9,5,6];
  const guides = 20;
  const colors = ['#eddde2', '#eddde2', '#eddde2', '#eddde2', '#eddde2','#faf8fd', '#faf8fd', '#faf8fd', '#faf8fd', '#faf8fd', '#fae4d9', '#fae4d9', '#fae4d9', '#fae4d9', '#eddde2', '#eddde2', '#eddde2', '#eddde2', '#faf8fd', '#faf8fd'];

  return (
    <div>
      <LineChart data={data} width={1200} height={600} guides={guides} colors={colors} />
    </div>
  );
}

export default App;
