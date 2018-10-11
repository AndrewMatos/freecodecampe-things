
const name = 'Josh Perez';

{/* functional component */}

const MyComponent = function() {
return <div>olakease</div>
}

{/* define react component using class syntax */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
   return <div>
   <h1>Hello React!</h1>
   </div>
  }
};

const element = <div className="myDiv">
{/*comment */}
<h1>Hello, {name}</h1>
 <p></p>
 <br />
 <ul>
    <li></li>
    <li></li>
    <li></li>
 </ul>
 <hr />
</div>;

{/* ReactDOM.render(JSX,document.getElementById("challenge-node")) */}

ReactDOM.render(
  element,
  document.getElementById('root')
);

