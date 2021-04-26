import './style.css';

const Card = (props) => {
  return `
    <div class="card">
      <div class="card__title">
        ${props.head}
      </div>
      <div class="card__body">
        ${props.body}
      </div>
      <img class="card__image" src="${props.image}" />
    </div>
  `;
};

const appElm = document.querySelector('#app');
appElm.innerHTML += Card({ head: 'Doručení ještě dnes' });

