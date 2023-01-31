/* data for user personal information */
var user_first_name = document.getElementById('user-name-first');
var user_last_name = document.getElementById('user-name-last');
var user_birth = document.getElementById('date-of-birth');
var user_email = document.getElementById('email');
var form = document.getElementById('registration');
var father_first_name = document.getElementById('father-name-first');
var father_last_name = document.getElementById('father-name-last');
var mother_first_name = document.getElementById('mother-name-first');
var mother_last_name = document.getElementById('mother-name-last');
var user_nationality = document.getElementById('nationality');
var user_address = document.getElementById('address');
var user_country = document.getElementById('country');
var user_city = document.getElementById('city');
var user_home_number = document.getElementById('home-number');
var user_mobile_number = document.getElementById('mobile-number');
var user_gender =form.elements["gender"];
var personal_info_btn = document.getElementById('personal-info-btn');
var error_field = document.querySelectorAll('.error-field');



error_field.forEach(error => {
  error.addEventListener('input',function(){
    if(error.style.borderColor=='red'){
    error.style.borderColor='grey';
    error.style.borderWidth='1px';
    error_user.textContent='';
    }
 });
});



personal_info_btn.addEventListener('click',function(event){
  var isValid = validate_user(user_first_name,user_last_name,user_birth,user_email,father_first_name,father_last_name,mother_first_name,mother_last_name,user_nationality,user_address,user_country,user_city,user_home_number,user_mobile_number,user_gender.value);
  if(isValid)
  {
    let data = {
      user_first_name: user_first_name.value,
      user_last_name: user_last_name.value,
      date_of_birth: user_birth.value,
      email:user_email.value,
      father_first_name:father_first_name.value,
      father_last_name:father_last_name.value,
      mother_first_name:mother_first_name.value,
      mother_last_name:mother_last_name.value,
      nationality:user_nationality.value,
      address:user_address.value,
      country:user_country.value,
      city:user_city.value,
      gender:user_gender.value,
      home_number:user_home_number.value,
      mobile_number:user_mobile_number.value
    };
    localStorage.setItem(user_email.value, JSON.stringify(data));
    user_email.setAttribute("value", user_email.value);
  }
  else{
    event.preventDefault();
  }
  
});

