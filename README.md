## ES6
1. 使用arrow function
* index.js
````
var newPage=(totalItem)=>{
        var totalPage = Math.ceil(totalItem/20);
        for(var i =1;i<=totalPage;i++){
            var li = `<li id="page${i}" class="page-item"><a class="page-link" href="#">${i}</a></li>`;
            $('#page-number').append(li);
        }
    }
````

2. 使用template string
* index.js
````
var li = `<div class="col-*"><div class="item"><img src="${array[i].image}" class="image"><h3 class="name">${array[i].name}</h3><p class="price">NTD ${array[i].price}</p></div></div>`;
````
2. 使用ES6 處理array的function(map,filter,reduce)
* index.js
````
var li = array
        .filter(item => item.price<priceUpper && item.price>priceLower)
        .map(data=>`<div class="col-*"><div class="item"><img src="${data.image}" class="image"><h3 class="name">${data.name}</h3><p class="price">NTD ${data.price}</p></div></div>`)
        .reduce((acc, val) =>acc+val);
````