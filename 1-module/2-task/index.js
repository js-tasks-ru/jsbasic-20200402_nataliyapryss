
function print(text) {
  console.log(text);
}


function isValid(name) {
  if ( name =="" || name.includes(" ") || name.length < 4 ){
    return false;
   }else {
     return true; 
   }
}

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
