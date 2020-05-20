function makeFriendsList(friends) {
  let listLi = friends
         .map ((item) => item.firstName + ' ' + item.lastName)
         .map ((item) => `<li>${item}</li>`)
         .join(' ');
 
     let listUl = `<ul>${listLi}</ul>`;

     let ul = document.createElement('ul');

      //ul.insertAdjacentHTML('afterbegin', listLi );
      ul.innerHTML = listLi;

      return ul;
};
