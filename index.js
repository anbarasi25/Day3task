function areEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  let obj1 = { name: "person 1", age: 5 };
  let obj2 = { age: 5, name: "person 1" };
  
  if (areEqual(obj1, obj2)) {
    console.log("The JSON objects are equal.");
  } else {
    console.log("The JSON objects are not equal.");
  }
// ...

data.forEach((country) => {
    const countryName = country.name.common;
    const region = country.region;
    const subRegion = country.subregion;
    const population = country.population;
  
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>Country:</strong> ${countryName}<br>
      <strong>Region:</strong> ${region}<br>
      <strong>Sub-Region:</strong> ${subRegion}<br>
      <strong>Population:</strong> ${population}
    `;
  
    flagList.appendChild(listItem);
  });
  
  // ...
    