const courses = {
    'html-css': {
        title: 'Beginner HTML & CSS',
        description: 'Learn to build stunning websites with HTML and CSS. 4-week course, online or offline (Mumbai).',
        price: '₹5,000 (Online) / ₹7,000 (Offline)',
        format: 'Self-paced videos or weekly in-person classes',
        preview: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
    },
    'javascript': {
        title: 'JavaScript Essentials',
        description: 'Master interactive web development with JavaScript. 6-week course, online or offline (Mumbai).',
        price: '₹6,500 (Online) / ₹8,500 (Offline)',
        format: 'Live Zoom or in-person classes',
        preview: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    'react': {
        title: 'React for Beginners',
        description: 'Create dynamic web apps with React. 5-week course, online only.',
        price: '₹7,000',
        format: 'Self-paced with weekly Q&A',
        preview: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
};

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');
    if (name && email && message) {
        formMessage.textContent = 'Message sent! We’ll get back to you soon.';
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        formMessage.textContent = 'Please fill all fields.';
    }
}

function processPayment() {
    const cardName = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCvc = document.getElementById('card-cvc').value;
    const paymentMessage = document.getElementById('payment-message');
    if (cardName && cardNumber && cardExpiry && cardCvc) {
        paymentMessage.textContent = 'Payment processed! You’re enrolled!';
        document.getElementById('card-name').value = '';
        document.getElementById('card-number').value = '';
        document.getElementById('card-expiry').value = '';
        document.getElementById('card-cvc').value = '';
    } else {
        paymentMessage.textContent = 'Please fill all fields.';
    }
}

function loadCourseDetails() {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('id');
    if (courseId && courses[courseId]) {
        document.getElementById('course-title').textContent = courses[courseId].title;
        document.getElementById('course-description').textContent = courses[courseId].description;
        document.getElementById('course-price').textContent = `Price: ${courses[courseId].price}`;
        document.getElementById('course-format').textContent = `Format: ${courses[courseId].format}`;
        document.getElementById('course-preview').src = courses[courseId].preview;
        document.getElementById('enroll-button').href = `checkout.html?id=${courseId}`;
    }
}

function loadCheckoutDetails() {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('id');
    if (courseId && courses[courseId]) {
        document.getElementById('checkout-title').textContent = `Purchase: ${courses[courseId].title}`;
        document.getElementById('checkout-price').textContent = `Total: ${courses[courseId].price.split('/')[0].trim()}`;
    }
}

if (window.location.pathname.includes('course-details.html')) {
    loadCourseDetails();
} else if (window.location.pathname.includes('checkout.html')) {
    loadCheckoutDetails();
}
