const ProfessionalCard = () => {
  const name = 'Elliot Garamendi';
  const age = 29;
  const roles = ['🌌Frontend🌌', '🤖AI Engineer🤖', '💻Consultor💻', '👨‍🏫Docente👨‍🏫']
  const description = 'Desarrollador Frontend (Web/Mobile) experto en React. Creo productos AI centrados en el usuario. Amo investigar, aprender y compartir código de calidad.';
  const skills = ['⚛️ React ⚛️', '🌐 Next.js 🌐', '🚀 Astro 🚀', '🤖 OpenAI 🤖', '🐳 Docker 🐳', '🎨 UI/UX 🎨', '🖌️ Figma 🖌️', '🧪 Testing 🧪'];
  const socialNetworks = [
    { name: 'YouTube', url: 'https://www.youtube.com/@elliotgaramendi' },
    { name: 'GitHub', url: 'https://github.com/elliotgaramendi' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/elliotgaramendi/' },
    { name: 'Instagram', url: 'https://www.instagram.com/elliotgaramendi/' },
  ];

  return (
    <div>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>{roles}</h4>
      <p>{description}</p>
      <h5>{skills}</h5>
      <h6>{JSON.stringify(socialNetworks)}</h6>
    </div>
  );
};

export default ProfessionalCard;