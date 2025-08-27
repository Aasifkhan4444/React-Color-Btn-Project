 import React from 'react';

function ButtonColor() {
  const changeBackground = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h2>Choose Background Color:</h2>

      <button
        onClick={() => changeBackground('#ff6666')}
        style={{ backgroundColor: '#ff6666', color: 'white', margin: '10px', padding: '10px 20px', border: 'none' }}
      >
        Red
      </button>

      <button
        onClick={() => changeBackground('#66ff66')}
        style={{ backgroundColor: '#66ff66', color: 'black', margin: '10px', padding: '10px 20px', border: 'none' }}
      >
        Green
      </button>

      <button
        onClick={() => changeBackground('#6666ff')}
        style={{ backgroundColor: '#6666ff', color: 'white', margin: '10px', padding: '10px 20px', border: 'none' }}
      >
        Blue
      </button>

      <button
        onClick={() => changeBackground('#ffff66')}
        style={{ backgroundColor: '#ffff66', color: 'black', margin: '10px', padding: '10px 20px', border: 'none' }}
      >
        Yellow
      </button>

      <button
        onClick={() => changeBackground('#ff66ff')}
        style={{ backgroundColor: '#ff66ff', color: 'black', margin: '10px', padding: '10px 20px', border: 'none' }}
      >
        Pink
      </button>

      <button
        onClick={() => changeBackground('#66ffff')}
        style={{ backgroundColor: '#66ffff', color: 'black', margin: '10px', padding: '10px 20px', border: 'none' }}
      >
        Cyan
      </button>
    </div>
  );
}

export default ButtonColor;
