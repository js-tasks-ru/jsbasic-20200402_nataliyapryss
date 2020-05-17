function showSalary(data, age) {
      
  let filterUser = data.filter((user) => {
    return user.age <= age;
  });
  let salers = filterUser.map((user) =>{
  return `${user.name}, ${user.balance}`;
  });

let saler = salers.join("\n");
return saler;
};