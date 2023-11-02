import React from "react";
import ReactDOM from "react-dom";
import Card from './Card';
import Sdata from './Sdata';
console.log(Sdata)
ReactDOM.render(
  <div>
    <Card
      imgSrc={Sdata[0].imgSrc}
      sname={Sdata[0].sname}
      title={Sdata[0].title}
      link={Sdata[0].link}
    />
     <Card
      imgSrc={Sdata[1].imgSrc}
      sname={Sdata[1].sname}
      title={Sdata[1].title}
      link={Sdata[1].link}
    />
     <Card
      imgSrc={Sdata[2].imgSrc}
      sname={Sdata[2].sname}
      title={Sdata[2].title}
      link={Sdata[2].link}
    />
     <Card
      imgSrc={Sdata[3].imgSrc}
      sname={Sdata[3].sname}
      title={Sdata[3].title}
      link={Sdata[3].link}
    />
  </div>,
  document.getElementById('root')
);
