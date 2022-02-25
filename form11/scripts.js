
var vm = new Vue({
    el: '#app',
    data: {
        hour: "",
        min: "",
        sec: "",
        err: "",
        sum: false,
        wallet: false,
        start: "",

    },
    filters: {

    },
    computed: {},
    methods: {

        timer() {

            var time = setInterval(function() {
                var delta = Date.now() - vm.start; 
                var sec, min, hour;

                sec = Math.floor((delta / 1000) % 60);
                min = Math.floor((delta / 1000 / 60) % 60);
                hour = Math.floor((delta / (1000 * 60 * 60)) % 24);
                sec = Math.abs(sec) - 1;
                min = Math.abs(min) - 1;
                vm.sec = ("0" + sec).slice(-2);
                vm.min = ("0" + min).slice(-2);

                if (delta > 0) {
                    clearInterval(time);
                    location.reload()
                }

            }, 1000); // 
        },
    },
    watch: {},
    async mounted() {

    },
    async created() {
        //this.start = await new Date(time + 30 * 60 * 1000); 
        this.start = await new Date(Date.parse(new Date()) + 30 * 60 * 1000); 
        this.timer(this.start);
    }
})