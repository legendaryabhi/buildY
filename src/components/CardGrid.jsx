import React from 'react';
import '../styles/CardGrid.css'; // Link to a CSS file for styling

const Card = ({ gif, title, link }) => {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card-content">
          <img src={gif} alt="Card Thumbnail" className="card-image" />
          <div className="card-info">
            <h3 className="card-title">{title}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

const CardGrid = ({ tag }) => {
  console.log('Received tag:', tag); // Debugging to ensure tag is received

  const cards = [
    {
      gif: 'https://content.instructables.com/F7B/TIKD/M5V22GKL/F7BTIKDM5V22GKL.jpg?auto=webp&frame=1&width=1024&fit=bounds&md=MjAyNS0wMS0xMyAxNDo1Mjo1NS4w',
      title: 'Bird Like Ornithopter Mechanism',
      link: '/techs/bird-like-ornithopter-mechanism/',
      tag: 'other',
    },
    {
      gif: 'https://content.instructables.com/F7O/HGJU/M6523VE1/F7OHGJUM6523VE1.gif',
      title: 'Muscle Signal Controlling',
      link: '/techs/controlling-video-games-using-muscle-signals/',
      tag: 'inventions',
    },
    {
      gif: 'https://content.instructables.com/F2E/2LMT/M3N1CO3A/F2E2LMTM3N1CO3A.png?auto=webp&frame=1&fit=bounds&md=MjAyNC0xMS0xOCAwNToxNTowNi4w',
      title: 'Rubber Band Ornithopter Design',
      link: '/techs/rubber-band-ornithopter-design/',
      tag: 'other',
    },
    {
      gif: '/images/rocketdrone.png',
      title: 'Rocket Drone for 200km/h speed',
      link: '/techs/rocket-drone-design/',
      tag: 'space',
    },
    {
      gif: '/images/rocketdrone.png',
      title: 'Rocket Drone for 200km/h speed',
      link: '/techs/rocket-drone-design/',
      tag: 'drones',
    },
    {
      gif: '/images/rocketdrone.png',
      title: 'Rocket Drone for 200km/h speed',
      link: '/techs/rocket-drone-design/',
      tag: 'rockets',
    },
    
  ];

  // Filter cards based on the tag
  const filteredCards = tag === 'all' ? cards : cards.filter((card) => card.tag === tag);

  return (
    <div className="card-grid">
      {filteredCards.length > 0 ? (
        filteredCards.map((card, index) => <Card key={index} {...card} />)
      ) : (
        <p style={{padding:'48px'}}>Nothing here</p>
      )}
    </div>
  );
};

export default CardGrid;
