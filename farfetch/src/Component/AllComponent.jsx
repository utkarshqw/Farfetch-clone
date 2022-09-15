import Lasta from "./lasta/lasta";
import LastB from "./lastb/Lastb";
import One from "./Mid1/one";
import { data2, data2a } from "./Mid2 prod data/second";
import { data3, data3a } from "./Mid2 prod data/third";
import Midtwo from "./Mid2 prod/Mid2";
import { data1, data1a } from "./Mid2 prod/Mid2Data";
import { d3a, data33a } from "./MId3 data/data3one";
import { d3b, data33b } from "./MId3 data/data3two";
import MId3 from "./MId3 poster/MId3";
import Mid4 from "./Mid4 prod/Mid4";
import Mid4b from "./Mid4 prod/Mid4b";
import Mid5 from "./Mid5/Mid5";
// import { data2, data2a } from "./Component/Mid2 prod data/second";
// import { data3, data3a } from "./Component/Mid2 prod data/third";
// import { data1, data1a } from "./Component/Mid2 prod/Mid2Data";
// import { d3a, data33a } from "./Component/MId3 data/data3one";
// import { d3b, data33b } from "./Component/MId3 data/data3two";



export default function AllComponent(){
    return (
        <>
        <One/>
      <Midtwo data={data1} d1={data1a} />
      <Mid5/>
      <Mid4/>
      <Midtwo data={data2} d1={data2a} />
      <Mid4b/>
      <MId3 d1={d3a} data={data33a}/> 
      <Midtwo data={data3} d1={data3a} />
      <MId3 d1={d3b} data={data33b} />
      <Lasta/>
      <LastB/>
      


        


        
        </>
    )
} 