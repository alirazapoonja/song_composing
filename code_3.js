"use strict";
let moviename = '';
moviename = prompt('What is your movie name?') || '';
let lowercase = moviename.toLowerCase();
let uppercase = moviename.toUpperCase();
let titlecase = moviename.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
if (moviename !== null && moviename !== '') {
    alert(`Hello Amitabh Bachchan, Here are your movie name in:
Lowercase: ${lowercase}
uppercase: ${uppercase}
Titlecase: ${titlecase}`);
}
else {
    alert('Please fill your movie name !');
}
