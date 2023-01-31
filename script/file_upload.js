const passport_photo = document.getElementById('passport');
const hsc_mark_sheet = document.getElementById('hsc-mark-sheet');
const ssc_mark_sheet = document.getElementById('ssc-mark-sheet');
const all_sem = document.getElementById('all-sem');
const inputs = document.querySelectorAll('input[type="file"]');
var user_email = document.getElementById('email');
var file_btn = document.getElementById('file-btn');

const maxSizes = {
    'image/jpeg': 1000000, // 1 MB in bytes
    'image/png': 2000000, // 2 MB in bytes
  };
  
  inputs.forEach((input) => {
    input.addEventListener('change', (event) => {
       error_user.textContent='';
    });
  });

file_btn.addEventListener('click',function(event){
 
 isValid = validate_files(passport_photo,hsc_mark_sheet,ssc_mark_sheet,all_sem);

 if(isValid)
 {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('email');
    user_email.setAttribute("value",key);
    if (localStorage.getItem(key)) {
        const passport_photo_reader = new FileReader();
        passport_photo_reader.readAsDataURL(passport_photo.files[0]);
      
        passport_photo_reader.addEventListener("load",() => {
          localStorage.setItem(key+'-passport', passport_photo_reader.result);
          console.log('success');
        });
      
        const hsc_marksheet_reader = new FileReader();
        hsc_marksheet_reader.readAsDataURL(hsc_mark_sheet.files[0]);
      
        hsc_marksheet_reader.addEventListener("load",() => {
          localStorage.setItem(key+'-hsc-marksheet', hsc_marksheet_reader.result);
          console.log('success');
        });

        const ssc_marksheet_reader = new FileReader();
        ssc_marksheet_reader.readAsDataURL(ssc_mark_sheet.files[0]);
      
        ssc_marksheet_reader.addEventListener("load",() => {
          localStorage.setItem(key+'-ssc-marksheet', ssc_marksheet_reader.result);
          console.log('success');
        });

        const all_sem_reader = new FileReader();
        all_sem_reader.readAsDataURL(all_sem.files[0]);
      
        all_sem_reader.addEventListener("load",() => {
          localStorage.setItem(key+'-all-sem', all_sem_reader.result);
          console.log('success');
        });
        
        
      } else {
       alert('something went wrong please fill the form from first.');
    }
 }
 else{
    event.preventDefault();
 }

});
