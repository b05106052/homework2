$(document).ready(function(){
    var newPage=(totalItem)=>{
        var totalPage = Math.ceil(totalItem/20);
        for(var i =1;i<=totalPage;i++){
            var li = `<li id="page${i}" class="page-item"><a class="page-link" href="#">${i}</a></li>`;
            $('#page-number').append(li);
        }
    }

    $('body').on('click','.page-item',function(){
        $('#priceUpper').val('');
        $('#priceLower').val('');
        $('#product-list').empty()
        $('.page-item').attr('class','page-item');
        console.log($(this).text());
        $(this).attr('class','page-item active');
        var toDisplayRange = parseInt($(this).text());
        toDisplayRange = (toDisplayRange * 20) ;
        var startDisplay = toDisplayRange - 20;
        $.ajax({
            url:'https://js.kchen.club/B05106052/query',
            type:'GET',
            success:function(data){
                var array=data.items
                for(var i = startDisplay;i<toDisplayRange;i++){
                    var li = `<div class="col-*"><div class="item"><img src="${array[i].image}" class="image"><h3 class="name">${array[i].name}</h3><p class="price">NTD ${array[i].price}</p></div></div>`;
                    $('#product-list').append(li);
                }
            },
            error:function(e){
                alert(e);
            }
        })
    })

    $.ajax({
        url:'https://js.kchen.club/B05106052/query',
        type:'GET',
        success:function(data){
            var array=data.items;
            newPage(array.length);
            $('#page1').attr('class','page-item active');
            for(var i = 0;i<20;i++){
                var li = `<div class="col-*"><div class="item"><img src="${array[i].image}" class="image"><h3 class="name">${array[i].name}</h3><p class="price">NTD ${array[i].price}</p></div></div>`;
                $('#product-list').append(li);
            }
        },
        error:function(e){
            alert(e);
        }
    })

    $('body').on('click','#query',function(){
        $('#priceUpper').val('');
        $('#priceLower').val('');
        $('#product-list').empty(); 
        $.ajax({
            url:'https://js.kchen.club/B05106052/query',
            type:'GET',
            success:function(data){
                console.log(data);
                var array=data.items
                $('.page-item').attr('class','page-item');
                $('#page1').attr('class','page-item active');
                for(var i = 0;i<20;i++){
                    var li = `<div class="col-*"><div class="item"><img src="${array[i].image}" class="image"><h3 class="name">${array[i].name}</h3><p class="price">NTD ${array[i].price}</p></div></div>`;
                    $('#product-list').append(li);
                }
            },
            error:function(e){
                alert(e);
            }
        })
    });



    var checkPriceFilter=()=>{
        var priceUpper = parseInt($('#priceUpper').val());
        var priceLower = parseInt($('#priceLower').val());
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
                    $('.page-item').attr('class','page-item');
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

