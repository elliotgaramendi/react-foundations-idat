import { useState } from 'react';

const ProfessionalCard = () => {
  const [like, setLike] = useState(0);

  const name = 'Elliot Garamendi';
  const age = 29;
  const isAlive = true;
  const roles = ['🌌Frontend🌌', '🤖AI Engineer🤖', '👨‍🏫Docente👨‍🏫']
  const skills = ['⚛️ React ⚛️', '🚀 Astro 🚀', '🖌️ Figma 🖌️', '🤖 OpenAI 🤖'];
  const address = { country: '🇵🇪 Perú 🇵🇪', city: 'Lima' };

  const handleLike = () => setLike(like + 1);

  return (
    <div className="card">
      <h2>♥️ {name} <sup>{age}</sup> <sub>{isAlive ? '🟢' : '🔴'}</sub>♥️</h2>
      <h3>{address.country}, {address.city}</h3>
      <h4>{roles.join(' I ')}</h4>
      <h5>{skills.join(', ')}</h5>
      <button onClick={handleLike}>Like ❤️ {like}</button>
    </div>
  );
};

export default ProfessionalCard;