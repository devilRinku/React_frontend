


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heading from './Heading';
import List from './List'
const name="rinku";
const current= new Date().toLocaleDateString();
const time =new Date().toLocaleTimeString();
ReactDOM.render(<>

<Heading/>
<List/>
<p>current Date is={current}</p>
<p>current time is={time}</p>
 </> ,document.getElementById("root")
)


