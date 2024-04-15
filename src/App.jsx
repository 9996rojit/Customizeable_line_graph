/* eslint-disable react/prop-types */
import { LineChart } from './components/lineChart';
import { HashMap } from './utils/hashMap.utils';

function getDataWith(icon){
  const data = [];
  for (let index = 0; index < 20; index++) {
    const randomNumber = Math.floor(Math.random() * 20)
    data.push({value:randomNumber, icon})
  }
  return data;
}

const App = () => {
  const newData = [{data:1,icon:"filledCircle"},{data:15,icon:"filledCircle"},{data:35,icon:"outlineCircle"},{data:27,icon:"outlineCircle"},{data:36,icon:"filledCircle"},{data:48,icon:"filledCircle"},{data:39,icon:"outlineCircle"},{data:15, icon:"triangle"},{data:16,icon:"triangle"}];
  const hashMap = new HashMap()
  hashMap.put("pcoGlucose",getDataWith('circle'));
  hashMap.put("bloodGas", getDataWith('triangle'))
  hashMap.put("plasma",getDataWith("filledCircle"))

  // console.log(hashMap.keys())
  // console.log(hashMap.get("pcoGlucose"))
  // console.log(hashMap.get("bloodGas"))
  // const data = {
  //     pocGlucose: [
  //       {date:"2024-04-01",value:10},
  //       {date:"2024-04-02",value:20},
  //       {date:"2024-04-03",value:30},
  //       {date:"2024-04-04",value:40},
  //       {date:"2024-04-05",value:50}
  //     ],
  //     bloodPlasma:[
  //       {date:"2024-04-01",value:10},
  //       {date:"2024-04-02",value:10},
  //       {date:"2024-04-03",value:20},
  //       {date:"2024-04-04",value:40},
  //       {date:"2024-04-05",value:50}
  //     ],
  //     plasma:[
  //       {date:"2024-04-01",value:8},
  //       {date:"2024-04-02",value:10},
  //       {date:"2024-04-03",value:30},
  //       {date:"2024-04-04",value:40},
  //       {date:"2024-04-05",value:60}
  //     ]
  // }

  const guides = 20;
  const colors = ['#eddde2', '#eddde2', '#eddde2', '#eddde2', '#eddde2','#faf8fd', '#faf8fd', '#faf8fd', '#faf8fd', '#faf8fd', '#fae4d9', '#fae4d9', '#fae4d9', '#fae4d9', '#eddde2', '#eddde2', '#eddde2', '#eddde2', '#faf8fd', '#faf8fd'];


  return (
    <div>
      <LineChart data={newData} width={1200} height={600} guides={guides} colors={colors} />
    </div>
  );
}

export default App;
