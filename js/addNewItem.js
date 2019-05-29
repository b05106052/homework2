$('#addNewItem').on('click',function(){
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
    $.post('https://js.kchen.club/B05106052/insert', dataToPost, function(response) {
            if (response) {
                // 伺服器有回傳資料
                if (response.result) {
                    $('#message').text('新增成功')
                    console.log(response.item)
                    $('#dialog').modal('show')
                } else {
                    $('#message').text('新增失敗')
                    console.log(response.message)
                    $('#dialog').modal('show')
                }
            } else {
                $('#message').text('伺服器出錯')
                $('#dialog').modal('show')
            }
        })
});