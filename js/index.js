$(document).ready(function(){
    $.ajax({
        url:'https://js.kchen.club/B05106052/query',
        type:'GET',
        success:function(data){
            console.log(data);
            var array=data.items
            array.forEach(data => {
                $img = $('<img>').attr('class', 'image').attr('src', data.image)
                $h3 = $('<h3>').attr('class', 'name').text(data.name)
                $p = $('<p>').attr('class', 'price').text('NT$ ' + data.price)
                $item = $('<div>').attr('class', 'item').append($img).append($h3).append($p)
                $col = $('<div>').attr('class', 'col-*').append($item)
                $('#product-list').append($col)
            });
            
        }

    })
})