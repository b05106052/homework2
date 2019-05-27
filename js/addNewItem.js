$('#addNewItem').click(function(){
    var itemName = $('#itemName').val();
    var itemPrice = parseInt($('#itemPrice').val());
    var itemAmount = parseInt($('#itemAmount').val());
    var itemPicUrl = $('#itemPicUrl').val();
    var dataToPost = JSON.stringify({
        item:{
            name:itemName,
            price:itemPrice,
            count:itemAmount,
            image:itemPicUrl
        }});
    console.log(dataToPost)
    $.ajax({
        type:'POST',
        dataType: 'json',
        data:dataToPost,
        url:'https://js.kchen.club/B05106052/insert',
        success:function(returnMsg){
            console.log(returnMsg)
        },
        error:function(errorMsg){
            console.log(errorMsg)
        }
    })
});