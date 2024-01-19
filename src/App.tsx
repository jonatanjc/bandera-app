import React from 'react';
import './App.css';

function App(): JSX.Element {
  const handleColorClick = (e: React.MouseEvent<HTMLDivElement>, color: string) => {
    e.stopPropagation();
    alert(`${color} Ecuador`);
  };

  return (
    <div>
      <div className="color-container">
        <div className="color yellow" onClick={(e) => handleColorClick(e, 'Yellow')}>
          <div className="color blue" onClick={(e) => handleColorClick(e, 'Blue')}>
            <div className="color red" onClick={(e) => handleColorClick(e, 'Red')}>
              <img
                src="https://i.pinimg.com/originals/2f/31/97/2f3197ae2e1c65dd42a9facf0af23a06.png"
                alt="escudo"
                style={{ width: '40px', height: '40px' }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
