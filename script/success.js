var success_text = document.getElementById('success-head-text');
const urlParams = new URLSearchParams(window.location.search);
const key = urlParams.get('email');
if (localStorage.getItem(key)) {
    let data = JSON.parse(localStorage.getItem(key));
    success_text.textContent = 'Hello '+data.user_first_name;
} 