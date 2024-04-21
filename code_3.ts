let moviename :string = '';

moviename = prompt ('What is your movie name?') || '';

let lowercase :string = moviename.toLowerCase();
let uppercase :string = moviename.toUpperCase();
let titlecase :string = moviename.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('')

if(moviename !== null && moviename !== ''){
alert(`Hello Amitabh Bachchan, Here are your movie name in:
Lowercase: ${lowercase}
uppercase: ${uppercase}
Titlecase: ${titlecase}`)    
}
else{
    alert('Please fill your movie name !')}