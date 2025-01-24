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
      gif: 'https://content.instructables.com/F7B/TIKD/M5V22GKL/F7BTIKDM5V22GKL.jpg?auto=webp&frame=1&width=1024&fit=bounds&md=MjAyNS0wMS0xMyAxNDo1Mjo1NS4w',
      title: 'Bird Like Ornithopter Mechanism',
      link: '/techs/bird-like-ornithopter-mechanism/',
    },
    {
      gif: 'https://content.instructables.com/F7B/TIKD/M5V22GKL/F7BTIKDM5V22GKL.jpg?auto=webp&frame=1&width=1024&fit=bounds&md=MjAyNS0wMS0xMyAxNDo1Mjo1NS4w',
      title: 'Bird Like Ornithopter Mechanism',
      link: '/techs/bird-like-ornithopter-mechanism/',
    },
    {
      gif: 'https://content.instructables.com/F7B/TIKD/M5V22GKL/F7BTIKDM5V22GKL.jpg?auto=webp&frame=1&width=1024&fit=bounds&md=MjAyNS0wMS0xMyAxNDo1Mjo1NS4w',
      title: 'Bird Like Ornithopter Mechanism',
      link: '/techs/bird-like-ornithopter-mechanism/',
    },
    {
      gif: 'https://content.instructables.com/F7B/TIKD/M5V22GKL/F7BTIKDM5V22GKL.jpg?auto=webp&frame=1&width=1024&fit=bounds&md=MjAyNS0wMS0xMyAxNDo1Mjo1NS4w',
      title: 'Bird Like Ornithopter Mechanism',
      link: '/techs/bird-like-ornithopter-mechanism/',
    },
    {
      gif: 'https://content.instructables.com/F7B/TIKD/M5V22GKL/F7BTIKDM5V22GKL.jpg?auto=webp&frame=1&width=1024&fit=bounds&md=MjAyNS0wMS0xMyAxNDo1Mjo1NS4w',
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
