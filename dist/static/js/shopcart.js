var shopCar = (function () {
    var $radio = document.querySelector('#select'),
        $cost = document.querySelector('#cost'),
        $jian = document.querySelector('#jian'),
        $how = document.querySelector('#how'),
        $jia = document.querySelector('#jia'),
        $Zcost = document.querySelector('#Zcost'),
        $cancel = document.querySelector('#cancel');
    return {
        init() {
            this.event();
            this.getData();
        },
        event() {
            var _this = this;
        },
        getData() {
            var shopList = localStorage.shoppingList || '[]';
            shopList = JSON.parse(shopList);

            console.log(shopList);
            this.insertData(shopList)

        },
        insertData(data) {
            data.forEach((item, index) => {
                if (typeof item == 'object') {
                    // console.log($how)
                    var arr = localStorage.shoppingList;
                    var arr = arr.split(',');
                    $how.innerHTML = arr.slice(arr.length - 5, arr.length - 4);
                    console.log(arr);

                    // var $li = document.createElement('li');
                    // $li.index = index;
                    // $li.innerHTML = `
                    //     商品名称:<span class='title'>${data[index].title}</span></br>
                    //     商品价格<span class='price'>${data[index].price}</span></br>
                    //     购买数量<input class="count" value=${data[index].count} placeholder="请输入数量" /></br>
                    //     小计<span>${data[index].price * data[index].count}</span></br>
                    //     <button>删除</button>
                    // `
                    // $ul.appendChild($li);
                }

            })
        },
        // insertData(data) {
        //     data.forEach((item, index) => {
        //         var $li = document.createElement('li');
        //         $li.index = index;
        //         $li.innerHTML = `
        //             商品名称:<span class='title'>${data[index].title}</span></br>
        //             商品价格<span class='price'>${data[index].price}</span></br>
        //             购买数量<input class="count" value=${data[index].count} placeholder="请输入数量" /></br>
        //             小计<span>${data[index].price * data[index].count}</span></br>
        //             <button>删除</button>
        //         `
        //         $ul.appendChild($li);
        //     })
        // }
    }

}())
shopCar.init();