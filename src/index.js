import './style.css';

const Card = (props) => {
  return `
    <div class="card">
      <div class="card__title">
        ${props.title}
      </div>
      <img class="card__image" src="${props.image}" />
    </div>
  `;
};

const appElm = document.querySelector('#app');
appElm.innerHTML += Card({ title: 'Doručení ještě dnes' });

