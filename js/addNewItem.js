$('#addNewItem').click(function(){
    var itemName = $('#itemName').val();
    var itemPrice = parseInt($('#itemPrice').val());
    var itemAmount = parseInt($('#itemAmount').val());
    var itemPicUrl = $('#itemPicUrl').val();
    var dataToPost = {
        item:{
            name:itemName,
            price:itemPrice,
            count:itemAmount,
            image:itemPicUrl
        }};

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
});