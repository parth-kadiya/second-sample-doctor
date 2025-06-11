// ======== 6.js (Final Updated) ========

// 1. About Dr. Karnav Patel का टाइपिंग टेक्स्ट
const text = "Dr. Karnav Patel";
let i = 0;
function typeWriter() {
  const el = document.querySelector(".typewriter-text");
  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

// 2. Treatments Offered का टाइपिंग टेक्स्ट
const treatmentText = "Treatments Offered";
let j = 0;
function typeWriterTreatment() {
  const el = document.querySelector(".typewriter-text-treatment");
  if (j < treatmentText.length) {
    el.innerHTML += treatmentText.charAt(j);
    j++;
    setTimeout(typeWriterTreatment, 80);
  }
}

// 3. Availability का टाइपिंग टेक्स्ट
const availabilityText = "Availability";
let k = 0;
function typeWriterAvailability() {
  const el = document.querySelector(".typewriter-text-availability");
  if (k < availabilityText.length) {
    el.innerHTML += availabilityText.charAt(k);
    k++;
    setTimeout(typeWriterAvailability, 80);
  }
}

// 4. Patient Reviews का टाइपिंग टेक्स्ट
const reviewsText = "Patient Reviews";
let m = 0;
function typeWriterReviews() {
  const el = document.querySelector(".typewriter-text-reviews");
  if (m < reviewsText.length) {
    el.innerHTML += reviewsText.charAt(m);
    m++;
    setTimeout(typeWriterReviews, 80);
  }
}

// 5. Contact Form का टाइपिंग टेक्स्ट
const contactText = "Contact Form";
let n = 0;
function typeWriterContact() {
  const el = document.querySelector(".typewriter-text-contact");
  if (n < contactText.length) {
    el.innerHTML += contactText.charAt(n);
    n++;
    setTimeout(typeWriterContact, 80);
  }
}

// 6. Clinic Location का टाइपिंग टेक्स्ट
const locationText = "Clinic Location";
let o = 0;
function typeWriterLocation() {
  const el = document.querySelector(".typewriter-text-location");
  if (o < locationText.length) {
    el.innerHTML += locationText.charAt(o);
    o++;
    setTimeout(typeWriterLocation, 80);
  }
}

// === Helper: Reset and re-trigger typing ===
function resetAndType(selector, counterName, typeFn) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = "";
  window[counterName] = 0;
  typeFn();
}

function showTab(tabId, event) {
  const contents = document.querySelectorAll('.tab-content');
  const tabs     = document.querySelectorAll('.tab');

  contents.forEach(content => content.classList.add('hidden'));
  tabs.forEach(tab => tab.classList.remove('active'));

  document.getElementById(tabId).classList.remove('hidden');
  event.currentTarget.classList.add('active');

  // Always reset & re-run typewriter on each click
  switch (tabId) {
    case 'about':
      i = 0;
     document.querySelector('.typewriter-text').innerHTML = '';
     typeWriter();
      break;
    case 'treatment':
      j = 0;
     document.querySelector('.typewriter-text-treatment').innerHTML = '';
     typeWriterTreatment();
      break;
    case 'availability':
      k = 0;
     document.querySelector('.typewriter-text-availability').innerHTML = '';
     typeWriterAvailability();
      break;
    case 'reviews':
      m = 0;
     document.querySelector('.typewriter-text-reviews').innerHTML = '';
     typeWriterReviews();
      break;
    case 'contact':
      n = 0;
     document.querySelector('.typewriter-text-contact').innerHTML = '';
     typeWriterContact();
      break;
    case 'location':
      o = 0;
     document.querySelector('.typewriter-text-location').innerHTML = '';
     typeWriterLocation();
      break;
    default:
      break;
  }
}

// पहले वाला:
// window.onload = () => resetAndType('.typewriter-text', 'i', typeWriter);

// नया कोड:
window.onload = () => {
  // अगर मोबाइल व्यू (≤767px) हो तो सभी टाइपराइटर्स एक साथ चलाओ
  if (window.innerWidth <= 767) {
    // About
    i = 0;
    document.querySelector('.typewriter-text').innerHTML = '';
    typeWriter();
    // Treatment
    j = 0;
    document.querySelector('.typewriter-text-treatment').innerHTML = '';
    typeWriterTreatment();
    // Availability
    k = 0;
    document.querySelector('.typewriter-text-availability').innerHTML = '';
    typeWriterAvailability();
    // Reviews
    m = 0;
    document.querySelector('.typewriter-text-reviews').innerHTML = '';
    typeWriterReviews();
    // Contact
    n = 0;
    document.querySelector('.typewriter-text-contact').innerHTML = '';
    typeWriterContact();
    // Location
    o = 0;
    document.querySelector('.typewriter-text-location').innerHTML = '';
    typeWriterLocation();
  } else {
    // डेस्कटॉप पर पहले जैसा सिर्फ About
    i = 0;
    document.querySelector('.typewriter-text').innerHTML = '';
    typeWriter();
  }
};


// ===== Mobile menu logic =====
const toggleBtn  = document.getElementById('mobile-menu-toggle');
const closeBtn   = document.getElementById('mobile-menu-close');
const sidebar    = document.querySelector('.mobile-sidebar');
const mobileTabs = sidebar.querySelectorAll('.tab');

// 1) Toggle → Open
toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
  toggleBtn.style.display = 'none';
});

// 2) Close बटन → Close
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
  toggleBtn.style.display = 'block';
});

// 3) टैब क्लिक → Show Content + Auto Close + Scroll
mobileTabs.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const id = btn.getAttribute('onclick').match(/showTab\('(.+?)'/)[1];
    showTab(id, e);
    sidebar.classList.remove('open');
    toggleBtn.style.display = 'block';
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Scroll-to-Top Button (mobile only) =====
(function() {
  const scrollBtn = document.getElementById('scrollToTop');
  if (!scrollBtn) return;

  // Smooth scroll to top on click
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Optional: केवल तब दिखाएँ जब यूज़र थोड़ा नीचे स्क्रॉल कर चुका हो
  window.addEventListener('scroll', () => {
    if (window.innerWidth <= 767) {
      if (window.scrollY > 200) {
        scrollBtn.style.display = 'flex';
      } else {
        scrollBtn.style.display = 'none';
      }
    }
  });

  // शुरू में छिपा रखें
  scrollBtn.style.display = 'none';
})();
