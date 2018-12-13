<script src="../my_js/ajax_promise.js"></script>

var shop = (function () {
    var $ul = document.querySelector('ul');
    return {
        init() {
            this.event();
            this.getData();
        },
        event() {
            var _this = this;
            $ul.onclick = function (e) {
                e = e.event || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName === 'BUTTON') {
                    //获取商品数量
                    var father = target.parentNode;
                    var count = father.querySelector('.count').value;
                    //通过点击的元素获取对应的商品信息   储存到本地
                    _this.data[father.index].count = count;
                    //localStorage.shoppingList = JSON.stringify(_this.data[father.index])
                    _this.setItem(_this.data[father.index])
                }
            }
        },
        //从后台获取数据，数据先YY设定 程序员得有很强的YY能力 0_o
        getData() {
            sendAjax('../my_json/shopping.json').then(res => {//里面弄执行成功的回调
                //字符串成对象
                res = JSON.parse(res);
                //console.log(res)
                //把获取到的数据传入 页面渲染操作函数
                if (res.code == 0) {
                    //把data存在 全局shop对象里，让点击加入购物车的操作不用去操作DOM 存到本地存储
                    this.data = res.data;
                    this.insertData(res.data);
                    //console.log(res.data)
                } else {
                    alert("获取信息失败")
                }
            })


        },
        //把数据渲染到页面
        insertData(data) {
            var $ul = document.querySelector('ul');
            //循环数组   创建商品列表
            for (let i = 0; i < data.length; i++) {
                var $li = document.createElement('li');
                $li.index = i;
                // $li.innerHTML = data[i].title;
                $li.innerHTML = `
                    商品名称：<span class='title'>${data[i].title}</span></br>
                    商品价格：<span class='price'>${data[i].price}</span></br>  
                    购买数量<input class="count" placeholder="请输入数量" /></br>
                    <button>加入购物车</button>
                    `
                $ul.appendChild($li);
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

