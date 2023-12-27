const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  const [counters, setCounters] = React.useState([{id: 1, number: 0}])
  let total = counters.reduce( (a,el) => a+el.number, 0)
  console.log(total)

  const hdlAddCounter = () => setCounters([...counters, { 
    id :  counters.length===0 ? 1 : counters.at(-1).id +1 ,
    number: 0}
  ])

  const hdlUpdate = (id, num) => setCounters(counters.map( el => ({ ...el, number: (el.id===id && el.number+num >=0) ? el.number + num : el.number })))
  
  const hdlDelCounter = (id) => setCounters(counters.filter( el => el.id !== id ))
  
  return (
    <>
      <h1 className="text-center">Codecamp Academy 01</h1>
      <button className="text-center1" onClick={hdlAddCounter}>Add Counter</button>
      <SumInfo total={total}/>

      {counters.map( el => (
        <Counter key={el.id} item={el} hdlUpdate={hdlUpdate} hdlDelCounter={hdlDelCounter}/>
      ))}
    </>
  );
}

function SumInfo(props) {
  return (
    <div className="suminfo">
      <h1> Sum = {props.total}</h1>
    </div>
  );
}

function Counter(props) { 
  return (
    <div className="counter">
      <button className="text-center2" onClick={()=>props.hdlUpdate(props.item.id,-1)}>-</button>
      <h3>{props.item.number}</h3>
      <button className="text-center2" onClick={()=>props.hdlUpdate(props.item.id,1)}>+</button>
      <button className="text-center2" onClick={()=>props.hdlUpdate(props.item.id, -props.item.number )}>C</button>
      <button className="text-center2" onClick={()=>props.hdlDelCounter(props.item.id)}>X</button>
    </div>
  );
}
