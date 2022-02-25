Vue.filter('uppercase', function(value) {
    return value.replace(",", ".").replace(/[^0-9.]/g, "");
});
var vm = new Vue({
    el: '#app',
    data: {
        input_from: 0,
        input_to: 0,
        input_wallet: "",
        email: "",
        toogle: false,
        toogle1: false,
        err: "",
        err2: "",
    },
    filters: {
        currency(value) {
            let result = Number(value).toFixed(10);
            result = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            return (result);
        }
    },
    computed: {},
    methods: {
        input1() {
            this.input_from = this.$options.filters.uppercase(this.input_from.toString());
            var temp = (this.input_from.indexOf(".", this.input_from.indexOf(".") + 1));
            if (temp > 0) this.input_from = this.input_from.substring(0, temp);
            this.input_to = Number(this.input_from).toFixed(decimals_from) * rate;
            this.input_to = Number(this.input_to).toFixed(decimals_to) / 1;
        },
        input2() {
            this.input_to = this.$options.filters.uppercase(this.input_to.toString());
            var temp = (this.input_to.indexOf(".", this.input_to.indexOf(".") + 1));
            if (temp > 0) this.input_to = this.input_to.substring(0, temp);
            this.input_from = Number(this.input_to).toFixed(decimals_to) / rate;
            this.input_from = Number(this.input_from).toFixed(decimals_from) / 1;
        },
        change1() {
            this.err = "";
            if (this.input_from == ("" || 0) || this.input_to == ("" || 0)) {
                this.input_from = min;
                this.input_to = this.input_from * rate;
            };
            if (this.input_from < min) {
                this.err2 = "Минимальная сумма: " + min;
            } else if (this.input_to > max) {
                this.err2 = "Максимальная сумма: " + max;
            } else {
                this.err2 = "";
            };
            this.input_from = Number(this.input_from).toFixed(decimals_from) / 1;
        },
        change2() {
            this.err = "";
            if (this.input_from == ("" || 0) || this.input_to == ("" || 0)) {
                this.input_from = min;
                this.input_to = this.input_from * rate;
            };
            if (this.input_from < min) {
                this.err2 = "Минимальная сумма: " + min;
            } else if (this.input_to > max) {
                this.err2 = "Максимальная сумма: " + max;
            } else {
                this.err2 = "";
            };
            this.input_to = Number(this.input_to).toFixed(decimals_to) / 1;
        },
        fn_post(event) {
            const email = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
            this.err = "";
            if (this.input_from < min) {
                this.err = "Минимальная сумма: " + min;
                event.preventDefault();
            } else if (this.input_to > max) {
                this.err = "Максимальная сумма: " + max;
                event.preventDefault();
            } else if (this.input_wallet.length == 0) {
                this.err = "Не заполнено поле 'Кошелек'";
                event.preventDefault();
            } else if (this.email.length == 0) {
                this.err = "Заполните поле 'E-mail'";
                event.preventDefault();
            } else if (!email.test(this.email)) {
                this.err = "Неверно заполнено поле 'E-mail'";
                event.preventDefault();
            } else {

            };
        }
    },
    watch: {
        input_from(val) {
            this.input_from = this.$options.filters.uppercase(val.toString());
            var temp = (this.input_from.indexOf(".", this.input_from.indexOf(".") + 1));
            if (temp > 0) this.input_from = this.input_from.substring(0, temp);
        },
        input_to(val) {
            this.input_to = this.$options.filters.uppercase(val.toString());
            var temp = (this.input_to.indexOf(".", this.input_to.indexOf(".") + 1));
            if (temp > 0) this.input_to = this.input_to.substring(0, temp);
        },
    },
    created() {
        this.input_from = min;
        this.input1();
        var email_default = document.getElementById('email');
        this.email = email_default.defaultValue;
    }
})