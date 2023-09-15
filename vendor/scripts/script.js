const pricingCards = document.querySelectorAll('.pricingCard');
const Navbar = document.querySelector('.navbar');

// Fixed Navbar functionality
window.addEventListener('scroll', () => {
  Navbar.classList.toggle('fixed', window.scrollY > 500);
});

// Functionality for selecting a pricing card
pricingCards.forEach((card) =>
  card.addEventListener('click', () => {
    pricingCards.forEach((card) => card.classList.remove('selected'));

    card.classList.add('selected');
  })
);

// switch check input monthly and annually toggle
const switchMtoA = document.querySelector('#switchMtoA');

switchMtoA.addEventListener('click', () => {
  const pricingCard1 = document.querySelector('.pricingCard1');
  const pricingCard2 = document.querySelector('.pricingCard2');
  const pricingCard3 = document.querySelector('.pricingCard3');

  if (switchMtoA.checked) {
    // Annually pricing show

    pricingCard1.innerHTML = ` <div class="priceValue d-flex align-items-center mt-2">
        <h3 class="display-6">99$</h3>
        <span>/ year</span>
    </div>

    <div class="subscriptionType">
        <h3 class="display-6" >Basic</h3>
        <p>The national average cost of buying coin easy.</p>
    </div>

    <div class="hrLine mx-auto"></div>

    <div class="subscribeBenefits mt-2">
        <ul >
            <li>Anti-Bankrupt</li>
            <li>Group Consulting</li>
            <li>Free Etherum</li>
            <li class="notAvailableBenefit" ><del>Instantly Exchange</del></li>
            <li class="notAvailableBenefit" ><del>House Meeting</del></li>
        </ul>
    </div>`;

    pricingCard2.innerHTML = `  <div class="priceValue d-flex align-items-center mt-2">
    <h3 class="display-6">220$</h3>
    <span>/ year</span>
</div>

<div class="subscriptionType">
    <h3 class="display-6" >Premium</h3>
    <p>The national average cost of buying coin easy.</p>
</div>

<div class="hrLine mx-auto"></div>


<div class="subscribeBenefits mt-2">
    <ul>
        <li>Group Consulting</li>
        <li>Free Bitcoin</li>
        <li>New Relation</li>
        <li>Instantly Exchange</li>
        <li>House Meeting</li>
    </ul>
</div>`;

    pricingCard3.innerHTML = ` <div class="priceValue d-flex align-items-center mt-2">
    <h3 class="display-6">410$</h3>
    <span>/ year</span>
</div>

<div class="subscriptionType">
    <h3 class="display-6" >Premium++</h3>
    <p>The national average cost of buying coin easy.</p>
</div>

<div class="hrLine mx-auto"></div>

<div class="subscribeBenefits mt-2">
    <ul>
        <li>Anti-Bankrupt</li>
        <li>Group Consulting</li>
        <li>Free Etherum</li>
        <li>Instantly Exchange</li>
        <li>Free House Meeting</li>
    </ul>
</div>
`;
  } else {
    // Monthly pricing show

    pricingCard1.innerHTML = ` <div class="priceValue d-flex align-items-center mt-2">
        <h3 class="display-6">9$</h3>
        <span>/ month</span>
    </div>

    <div class="subscriptionType">
        <h3 class="display-6" >Basic</h3>
        <p>The national average cost of buying coin easy.</p>
    </div>

    <div class="hrLine mx-auto"></div>

    <div class="subscribeBenefits mt-2">
        <ul >
            <li>Anti-Bankrupt</li>
            <li>Group Consulting</li>
            <li>Free Etherum</li>
            <li class="notAvailableBenefit" ><del>Instantly Exchange</del></li>
            <li class="notAvailableBenefit" ><del>House Meeting</del></li>
        </ul>
    </div>`;

    pricingCard2.innerHTML = `  <div class="priceValue d-flex align-items-center mt-2">
    <h3 class="display-6">24$</h3>
    <span>/ month</span>
</div>

<div class="subscriptionType">
    <h3 class="display-6" >Premium</h3>
    <p>The national average cost of buying coin easy.</p>
</div>

<div class="hrLine mx-auto"></div>


<div class="subscribeBenefits mt-2">
    <ul>
        <li>Group Consulting</li>
        <li>Free Bitcoin</li>
        <li>New Relation</li>
        <li>Instantly Exchange</li>
        <li>House Meeting</li>
    </ul>
</div>`;

    pricingCard3.innerHTML = ` <div class="priceValue d-flex align-items-center mt-2">
<h3 class="display-6">36$</h3>
<span>/ month</span>
</div>

<div class="subscriptionType">
<h3 class="display-6" >Premium++</h3>
<p>The national average cost of buying coin easy.</p>
</div>

<div class="hrLine mx-auto"></div>

<div class="subscribeBenefits mt-2">
<ul>
    <li>Anti-Bankrupt</li>
    <li>Group Consulting</li>
    <li>Free Etherum</li>
    <li>Instantly Exchange</li>
    <li>Free House Meeting</li>
</ul>
</div>
`;
  }
});

// Granim Animation Canvas
var granimInstance = new Granim({
  element: '#canvas-basic',
  direction: 'diagonal',
  isPausedWhenNotInView: false,
  states: {
    'default-state': {
      gradients: [
        ['#2745EA', '#CF7BF4'],
        ['#b86cd8', '#2139c2'],
        ['#0e27b2', '#9c4abf'],
      ],
    },
  },
});
