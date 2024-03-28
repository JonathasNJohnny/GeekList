import React from 'react';
import './Welcome.css';

export const Welcome = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1>Bem-vindo ao Nosso App!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</p>
        <button>Login/Sign-Up</button>
      </div>
    </div>
  );
}

export default Welcome;