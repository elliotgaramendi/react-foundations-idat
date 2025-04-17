import { useState } from 'react';

const ProfessionalCard = ({ name, age, isAlive }) => {
  console.log(name);
  const [like, setLike] = useState(0);
  const handleLike = () => setLike(like + 1);

  return (
    <div className="card">
      <h2>♥️ {name} <sup>{age}</sup> <sub>{isAlive ? '🟢' : '🔴'}</sub>♥️</h2>
      {/* 
      <h3>{address.country}, {address.city}</h3>
      <h4>{roles.join(' I ')}</h4>
      <h5>{skills.join(', ')}</h5> */}
      <button onClick={handleLike}>Like ❤️ {like}</button>
    </div>
  );
};

export default ProfessionalCard;