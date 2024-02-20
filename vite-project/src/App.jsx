import { useState } from 'react';
import { puppyList } from './data.js'
import './App.css'

function App() {
  const [featPupId, setFeatPupId] = useState(null);
  const [puppies, setPuppies] = useState(puppyList);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <div>
  {featPupId && (
     <div className='pupDetails'>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
      </div>
    )}
    {puppies.map((puppy) => {

return (
  <p
    onClick={() => {
      setFeatPupId(puppy.id);
    }}
    key={puppy.id}
  >
    {puppy.name}
  </p>
);
})}
</div>
);
}

export default App
