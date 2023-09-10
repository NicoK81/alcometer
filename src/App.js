
import { useState } from 'react';
import './App.css';

function App() {
  const [bottles, setBottle] = useState(0)
  const [weight, setWeight] = useState('')
  const [time, setTime] = useState(0)
  const [result, setResult] = useState(0)
  const [gender, setGender] = useState('male')

  
 function alcohol(e) {
  e.preventDefault()
  const litres = bottles * 0.33
  const grams = litres * 8 * 4.5
  const burning = weight / 10
  const gramsleft = grams - (burning * time)
  let result = 0
  if(gender === 'male') result = gramsleft / (weight * 0.7)
  if(gender === 'female') result = gramsleft / (weight * 0.6)

  
  setResult(result)
 }
  
  return (
    
    <div id="container">
      <form onSubmit={alcohol}>
        <h3>Calculating alcohol blood level</h3>
        <div>
          <label>Weight</label>
          <input value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Bottles</label>
          <input type='number' value={bottles} onChange={e => setBottle(e.target.value)}/>
        </div>
        <div>
          <label>Time</label>
          <input type='number' value={time} onChange={e => setTime(e.target.value)}/>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>        
        </div>
        <div>
          <label>Alcohol Level</label>
          <output>{result.toFixed(2)}</output>
        </div>
        <br />
        <button>Calculate</button>
      </form>
    </div>
  )
}

export default App;