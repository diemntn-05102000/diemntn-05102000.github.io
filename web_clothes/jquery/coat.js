axios.get('http://localhost:3000/coat').then((data)=>
{
    console.log(data.data);
    // const data = JSON.parse(data.data);
    data.data.data.forEach(function(element) {
        $('<div class="col-sm-2 khoiPic">'+'<a href="#" class="card">'+ '<img class="card-img-top" src="./public/images/'+ element.img +'">'+ '<div class="card-body">'+
      '<p class="card-text">'+ element.item_name +'</p>'+
      '<h6 class="card-title">'+ element.price +' ¥</h6>'+
      '<a href="#" class="btn btn-outline-secondary">かごに追加</a>'
      +'</div>'
      +'</a>'+'</div>')
      .appendTo('.container-coat');
    });
});