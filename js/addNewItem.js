$('#addNewItem').click(function(){
    var itemName = $('#itemName').val();
    var itemPrice = $('#itemPrice').val();
    var itemAmount = $('#itemAmount').val();
    var itemPicUrl = $('#itemPicUrl').val();
    $.ajax({
        url:'https://js.kchen.club/B05106052/insert',
        type:'POST',
        data:{
            name:itemName,
            price:itemPrice,
            count:itemAmount,
            image:itemPicUrl
        },
        success:function(returnMsg){
            console.log(returnMsg)
        },
        error:function(errorMsg){
            console.log(errorMsg)
        }
    })
});