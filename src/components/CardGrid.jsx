import React from 'react';
import '../styles/CardGrid.css'; // Link to a CSS file for styling

const Card = ({ gif, title, likes, views, link }) => {
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

const CardGrid = () => {
  const cards = [
    {
      gif: 'https://content.instructables.com/FBS/FJTQ/M5V22LY4/FBSFJTQM5V22LY4.jpg?auto=webp&frame=1&width=734&height=1024&fit=bounds&md=MjAyNS0wMS0xMyAxNTo1Mjo0NC4w',
      title: 'Bird Like Ornithopter Mechanism',
      link: '/techs/bird-like-ornithopter-mechanism/',
    },
    
  ];

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
