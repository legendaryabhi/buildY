import React from 'react';
import '../styles/CardGrid.css'; // Link to a CSS file for styling

const Card = ({ gif, title, link }) => {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card-content">
          <div className="image-container" style={{ backgroundColor: 'white' }}>
            <img src={gif} alt="Card Thumbnail" className="card-image" />
          </div>
          <div className="card-info">
            <h3 className="card-title">{title}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

const CardGrid = ({ tag }) => {
  console.log('Received tag:', tag);

  
  const cards = [
    {
      gif: 'https://github.com/user-attachments/assets/e542e46e-6af5-4a5c-8ece-16966fee1dd0',
      title: 'Enhanced Aerodynamic Performance UAV Design',
      link: '/techs/enhanced-aerodynamic-performance-in-uav-design/',
      tags: ['inventions', 'drones'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/770471d5-1030-405e-b215-0b1fa40b12dd',
      title: 'Electron beam transmission as Energy Source',
      link: '/techs/electron-beam-transmission-as-energy-source/',
      tags: ['energy', 'inventions', 'space'],
    },
    {
      gif: '/images/rocketdrone.png',
      title: 'Rocket Drone for 200km/h speed',
      link: '/techs/rocket-drone-design/',
      tags: ['space', 'drones', 'rockets'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/770471d5-1030-405e-b215-0b1fa40b12dd',
      title: 'Electron beam transmission propulsion for space crafts',
      link: '/techs/electron-beam-transmission-propulsion-for-space-crafts/',
      tags: ['rockets', 'space', 'inventions'],
    },
    {
      gif: 'https://content.instructables.com/F7B/TIKD/M5V22GKL/F7BTIKDM5V22GKL.jpg?auto=webp&frame=1&width=1024&fit=bounds&md=MjAyNS0wMS0xMyAxNDo1Mjo1NS4w',
      title: 'Bird Like Ornithopter Mechanism',
      link: '/techs/bird-like-ornithopter-mechanism/',
      tags: ['other'],
    },
    {
      gif: 'https://content.instructables.com/F7O/HGJU/M6523VE1/F7OHGJUM6523VE1.gif',
      title: 'Muscle Signal Controlling',
      link: '/techs/controlling-video-games-using-muscle-signals/',
      tags: ['inventions'],
    },
    {
      gif: 'https://content.instructables.com/F2E/2LMT/M3N1CO3A/F2E2LMTM3N1CO3A.png?auto=webp&frame=1&fit=bounds&md=MjAyNC0xMS0xOCAwNToxNTowNi4w',
      title: 'Rubber Band Ornithopter Design',
      link: '/techs/rubber-band-ornithopter-design/',
      tags: ['other'],
    },
  ];

  // Filter cards based on the tag
  const filteredCards = tag === 'all' ? cards : cards.filter((card) => card.tags.includes(tag));

  return (
    <div className="card-grid">
      {filteredCards.length > 0 ? (
        filteredCards.map((card, index) => <Card key={index} {...card} />)
      ) : (
        <p style={{ padding: '32px' }}>Nothing here</p>
      )}
    </div>
  );
};

export default CardGrid;