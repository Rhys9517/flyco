function sendAjax(url, obj) {
    const xhr = new XMLHttpRequest();
    const _default = {
        method: 'GET',
        data: null
    }
    if (obj) { //如果传值了才走这一步
        for (var key in _default) {
            if (key in obj) {
                _default[key] = obj[key];
            }
        }
    }
    _default.method = _default.method.toUpperCase()
    if (_default.method == 'GET') {
        // json/a.json?id=10&name=xixi&age=10&_=19191918
        let flag = url.indexOf('?') == -1 ? "?" : "&";
        url += flag;
        for (var i in _default.data) {
            let keyValue = `${i}=${_default.data[i]}`;
            url += keyValue + '&';
        }
        // 添加一个时间戳, 解决get请求的缓存问题
        url += `_=${Date.now()}`;
        // console.log(url);
        _default.data = null;
    } else if (_default.method == 'POST') {

        _default.data = JSON.stringify(_default.data);
    } else {
        console.log('告辞!');
        return;
    }

    xhr.open(_default.method, url, true);
    xhr.send(_default.data);
    return new Promise(function (resolve, reject) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    let data = xhr.response;
                    resolve(data);
                } else {
                    let data = xhr.response;
                    reject(data);
                }
            }
        }
    })
}
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
        getHow() {
            var shoppingList = localStorage.shoppingList || '[]';
            shoppingList = JSON.parse(shoppingList);
            this.insertSpan(shoppingList)
        },
        insertSpan(data) {
            data.forEach((item, index) => {
                if (typeof item == 'object') {
                    // console.log($how)
                    var arr = localStorage.shoppingList;
                    var arr = arr.split(',');
                    $how.innerHTML = arr.slice(arr.length - 5, arr.length - 4);
                    console.log(arr);
                }
            })
        },
        getData() {
            sendAjax('json/shopping.json').then(res => {
                res = JSON.parse(res);
                if (res.code == 0) {
                    // 把商品数据存到shop对象里
                    this.data = res.data;
                    this.insertData(res.data);
                } else {
                    alert("获取信息失败, 请查询网络状况");
                }
            });
        },
        insertData(data) {
            data.forEach((item, index) => {
                console.log(data.title)
                // console.log($how)
                var arr = localStorage.shoppingList;
                var arr = arr.split(',');
                $how.innerHTML = arr.slice(arr.length - 5, arr.length - 4);
                console.log(arr);

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