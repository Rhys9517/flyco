var shop = (function() {
    var $div = document.querySelector('#go_shop'),
        $spanOne = document.querySelector('#reduce'),
        $input = document.querySelector('#buy_num'),
        $spanTow = document.querySelector('#add'),
        $cart = document.querySelector('#cart');
    var num = $input.innerHTML;
    return {
        init() {
            this.event();
        },
        event() {
            var _this = this;
            $spanOne.onclick = function(e) {
                e = e.event || window.event;
                num--;
                if (num <= 0) {
                    num = 0
                }
                $input.innerHTML = num;
                _this.setItem(num)
                console.log(num)
            }
            $spanTow.onclick = function(e) {
                e = e.event || window.event;
                num++;
                $input.innerHTML = num;
                _this.setItem(num)
                console.log(num)
            }
        },
        //把商品储存到本地
        setItem(data) {
            // 现获取原有数据
            var shoppingList = localStorage.getItem('shoppingList') || '[]';
            shoppingList = JSON.parse(shoppingList);
            //把新数据添加到
            shoppingList.push(data);
            //把全部数据储存到本地
            localStorage.shoppingList = JSON.stringify(shoppingList)
        }
    }
}());
shop.init()
