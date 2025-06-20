import React from 'react';
import '../styles/CardGrid.css'; // Link to a CSS file for styling

const Card = ({ gif, title, link }) => {
  return (
    <div className="card">
      <a href={link} target="" rel="noopener noreferrer" className="card-link">
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
      gif: 'https://github.com/user-attachments/assets/0eb6fb50-559b-418e-b192-0461cd28489a',
      title: 'Two-step machine learning enables optimized nanoparticle synthesis',
      link: 'techs/two-step-machine-learning-enables-optimized-nanoparticle-synthesis',
      tags: ['inventions', 'nano'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/6a06a982-2129-4fe2-ac59-94c2ebff86d2',
      title: 'Using Light & Color to Create an Unhackable Internet',
      link: '/techs/using-light-and-color-to-create-an-unhackable-internet/',
      tags: ['inventions', 'other'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/3788b591-f8d9-4f5b-a3b3-ca106586291f',
      title: 'Building Nanoscale Structures using DNA Origami',
      link: '/techs/building-nanoscale-structures-using-dna-origami/',
      tags: ['inventions', 'nano'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/f478a6c8-d0ca-428f-a1c8-b6fed0e8e894',
      title: 'Controlling the Synthesis of Nanoparticles',
      link: '/techs/controlling-the-synthesis-of-nanoparticles/',
      tags: ['inventions', 'nano'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/81268503-1158-466a-a475-2dcd4a7c95e9',
      title: 'High Dimensional Quantum Key Distribution',
      link: '/techs/high-dimensional-quantum-key-distribution/',
      tags: ['inventions', 'quantum'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/ccfad11a-6ac5-46e2-82f0-f9b1c01860f5',
      title: 'Soft mechanism driven Robots for Rescue OPS',
      link: '/techs/soft-mechanism-driven-robots-for-rescue-ops/',
      tags: ['ai', 'robotics'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/5a3a95de-1c28-46a2-bec0-61631d9b30f0',
      title: 'Stable Entangled Photon Transmission for 30+ Hours',
      link: '/techs/stable-entangled-photon-transmission/',
      tags: ['inventions', 'quantum'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/a125bd1a-c359-4152-9db9-27410e4113c8',
      title: 'Quantum Computing Breakthrough for Universal Simulation',
      link: '/techs/quantum-computing-breakthrough-for-universal-simulation/',
      tags: ['inventions', 'quantum'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/734704d9-43f2-4d44-93e6-a3f3f2032aad',
      title: 'Fiber Optic Power for Quantum Computers',
      link: '/techs/fiber-optic-power-for-quantum-computers/',
      tags: ['inventions', 'quantum'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/c6783d3f-6c73-4139-9281-88671b603d06',
      title: 'New way to transform matter',
      link: '/techs/new-way-to-transform-matter/',
      tags: ['inventions', 'other'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/726c3b02-93f8-44a6-8686-62013b84d0f2',
      title: 'Robotic insects with much higher stamina',
      link: '/techs/robotic-insects-with-much-higher-stamina/',
      tags: ['inventions', 'robotics'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/7d3d8892-d2af-4b79-8d48-49c78e7b618e',
      title: 'quantum-mechanics-to-transmit-information-more-securely',
      link: '/techs/quantum-mechanics-to-transmit-information-more-securely/',
      tags: ['inventions', 'quantum'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/06777c57-fa12-4f7e-afe7-327bbdb79692',
      title: 'CO2 reduction system via high-throughput screening',
      link: '/techs/co2-reduction-system-via-high-throughput-screening/',
      tags: ['inventions', 'sustainable'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/5dec0065-573a-42e4-ab0b-364d1e27b83f',
      title: 'Altermagnetism, a newly proposed magnetic phase',
      link: '/techs/altermagnetism-a-newly-proposed-magnetic-phase/',
      tags: ['inventions', 'other'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/8fb5b5e8-29b8-4a4e-9e86-9d1987280129',
      title: 'AFION self-driving lab',
      link: '/techs/afion-self-driving-lab/',
      tags: ['inventions', 'other'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/375a6e4f-20d3-4f33-884b-7ee45ddd97f2',
      title: 'Distributed quantum computing across an optical network link',
      link: '/techs/distributed-quantum-computing-across-an-optical-network-link/',
      tags: ['inventions', 'quantum'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/5543dc90-1a5e-4f47-a0ba-f5d06e212e93',
      title: 'Biologically Plausible Model for Dimensionality Reduction',
      link: '/techs/biologically-plausible-model-for-nonlinear-dimensionality-reduction/',
      tags: ['inventions', 'biotech'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/3caffa74-28be-4554-bd53-a85c95d9e770',
      title: ' Quantum Entanglement with Multilevel Atomic Arrays',
      link: '/techs/supercharging-quantum-entanglement-with-multilevel-atomic-arrays/',
      tags: ['inventions', 'quantum'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/67a82a2f-674a-4df5-9345-bfe28a269157',
      title: 'Light-Twisting Materials in Optics and Photonics',
      link: '/techs/light-twisting-materials-a-breakthrough/',
      tags: ['inventions', 'other'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/aa8b18eb-ab10-47ca-a4e2-0c0c32b6b759',
      title: 'Recycling of perovskite photovoltaics',
      link: '/techs/aqueous-based-recycling-of-perovskite-photovoltaics/',
      tags: ['inventions', 'energy'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/a1e3ce16-f9be-4967-802b-eda1c1b3488b',
      title: 'Efficient CN Bond Formation to lower the cost of medicine',
      link: '/techs/efficient-c-n-bond-formation-to-lower-the-cost-of-medicine/',
      tags: ['inventions', 'biotech'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/edb29174-5cd8-4684-a6fd-92be2df0672a',
      title: 'A.I Architecture to predict superstorms, solar storms',
      link: '/techs/ai-to-predict-superstorms-and-solar-storms/',
      tags: ['space', 'inventions','ai'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/8feb3119-e4c2-47c3-9982-46489370ff93',
      title: 'Micro Drone to navigate cluttered environments at high speeds',
      link: '/techs/micro-drone-to-navigate-cluttered-environments-at-high-speeds/',
      tags: ['other', 'drones','ai'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/2061e603-1b8a-4814-9578-6a505285b0c1',
      title: 'Supramolecular Dyads for Quantum Computing and Sensing',
      link: '/techs/supramolecular-dyads-for-quantum-computing-and-sensing/',
      tags: ['other', 'quantum', 'inventions'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/0e5f0b72-b59a-484b-9bf0-185b6ad983b7',
      title: 'Quantum Spectroscopy for Ultra-Sensitive Detection ',
      link: '/techs/quantum-spectroscopy-for-ultra-sensitive-detection/',
      tags: ['other', 'quantum', 'inventions'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/bf1bbc2f-c39f-43f1-910e-938dac26a060',
      title: 'Idea: DNA-based supercomputer to run 100 billion parallel programs',
      link: '/techs/dna-based-supercomputer-to-run-100-billion-parallel-programs/',
      tags: ['other', 'inventions'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/03773e2e-a013-442a-84cb-a432286de888',
      title: 'New Way to Control Electrons',
      link: '/techs/new-way-to-control-electrons/',
      tags: ['other', 'inventions'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/8d1cf5a8-b696-4b4f-8dd0-030eb4d731b3',
      title: 'Lightsail propulsion for very high speed space travel',
      link: '/techs/lightsail-propulsion-for-very-high-speed-space-travel/',
      tags: ['space', 'rockets', 'inventions'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/81714d42-305a-4496-9eb5-b70e67ffb5a5',
      title: 'Scalable Photonic Quantum Computer Aurora',
      link: '/techs/scalable-photonic-quantum-computer-aurora/',
      tags: ['quantum', 'inventions'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/966dac6d-dc9b-4510-ae1f-4acf4fad05fe',
      title: 'Generative AI to quickly calculate 3D genomic structures',
      link: '/techs/generative-ai-to-quickly-calculate-3d-genomic-structures/',
      tags: ['ai', 'inventions'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/cffd2117-0643-4931-9f9e-205201f11869',
      title: 'Quantum Algorithm for 1000x Forecasting Simulations',
      link: '/techs/quantum-inspired-algorithm-for-1000x-forecasting-simulations/',
      tags: ['quantum', 'inventions'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/de3c1546-f8aa-4477-9b80-b4ce41d04e92',
      title: 'Tensor Networks in Fluid Dynamics for Cost Reduction',
      link: '/techs/tensor-networks-in-fluid-dynamics-for-cost-reduction/',
      tags: ['quantum', 'inventions'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/6c6911b4-d75d-499f-86a2-3802109dc8cd',
      title: 'Teleportation of a quantum particle via quantum Zeno dynamics',
      link: '/techs/teleportation-of-a-quantum-particle-via-quantum-zeno-dynamics/',
      tags: ['quantum', 'inventions', 'teleportation'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/35708136-d413-484c-9d81-57fa5c23036b',
      title: 'pure-RL training method (used by deepseek in r1)',
      link: '/techs/pure-rl-training-method/',
      tags: ['ai', 'inventions'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/9c46fed3-7a29-4298-bb04-8f2648f30484',
      title: 'Dyson Swarm as a form of Dyson Sphere',
      link: '/techs/dyson-swarm-as-a-form-of-dyson-sphere/',
      tags: ['energy', 'inventions', 'space'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/259f79af-703a-4023-8cd7-c1a37d9786f8',
      title: 'Dyson Swarm around Mars as an Energy Source',
      link: '/techs/dyson-swarm-around-mars-as-an-energy-source/',
      tags: ['energy', 'inventions', 'space'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/e7e074e7-8af0-4344-b8e9-338850a0eab2',
      title: 'Space-Based Solar Power for Unlimited Energy',
      link: '/techs/space-based-solar-power-for-unlimited-energy/',
      tags: ['energy', 'inventions', 'space'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/9d1bf61f-d9dd-4d62-8a32-651b3e3a807f',
      title: 'Making of Microscopic Black Holes',
      link: '/techs/making-of-microscopic-black-holes/',
      tags: ['inventions', 'space'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/2f4e444b-31d1-41a2-92cc-1986f0fe218e',
      title: 'Quantum Blockchain for increased Speed and Security',
      link: '/techs/quantum-blockchain-for-increased-speed-and-security/',
      tags: ['quantum', 'inventions'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/28c4eea6-da36-45c3-bfb9-5d796a1699bb',
      title: 'Quantum Cascade Laser Glucose Sensors for Diabetes Care',
      link: '/techs/quantum-cascade-laser-glucose-sensors-for-diabetes-care/',
      tags: ['quantum', 'inventions'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/36f49658-3ed2-4ba4-98a3-c31d48304a40',
      title: 'Optical Nuclear Electric Resonance for Quantum Gates',
      link: '/techs/optical-nuclear-electric-resonance-for-quantum-gates/',
      tags: ['quantum', 'inventions'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/8dc03b34-ed06-484e-9883-d1fdc2b25844',
      title: 'Omni-directional Mobile Robot for Material Conveying',
      link: '/techs/omni-directional-mobile-robot-for-material-conveying/',
      tags: ['robotics'],
    },
    {
      gif: 'https://github.com/user-attachments/assets/b0c435fa-b1bb-4d31-8715-f0acb33cbc56',
      title: 'Low cost 12DoF Quadruped Robot Design',
      link: '/techs/low-cost-quadruped-robot-design/',
      tags: ['robotics'],
    },
    {
      gif: '/images/img1.png',
      title: 'Naked Singularity as Source of ultra high Energy',
      link: '/techs/naked-singularity-as-a-possible-source-of-ultra-high-energy/',
      tags: ['energy', 'space'],
    },
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