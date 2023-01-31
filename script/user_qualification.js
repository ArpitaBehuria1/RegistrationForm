/* data for user qualification details */
var hsc_name = document.getElementById('hsc-name');
var hsc_board = document.getElementById('hsc-board');
var hsc_percentage = document.getElementById('hsc-percentage');
var ssc_name = document.getElementById('ssc-name');
var ssc_board = document.getElementById('ssc-board');
var ssc_percentage = document.getElementById('ssc-percentage');
var current_pursuing = document.getElementById('current-pursuing');
var current_institution = document.getElementById('current-institution');
var overall_percentage = document.getElementById('overall-percentage');
var backlog = document.getElementById('backlog');
var qualification_btn = document.getElementById('qualification-btn');
var error_field = document.querySelectorAll('.error-field');
var user_email = document.getElementById('email');
error_field.forEach(error => {
    error.addEventListener('input',function(){
      if(error.style.borderColor=='red'){
      error.style.borderColor='grey';
      error.style.borderWidth='1px';
      error_user.textContent='';
      }
   });
  });
qualification_btn.addEventListener('click',function(event){
    var isValid = validate_qualification(hsc_name,hsc_board,hsc_percentage,ssc_name,ssc_board,ssc_percentage,current_pursuing,current_institution,overall_percentage,backlog);
    if(isValid)
    {
        const urlParams = new URLSearchParams(window.location.search);
        const key = urlParams.get('email');
        user_email.setAttribute("value",key);
        if (localStorage.getItem(key)) {
            let data = JSON.parse(localStorage.getItem(key));
            data.hsc_institution_name = hsc_name.value;
            data.hsc_board = hsc_board.value;
            data.hsc_percentage = hsc_percentage.value;
            data.ssc_institution_name = ssc_name.value;
            data.ssc_board = ssc_board.value;
            data.ssc_percentage = ssc_percentage.value;
            data.current_pursuing = current_pursuing.value;
            data.current_institution = current_institution.value;
            data.overall_percentage = overall_percentage.value;
            data.backlog = backlog.value;
            localStorage.setItem(key, JSON.stringify(data));
          } else {
           alert('something went wrong please fill the form from first.');
        }
    }
    else{
        event.preventDefault();
    }
  });