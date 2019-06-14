var app1 = new Vue({
    el: '#app-1',
    methods: {
        sumbit: function (message, event) {
                if (event) event.preventDefault()
                alert(message)
        }
    }
})
