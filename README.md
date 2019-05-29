## 前端framework
* Jquery(CDN)

## UI
* 主要利用bootstrap framwork

## JAVASCRIPT部分(ES6)
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
3. 使用ES6 處理array的function(map,filter,reduce)
* index.js
````
var li = array
        .filter(item => item.price<priceUpper && item.price>priceLower)
        .map(data=>`<div class="col-*"><div class="item"><img src="${data.image}" class="image"><h3 class="name">${data.name}</h3><p class="price">NTD ${data.price}</p></div></div>`)
        .reduce((acc, val) =>acc+val);
````

4. 使用ajax去呼叫API
````
$.ajax({
        type:'POST',
        data:dataToPost,
        url:'https://js.kchen.club/B05106052/insert',
        success:function(returnMsg){
            $('#message').text('新增成功')
            console.log(returnMsg)
        },
        error:function(errorMsg){
            $('#message').text('新增失敗')
            console.log(errorMsg)
        }
    })
````

## 額外功能
* 價格篩選，包含三個判斷
1. 價格下線不能高過上限
2. 不能空任何一個
3. 兩個不能為相同
![image](https://github.com/b05106052/homework2/price.png)

|-- Desktop 
|-- README.md 
|-- addNewItem.html 
|-- index.html 
|-- package-lock.json 
|-- price.png