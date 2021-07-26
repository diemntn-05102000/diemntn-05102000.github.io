
axios.get('http://localhost:3000').then((data)=>
  {
    const data_item = data.data.data[0];
    const data_skirt = data.data.data[1];
    const data_coat = data.data.data[2];
    const data_pants = data.data.data[3];
    console.log(data_item);
    for (let i = 0; i < 10; i++) {

      const item = data_item[i];  

      console.log(item);
      $('<div class="col-sm-2 khoiPic">'+'<a href="#" class="card">'+ '<img class="card-img-top" src="./public/images/'+ item.img +'">'+ '<div class="card-body">'+
      '<p class="card-text">'+ item.item_name +'</p>'+
      '<h6 class="card-title">'+ item.price +' ¥</h6>'+
      '<a href="#" class="btn btn-outline-secondary">かごに追加</a>'
      +'</div>'
      +'</a>'+'</div>')
      .appendTo('div.hot-item');
      
      
    }
    for (let i = 0; i < 5; i++) {
      const skirt = data_skirt[i];      
      $('<div class="col-sm-2 khoiPic">'+'<a href="#" class="card">'+ '<img class="card-img-top" src="./public/images/'+ skirt.img +'">'+ '<div class="card-body">'+
      '<p class="card-text">'+ skirt.item_name +'</p>'+
      '<h6 class="card-title">'+ skirt.price +' ¥</h6>'+
      '<a href="#" class="btn btn-outline-secondary">かごに追加</a>'
      +'</div>'
      +'</a>'+'</div>')
      .appendTo('div.hot-skirt');
      
      const coat = data_coat[i];      
      $('<div class="col-sm-2 khoiPic">'+'<a href="#" class="card">'+ '<img class="card-img-top" src="./public/images/'+ coat.img +'">'+ '<div class="card-body">'+
      '<p class="card-text">'+ coat.item_name +'</p>'+
      '<h6 class="card-title">'+ coat.price +' ¥</h6>'+
      '<a href="#" class="btn btn-outline-secondary">かごに追加</a>'
      +'</div>'
      +'</a>'+'</div>')
      .appendTo('div.hot-coat');

      const pants = data_pants[i];      
      $('<div class="col-sm-2 khoiPic">'+'<a href="#" class="card">'+ '<img class="card-img-top" src="./public/images/'+ pants.img +'">'+ '<div class="card-body">'+
      '<p class="card-text">'+ pants.item_name +'</p>'+
      '<h6 class="card-title">'+ pants.price +' ¥</h6>'+
      '<a href="#" class="btn btn-outline-secondary">かごに追加</a>'
      +'</div>'
      +'</a>'+'</div>')
      .appendTo('div.hot-pants');
      
      
    }
  
  }).catch(err=>{console.log(err);

  });
