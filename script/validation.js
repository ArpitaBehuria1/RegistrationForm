var error_user = document.getElementById('err-user');
function validate_user(user_first_name,user_last_name,user_birth,user_email,father_first_name, father_last_name,mother_first_name,mother_last_name,user_nationality,user_address,user_country,user_city,home_number,mobile_number,user_gender)
{
  if(user_first_name.value.length == 0)
  {
    error_user.textContent = "error: first name can't be empty";
    user_first_name.style.borderColor='red';
    user_first_name.style.borderWidth='2px';
    return false;
  }
  else if(user_last_name.value.length == 0)
  {
    error_user.textContent = "error: last name can't be empty";
    user_last_name.style.borderColor='red';
    user_last_name.style.borderWidth='2px';
    return false;
  }
  else if(user_birth.value.length == 0)
  {
    error_user.textContent = "error: birth date can't be empty";
    user_birth.style.borderColor='red';
    user_birth.style.borderWidth='2px';
    return false;
  }
  else if(user_email.value.length == 0)
  {
    error_user.textContent = "error: email can't be empty";
    user_email.style.borderColor='red';
    user_email.style.borderWidth='2px';
    return false;
  }
  else if(father_first_name.value.length == 0)
  {
    error_user.textContent = "error: father first name can't be empty";
    father_first_name.style.borderColor='red';
    father_first_name.style.borderWidth='2px';
    return false;
  }
  else if(father_last_name.value.length == 0)
  {
    error_user.textContent = "error: father last name can't be empty";
    father_last_name.style.borderColor='red';
    father_last_name.style.borderWidth='2px';
    return false;
  }
  else if(mother_first_name.value.length == 0)
  {
    error_user.textContent = "error: mother first name can't be empty";
    mother_first_name.style.borderColor='red';
    mother_first_name.style.borderWidth='2px';
    return false;
  }
  else if(mother_last_name.value.length == 0)
  {
    error_user.textContent = "error: mother last name can't be empty";
    mother_last_name.style.borderColor='red';
    mother_last_name.style.borderWidth='2px';
    return false;
  }
  else if(user_gender.length ==0 ){
    error_user.textContent = 'error: please select gender';
    return false;
  }
  else if(user_nationality.value.length == 0)
  {
    error_user.textContent = "error: Nationality can't be empty";
    user_nationality.style.borderColor='red';
    user_nationality.style.borderWidth='2px';
    return false;
  }
  else if(user_address.value.length == 0)
  {
    error_user.textContent = "error: address can't be empty";
    // user_address.style.borderColor='red';
    // user_address.style.borderWidth='2px';
    return false;
  }
  else if(user_country.value.length == 0)
  {
    error_user.textContent = "error: country can't be empty";
    user_country.style.borderColor='red';
    user_country.style.borderWidth='2px';
    return false;
  }
  else if(user_city.value.length == 0)
  {
    error_user.textContent = "error: city can't be empty";
    user_city.style.borderColor='red';
    user_city.style.borderWidth='2px';
    return false;
  } 
  else if(home_number.value.length != 10)
  {
    error_user.textContent = 'error: telephone-home should be in 10 digits';
    home_number.style.borderColor='red';
    home_number.style.borderWidth='2px';
    return false;
  }
  else if(mobile_number.value.length != 10)
  {
    error_user.textContent = 'error: telephone-mobile should be in 10 digits';
    mobile_number.style.borderColor='red';
    mobile_number.style.borderWidth='2px';
    return false;
  }
  else{
    return true;
  }
}
function validate_qualification(hsc_name,hsc_board,hsc_percentage,ssc_name,ssc_board,ssc_percentage,current_pursuing,current_institution,overall_percentage,backlog){
  alert('inside function');
  if(hsc_name.value.length == 0)
  {
    error_user.textContent = "error: HSC Institution Name can't be empty";
    hsc_name.style.borderColor='red';
    hsc_name.style.borderWidth='2px';
    return false;
  }
  else if(hsc_board.value.length == 0)
  {
    error_user.textContent = "error: please select HSC Board";
    hsc_board.style.borderColor='red';
    hsc_board.style.borderWidth='2px';
    return false;
  }
  else if(hsc_percentage.value.length == 0 || (hsc_percentage.value > 100 || hsc_percentage.value < 0))
  {
    if(hsc_percentage.value > 100 || hsc_percentage.value < 0)
    {
      error_user.textContent = "error: HSC Board Percentage must be in (0-100)";
    }
    else{
      error_user.textContent = "error: please enter HSC Board Percentage";
    }
    hsc_percentage.style.borderColor='red';
    hsc_percentage.style.borderWidth='2px';
    return false;
  }
  else if(ssc_name.value.length == 0)
  {
    error_user.textContent = "error: SSC Institution Name can't be empty";
    ssc_name.style.borderColor='red';
    ssc_name.style.borderWidth='2px';
    return false;
  }
  else if(ssc_board.value.length == 0)
  {
    error_user.textContent = "error: please select SSC Board";
    ssc_board.style.borderColor='red';
    ssc_board.style.borderWidth='2px';
    return false;
  }
  else if(ssc_percentage.value.length == 0 || (ssc_percentage.value > 100 || ssc_percentage.value < 0))
  {
    if((ssc_percentage.value > 100 || ssc_percentage.value < 0))
    {
      error_user.textContent = "error: SSC Board Percentage must be in (0-100)";
    }
    else{
      error_user.textContent = "error: please enter SSC Board Percentage";
    }
    ssc_percentage.style.borderColor='red';
    ssc_percentage.style.borderWidth='2px';
    return false;
  }
  else if(current_pursuing.value.length == 0)
  {
    error_user.textContent = "error: Current Pursuing can't be empty";
    current_pursuing.style.borderColor='red';
    current_pursuing.style.borderWidth='2px';
    return false;
  }
  else if(current_institution.value.length == 0)
  {
    error_user.textContent = "error: please enter current institution";
    current_institution.style.borderColor='red';
    current_institution.style.borderWidth='2px';
    return false;
  }
  else if(overall_percentage.value.length == 0 || (overall_percentage.value > 100 || overall_percentage.value < 0))
  {
    if(overall_percentage.value > 100 || overall_percentage.value < 0)
    {
      error_user.textContent = "error: Overall Percentage must be in (0-100)";
    }
    else{
      error_user.textContent = "error: please enter Overall Percentage";
    }  
    overall_percentage.style.borderColor='red';
    overall_percentage.style.borderWidth='2px';
    return false;
  }
  else if(backlog.value.length == 0)
  {
    error_user.textContent = "error: please select backlog";
    backlog.style.borderColor='red';
    backlog.style.borderWidth='2px';
    return false;
  }
  else{
    return true;
  }

}

