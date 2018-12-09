var Home = {
  init: function () {
    this.getGoods()
  },
  getGoods: function () {
    $.ajax({
      type: 'GET',
      url: '/flyco/app/static/json/goods.json',
      success: function (res) {
        let $li = ''
        res.forEach(item => {
          $li += `<li class="goods-item goods-item-l-2">
              <p class="title">${item.title}</p>
              <p class="month-num">${item.monthNum}</p>
              <p class="price">${item.price}</p>
              <div class="figure"><img src="${item.figure}"></div>
          </li>`
        });
        $('#goodsList').append($li)
      }
    })
  }
};
(function () {
  Home.init()
})()
