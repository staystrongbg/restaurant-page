import { loaded } from './load';
import { data } from './data';
// import css from '../style.css';
loaded();
const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
const category = ['home', 'menu', 'contact'];
// const content = document.getElementById('content');
const header = document.querySelector('.header');
header.innerHTML = `<h1>Restaurant</h1>`;
links.innerHTML = category
  .map((a) => {
    return /*html*/ `<li class="link">${a}</li>`;
  })
  .join('');

const link = document.querySelectorAll('.link');
// console.log(link);
link.forEach((a) => a.addEventListener('click', showContent));

function foodMenu() {
  menu.style = '';
  menu.classList.remove('bcg-img');
  menu.innerHTML = data
    .map(({ name, desc, img, price, heading }) => {
      console.log(img);
      return /*html*/ `<article class="item">
              <img class='item-img' src='${img}'
                alt=${name}
              />
              <div class="item-info">
                <div class="item-header">
                  <h3 class="heading">${heading}</h3>
                  <h3 class="price">${price}</h3>
                </div>
                <p class="text">
                  ${desc}
                </p>
              </div>
            </article>`;
    })
    .join('');
}

function contact() {
  menu.style.gridTemplateColumns = '1fr';
  menu.style.maxWidth = '100vw';
  menu.style.margin = 0;
  menu.style.padding = 0;
  menu.classList.remove('bcg-img');
  // const styles = {
  //   gridTemplateColumns: '1fr',
  //   maxWidth: '100vw',
  //   margin: 0,
  //   padding: 0,
  // };

  menu.innerHTML = /*html */ `
  <div class="container">
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>`;
}

function showContent(e) {
  const evt = e.currentTarget;
  evt.textContent === 'home'
    ? loaded()
    : evt.textContent === 'menu'
    ? foodMenu()
    : contact();
}