function validate_files(passport_photo,hsc_mark_sheet,ssc_mark_sheet,all_sem)
{
 max_size = 4000000;
 max_size_all = 10000000;
 const passport_pic_types = ['image/jpeg', 'image/png'];
 const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword'];
 const all_sem_types = ['application/pdf', 'application/msword'];

 if(passport_photo.files.length == 0)
 {
  error_user.textContent = "error: please upload passport photograph(equal or less than 4MB)";
  return false; 
 }
 else if(passport_photo.files[0].size > max_size)
 {
  if (!passport_pic_types.includes(passport_photo.files[0].type)) {
    error_user.textContent = "error: passport photograph type not supported.";
  }
  else{
  error_user.textContent = "error: passport photograph size must be equal or less than 4MB";
  }
  return false;
 }
 else if(hsc_mark_sheet.files.length == 0)
 {
  error_user.textContent = "error: please upload HSC mark sheet(equal or less than 4MB)";
  return false;
 }
 else if(hsc_mark_sheet.files[0].size > max_size )
 {
  if (!allowedTypes.includes(hsc_mark_sheet.files[0].type)) {
    error_user.textContent = "error: HSC mark sheet type not supported.";
  }
  else{
    error_user.textContent = "error: HSC mark sheet size must be equal or less than 4MB";
  }
  return false; 
 }
 else if(ssc_mark_sheet.files.length == 0)
 {
  error_user.textContent = "error: please upload SSC mark sheet(equal or less than 4MB)";
  return false;
 }
 else if(ssc_mark_sheet.files[0].size > max_size)
 {
  if (!allowedTypes.includes(ssc_mark_sheet.files[0].type)) {
    error_user.textContent = "error: SSC mark sheet type not supported.";
  }
  else{
    error_user.textContent = "error: SSC mark sheet size must be equal or less than 4MB";
  }
  return false; 
 }
 else if(all_sem.files.length == 0)
 {
  error_user.textContent = "error: please upload All semester marksheet(equal or less than 10MB)";
  return false;
 }
 else if(all_sem.files[0].size > max_size_all)
 {
  if (!all_sem_types.includes(all_sem.files[0].type)) {
    error_user.textContent = "error: All semester marksheet type not supported.";
  }
  else{
    error_user.textContent = "error: All semester marksheet size must be equal or less than 10MB";
  }
  return false; 
 }
 else{
  return true;
 }
}