
function checkSpam(str){
  str = str.toLowerCase();
  if(str.includes('1xBet')  || str.includes('1xbet') ||str.includes('XXX') || str.includes('xxx')){
    return true;
  } else {
    return false;
  }
}
