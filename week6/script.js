// SCRIPTING STARTS HERE

let userName = 'Guest';

// Prompt user for name immediately when script runs
function askUserName() {
  const name = prompt('Please enter your name:', '');
  if (name && name.trim().length > 0) {
    userName = name.trim();
  }
}

// Function to toggle message visibility and update greeting
function toggleMessage() {
  const message = document.getElementById('message');
  if (message.classList.contains('hidden')) {
    message.textContent = `Hello, ${userName}! You toggled this message.`;
  }
  message.classList.toggle('hidden');
}

// Function to change header color on mouseover
function headerMouseOver() {
  const header = document.getElementById('header-title');
  header.style.color = '#e75423';
}

// Function to reset header color on mouseout
function headerMouseOut() {
  const header = document.getElementById('header-title');
  header.style.color = '';
}

// Function to display live keyboard input
function displayKeyboardInput(event) {
  const displayText = document.getElementById('display-text');
  displayText.textContent = event.target.value;
}

/* ================================
   🔢 Counter / Button Game Logic
================================= */
let count = 0;

function updateCounterDisplay() {
  document.getElementById('counter').textContent = count;
}

function incrementCounter() {
  count++;
  updateCounterDisplay();
}

function decrementCounter() {
  count--;
  updateCounterDisplay();
}

function resetCounter() {
  count = 0;
  updateCounterDisplay();
}


/* ================================
   📚 Collapsible FAQ Logic
================================= */
function setupFAQToggle() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isVisible = answer.style.display === 'block';

      // Close all answers before toggling
      document.querySelectorAll('.faq-answer').forEach(ans => {
        ans.style.display = 'none';
      });

      // Toggle current one
      answer.style.display = isVisible ? 'none' : 'block';
    });
  });
}


/* ================================
   🧩 Tabbed Interface Logic
================================= */
function setupTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add 'active' to clicked button and target content
      button.classList.add('active');
      const tabId = button.dataset.tab;
      document.getElementById(tabId).classList.add('active');
    });
  });
}


/* ================================
   🔗 Setup All Event Listeners
================================= */
function setupEventListeners() {
  // Original Features
  const toggleBtn = document.getElementById('toggle-btn');
  toggleBtn.addEventListener('click', toggleMessage);

  const header = document.getElementById('header-title');
  header.addEventListener('mouseover', headerMouseOver);
  header.addEventListener('mouseout', headerMouseOut);

  const keyboardInput = document.getElementById('keyboard-input');
  keyboardInput.addEventListener('input', displayKeyboardInput);

  // Counter buttons
  document.getElementById('increment')?.addEventListener('click', incrementCounter);
  document.getElementById('decrement')?.addEventListener('click', decrementCounter);
  document.getElementById('reset')?.addEventListener('click', resetCounter);

  // New Features
  setupFAQToggle();
  setupTabs();
}


/* =====================================
   ✅ FORM VALIDATION LOGIC
===================================== */

function setupFormValidation() {
  const form = document.getElementById('registration-form');

  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  const passwordInput = document.getElementById('form-password');
  const confirmPasswordInput = document.getElementById('form-confirm-password');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  const confirmPasswordError = document.getElementById('confirm-password-error');
  const successMessage = document.getElementById('form-success');

  const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isStrongPassword = password => {
    // Must contain at least:
    // - 1 letter
    // - 1 number
    // - 1 special character
    // - 8 characters minimum
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
    return pattern.test(password);
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop form from submitting

    let isValid = true;

    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    successMessage.classList.add('hidden');

    // Validate name
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required.';
      isValid = false;
    }

    // Validate email
    if (!isValidEmail(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Validate password strength
    if (!isStrongPassword(passwordInput.value)) {
      passwordError.textContent = 'Password must be at least 8 characters, include a letter, a number, and a special character.';
      isValid = false;
    }

    // Confirm password
    if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordError.textContent = 'Passwords do not match.';
      isValid = false;
    }

    // If valid, show success and reset form
    if (isValid) {
      successMessage.classList.remove('hidden');
      form.reset();
    }
  });
}


  // Real-time validation
  // [nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
  //   input.addEventListener('input', () => {
  //     validateField();
  //     successMessage.classList.add('hidden'); // Hide success message on retype
  //   });
  // });

  // Final form submission
  // form.addEventListener('submit', function (e) {
  //   e.preventDefault();
  //   const isFormValid = validateField();

  //   if (isFormValid) {
  //     successMessage.classList.remove('hidden');
  //     form.reset();
  //   } else {
  //     successMessage.classList.add('hidden');
  //   }
  // });
// }



// Run prompt and attach all event listeners
askUserName();
setupEventListeners();
setupFormValidation(); // <-- Form Validation Listener


