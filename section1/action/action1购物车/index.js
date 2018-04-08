var app = new Vue({
    el: '#app',
    data: {
        tableData: [{
            id: 1,
            name: 'iphone7',
            price: 6188,
            count: 1
        }, {
            id: 2,
            name: 'ipad pro',
            price: 5888,
            count: 1
        }, {
            id: 3,
            name: 'macbook pro',
            price: 21488,
            count: 1
        }]
    },
    computed: {
        totalPrices: function() {
            var total = 0
            for (var i = 0; i < this.tableData.length; i++) {
                var item = this.tableData[i]
                total += item.price * item.count
            }
            return total
        }
    },
    methods: {
        remove: function(id) {
            this.tableData.splice(id, 1)
        },
        reduceCount: function(index) {
            var item = this.tableData[index]
            console.log(index)
            console.log('这个时候的index值' + index)
            console.log('这个时候的数据值' + this.tableData[index])
            if (item.count === 1) {
                return
            } else {
                item.count--
            }
        },
        addCount: function(index) {
            this.tableData[index].count++
        }
    }
})