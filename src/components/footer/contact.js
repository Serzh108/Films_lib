import './contact.css';
import image_timur from '../../assets/images/contact-form/timur.png';
import image_yulia from '../../assets/images/contact-form/yulia.png';
import image_vova from '../../assets/images/contact-form/vova.png';
import image_bogdan from '../../assets/images/contact-form/bogdan.png';
import image_ilya from '../../assets/images/contact-form/ilya.png';
import image_sergey from '../../assets/images/contact-form/sergey.png';
import image_andrey from '../../assets/images/contact-form/andrey.png';

const footer = document.querySelector('.js_footer');

footer.insertAdjacentHTML(
  'beforeend',
  `<div class="container-overlay">
    <div class="modal_window">
      <span class="close_modal">&times;</span>
      <p class="modal_title">Development  Team</p>
      <ul class="students_list">
        <li class="list_item">
          <img class="item_img" src="${image_timur}" alt="img_profile" />
          <p class="item_title">Franz Ferdinand</p>
          <p class="item_description">franz228@gmail.com</p>
          <p class="item_description">Pagination, API</p>
        </li>
        <li class="list_item">
          <img class="item_img" src="${image_yulia}" alt="img_profile" />
          <p class="item_title">Yulia Gorbenko</p>
          <p class="item_description">ybelova24@gmail.com</p>
          <p class="item_description">Film details info</p>
        </li>
        <li class="list_item">
          <img class="item_img" src="${image_vova}" alt="img_profile" />
          <p class="item_title">Vladimir Zyryanov</p>
          <p class="item_description">rq2018eu@gmail.com</p>
          <p class="item_description">Input search, buttons</p>
        </li>
        <li class="list_item">
          <img class="item_img" src="${image_bogdan}" alt="img_profile" />
          <p class="item_title">Bogdan Mormul</p>
          <p class="item_description">mormul146@gmail.com</p>
          <p class="item_description">Footer, contact form, Scrum Master</p>
        </li>
        <li class="list_item">
          <img class="item_img" src="${image_ilya}" alt="img_profile" />
          <p class="item_title">Illia Kudimov</p>
          <p class="item_description">ghoreua@gmail.com</p>
          <p class="item_description">Main section</p>
        </li>
        <li class="list_item">
          <img class="item_img" src="${image_andrey}" alt="img_profile" />
          <p class="item_title">Andrey Kolomiets</p>
          <p class="item_description">andrey111@gmail.com</p>
          <p class="item_description">Header</p>
        </li>
        <li class="list_item">
          <img class="item_img" src="${image_sergey}" alt="img_profile" />
          <p class="item_title">Serhii Zhykhariev</p>
          <p class="item_description">serzh108@gmail.com</p>
          <p class="item_description">GitHub, LocalStorage, Team Leader</p>
        </li>
      </ul>
    </div>
  </div>`,
);

const openModal = document.querySelector('.footer__link');
const modal = document.querySelector('.container-overlay');
const closeModal = document.querySelector('.close_modal');

const handeClick = () => {
  modal.style.display = 'flex';
};

const hiddenModal = () => {
  modal.style.display = 'none';
};

openModal.addEventListener('click', handeClick);
closeModal.addEventListener('click', hiddenModal);

window.onclick = () => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
