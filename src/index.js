import './style.css';

const Card = (props) => {
  return `
    <div class="card">
      <div class="card__head">
        ${props.head}
      </div>
      <div class="card__text">
        ${props.text}
      </div>
    </div>
  `;
};

const appElm = document.querySelector('#app');
appElm.innerHTML += Card({ head: 'Doručení ještě dnes' });

