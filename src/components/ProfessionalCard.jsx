const ProfessionalCard = () => {
  const name = 'Elliot Garamendi';
  const age = 29;
  const isAlive = true;
  const roles = ['🌌Frontend🌌', '🤖AI Engineer🤖', '💻Consultor💻', '👨‍🏫Docente👨‍🏫']
  const skills = ['⚛️ React ⚛️', '🌐 Next.js 🌐', '🚀 Astro 🚀', '🤖 OpenAI 🤖', '🐳 Docker 🐳', '🎨 UI/UX 🎨', '🖌️ Figma 🖌️', '🧪 Testing 🧪'];
  const address = { country: '🇵🇪 Perú 🇵🇪', city: 'Lima' };

  return (
    <div>
      <h2>♥️ {name} <sup>{age}</sup> <sub>{isAlive ? '🟢' : '🔴'}</sub>♥️</h2>
      <h3>{address.country}, {address.city}</h3>
      <h4>{roles.join(' I ')}</h4>
      <h5>{skills.join(', ')}</h5>
    </div>
  );
};

export default ProfessionalCard;