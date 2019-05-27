$(document).ready(function(){
    $.ajax({
        url:'https://js.kchen.club/B05106052/query',
        type:'GET',
        success:function(data){
            console.log(data);
            var array=data.items
            array.forEach(data => {
                var li = `<div class="col-*"><div class="item"><img src="${data.image}" class="image"><h3 class="name">${data.name}</h3><p class="price">NTD ${data.price}</p></div></div>`
                $('#product-list').append(li)
            });
        }
    })

    $('#query').click(function(){
        $('#product-list').empty();
        $.ajax({
            url:'https://js.kchen.club/B05106052/query',
            type:'GET',
            success:function(data){
                console.log(data);
                var array=data.items
                array.forEach(data => {
                    var li = `<div class="col-*"><div class="item"><img src="${data.image}" class="image"><h3 class="name">${data.name}</h3><p class="price">NTD ${data.price}</p></div></div>`
                    $('#product-list').append(li)
                });
            }
        })
    });
    var checkPriceFilter=()=>{
        var priceUpper = parseInt($('#priceUpper').val());
        var priceLower = parseInt($('#priceLower').val());
        console.log(priceLower)
        console.log(priceUpper)
        if(!priceLower || !priceUpper){
            return '1';
        }
        else if(priceLower > priceUpper){
            return '2';
        }
        else if(priceLower < priceUpper){
            return '3';
        }
        else if(priceLower === priceUpper){
            return '4';
        }
    }

    $('#priceFilter').click(function(){
        console.log(checkPriceFilter());
        if(checkPriceFilter() === '1'){
            alert("Please Fill Both Upper And Lower!")
        }
        else if(checkPriceFilter() === '2'){
            alert("Lower cant bigger that upper!")
        }
        else if(checkPriceFilter() === '4'){
            alert("Upper cant same with lower")
        }
        else if(checkPriceFilter() === '3'){
            $('#product-list').empty();
            var priceUpper = $('#priceUpper').val();
            var priceLower = $('#priceLower').val();
            $.ajax({
                url:'https://js.kchen.club/B05106052/query',
                type:'GET',
                success:function(data){
                    var array=data.items
                    var li = array
                                .filter(item => item.price<priceUpper && item.price>priceLower)
                                .map(data=>`<div class="col-*"><div class="item"><img src="${data.image}" class="image"><h3 class="name">${data.name}</h3><p class="price">NTD ${data.price}</p></div></div>`)
                                .reduce((acc, val) =>acc+val);
                    $('#product-list').append(li)
                }
            })
        }
         
    })
})