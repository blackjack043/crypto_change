Vue.directive('out', {
    bind: function(el, binding, vNode) {
        const handler = (e) => {
            if (!el.contains(e.target) && el !== e.target) {
                vNode.context[binding.expression] = false
            }
        }
        el.out = handler
        document.addEventListener('click', handler)
    },
    unbind: function(el, binding) {
        document.removeEventListener('click', el.out)
        el.out = null
    }
});
Vue.filter('uppercase', function(value) {
    return value.replace(",", ".").replace(/[^0-9.]/g, "");
});
var vm = new Vue({
    el: '#app',
    data: {
        toogle: false,
        toogle1: false,
        list1: [],
        current: [],
        current_from: [],
        current_from_value: 0,
        current_to_value: 0,
        current_rate: 1,
        current_to: [],
        poluchaet: 0,
        data: [],
        data1: [],
        Arr1: [],
        Arr2: [],
        current_pair: "",
        err: "",
        type_from: "",
        type_to: "",
    },
    filters: {},
    computed: {
        Arr11: {
            get: function() {
                return this.Arr1.filter(function(item, i) {
                    return ((item.name_from + item.currency_from) !== (vm.current_from.name_from + vm.current_from.currency_from));
                });
            },
        },
        Arr22: {
            get: function() {
                return this.Arr2.filter(function(item, i) {
                    return ((item.name_to + item.currency_to) !== (vm.current_to.name_to + vm.current_to.currency_to));
                });
            },
        },
    },
    methods: {
        output(arg1) {
            value = (Number(this.current_from_value).toFixed(vm.current_from.decimals_from) * arg1.rate);
            value = (value).toFixed(arg1.decimals_to);
            value = value / 1;
            return value;
        },
        ratio(param) {
            var pair = this.data.filter(function(item, i) {
                return ((item.name_from + item.currency_from) == (vm.current_from.name_from + vm.current_from.currency_from) && (item.name_to + item.currency_to) == (param.name_to + param.currency_to));
            });
            pair = pair[0];
            return (pair.in + " " + pair.currency_from + " " + "→" + " " + pair.out + " " + pair.currency_to);
        },
        toFixedHard(number, x) {
            return parseFloat(number.toFixed(x + 8).slice(0, -8));
        },
        fn3() {
            fetch("../de.json", { // заменить на путь до json 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }).then(response => response.json()).then((result) => {
                this.data = result['direction_exchanges'];
                this.fn9();
                this.current_from = this.data1[0];
                this.fn8();
                this.fn7();
            })
        },
        fn4() {
            vm.Arr1 = [];
            vm.Arr2 = [];
            this.list1 = this.data.map(function(item, i) {
                if (!vm.Arr1.some(i2 => ((item.name_from + item.currency_from) == (i2.name_from + i2.currency_from)))) {
                    vm.Arr1.push({
                        'currency_from': item.currency_from,
                        'name_from': item.name_from,
                        'image_from': item.image_from
                    })
                };
                if ((item.name_from + item.currency_from == vm.current_from.name_from + vm.current_from.currency_from)) {
                    vm.Arr2.push({
                        'currency_to': item.currency_to,
                        'name_to': item.name_to,
                        'image_to': item.image_to
                    })
                };
                return {
                    'currency_from': item.currency_from,
                    'name_from': item.name_from,
                    'image_from': item.image_from
                };
            });
            this.current_to = vm.Arr2[0];
        },
        fn5(item) {
            this.current_from = item;
            this.fn8();
            this.current_to = vm.Arr2[0];
            this.fn7();
            this.err = null;
        },
        fn6(item) {
            this.current_to = item;
            this.fn7();
            this.err = null;
        },
        fn7() {
            this.current_pair = this.data1.filter(function(item, i) {
                return (((vm.current_from.name_from + vm.current_from.currency_from) == (item.name_from + item.currency_from)) && ((item.name_to + item.currency_to) == (vm.current_to.name_to + vm.current_to.currency_to)));
            });
            this.current_pair = this.current_pair[0];
            this.current_from_value = Number(this.current_pair.min).toFixed(this.current_pair.decimals_from) / 1;
            this.current_to_value = Number(this.current_pair.min * this.current_pair.rate).toFixed(this.current_pair.decimals_to) / 1;
            this.current_rate = this.current_pair.rate;
        },
        fn8() {
            vm.Arr1 = [];
            vm.Arr2 = [];
            this.list1 = this.data1.map(function(item, i) {
                if (!vm.Arr1.some(i2 => ((item.name_from + item.currency_from) == (i2.name_from + i2.currency_from)))) {
                    vm.Arr1.push(item);
                };
                if ((item.name_from + item.currency_from + item.type_from == vm.current_from.name_from + vm.current_from.currency_from + vm.current_from.type_from)) {
                    vm.Arr2.push(item);
                };
                return {
                    'currency_from': item.currency_from,
                    'name_from': item.name_from,
                    'image_from': item.image_from
                };
            });
            this.current_to = vm.Arr2[0];
        },
        fn9() {
            this.data1 = this.data.filter(function(item, i) {
                var result = "";
                var tf = vm.type_from;
                var tt = vm.type_to;
                if (tf == "" && tt == "") {
                    result = (true);
                } else if (tt == "") {
                    result = (item.type_from == vm.type_from);
                } else if (tf == "") {
                    result = (item.type_to == vm.type_to);
                } else {
                    result = (item.type_from == vm.type_from && item.type_to == vm.type_to);
                };
                return result;
            });
        },
        fn10(item) {
            if (item == "") {} else if (this.type_to == item) {
                return
            };
            this.type_from = item;
            this.fn9();
            this.current_from = this.data1[0];
            this.fn8();
            this.current_to = vm.Arr2[0];
            this.fn7();
            this.err = "";
        },
        fn11(item) {
            if (item == "") {} else if (this.type_from == item) {
                return
            };
            this.type_to = item;
            this.fn9();
            this.current_from = this.data1[0];
            this.fn8();
            this.current_to = vm.Arr2[0];
            this.fn7();
            this.err = "";
        },
        fn_error() {
            this.err = "";
            var err = "Максимальная сумма: ";
            this.Arr2.forEach(function(item) {
                var value = (Number(vm.current_from_value).toFixed(vm.current_from.decimals_from) * item.rate);
                value = (value).toFixed(item.decimals_to);
                if (value / 1 > item.max / 1) {
                    err = err + ' ' + item.max + ' ' + item.currency_to;
                };
            });
            if (err !== "Максимальная сумма: ") {
                vm.err = vm.err + err;
                return true;
            }
        },
        onChange1() {
            this.err = "";
            if (this.current_from_value === "") {
                this.current_from_value = this.current_pair.min;
                this.current_to_value = ((this.current_from_value) * this.current_pair.rate);
            };
            if (parseFloat(this.current_from_value) < parseFloat(this.current_pair.min)) {
                this.err = "Минимальная сумма:" + this.current_pair.min + this.current_pair.currency_from;
            } else {
                this.err = "";
                this.fn_error();
            };
            this.current_from_value = Number(this.current_from_value).toFixed(this.current_pair.decimals_from);
            this.current_from_value = this.current_from_value / 1;
        },
        onChange2() {
            if (this.current_to_value === "") {
                this.current_to_value = this.current_from_value = ((this.current_to_value) / this.current_pair.rate);
                this.current_from_value = this.current_pair.min;
                this.current_to_value = ((this.current_from_value) * this.current_pair.rate);
            };
            this.current_to_value = Number(this.current_to_value).toFixed(this.current_pair.decimals_to);
            this.current_to_value = this.current_to_value / 1;
        },
        onInput1() {
            this.current_from_value = this.$options.filters.uppercase(this.current_from_value.toString());
            var temp = (this.current_from_value.indexOf(".", this.current_from_value.indexOf(".") + 1));
            if (temp > 0) this.current_from_value = this.current_from_value.substring(0, temp);
            this.current_to_value = (Number(this.current_from_value).toFixed(this.current_pair.decimals_from) * this.current_pair.rate);
            this.current_to_value = (this.current_to_value).toFixed(this.current_pair.decimals_to);
            this.current_to_value = this.current_to_value / 1;
        },
        onInput2() {
            this.current_to_value = this.$options.filters.uppercase(this.current_to_value.toString());
            var temp = (this.current_to_value.indexOf(".", this.current_to_value.indexOf(".") + 1));
            if (temp > 0) this.current_to_value = this.current_to_value.substring(0, temp);
            this.current_from_value = (Number(this.current_to_value).toFixed(this.current_pair.decimals_to) / this.current_pair.rate);
            this.current_from_value = (this.current_from_value).toFixed(this.current_pair.decimals_from);
            this.current_from_value = this.current_from_value / 1;
        },
        fn_post(event) {
            if (parseFloat(this.current_from_value) < this.current_pair.min) {
                this.err = "Минимальная сумма:" + this.current_pair.min + this.current_pair.currency_from;
                event.preventDefault();
            } else if (parseFloat(this.current_to_value) > parseFloat(this.current_pair.max)) {
                this.err = "Максимальная сумма:" + this.current_pair.max + this.current_pair.currency_to;
                event.preventDefault();
            } else {};
            if (parseFloat(this.current_from_value) < parseFloat(this.current_pair.min)) {
                this.err = "Минимальная сумма:" + this.current_pair.min + this.current_pair.currency_from;
            } else if (this.fn_error()) {
                event.preventDefault();
            } else {
                this.err = "";
            }
        }
    },
    watch: {
        current_from_value(val) {
            this.current_from_value = this.$options.filters.uppercase(val.toString());
            var temp = (this.current_from_value.indexOf(".", this.current_from_value.indexOf(".") + 1));
            if (temp > 0) this.current_from_value = this.current_from_value.substring(0, temp);
        },
        current_to_value(val) {
            this.current_to_value = this.$options.filters.uppercase(val.toString());
            var temp = (this.current_to_value.indexOf(".", this.current_to_value.indexOf(".") + 1));
            if (temp > 0) this.current_to_value = this.current_to_value.substring(0, temp);
        },
    },
    created() {
        this.fn3();
    }
})