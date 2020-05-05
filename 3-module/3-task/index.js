function camelize(str){
  let arr = str.split('-');

  let arr1 = arr.map((item, index) => index == 0? item :item.charAt(0).toUpperCase() + item.slice(1));
 
   return arr1.join(''); 

}