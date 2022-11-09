import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { addToCart } from './redux/action/cart.action';
function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!value) {
      return alert("Input field can't be empty!");
    }
    dispatch(addToCart(value));
    setValue("");
  }
  const items = useSelector(state => state.cart.items);
  return (
    <div className="App">
      <h2>My Shopping Items</h2>
      <div>
        <input
          type="text"
          onChange={e => setValue(e.target.value)}
          value={value}
          placeholder='type here... '
        />
        <button onClick={handleSubmit}>Add</button>
        <ol>
          {
            items?.map((item, i) => <li key={i}>{item}</li>)
          }
        </ol>
      </div>
    </div>
  );
}

export default App;
