! function () {
    "use strict";
    new Vue({
        el: "#app",
        data: {
            gas: "https://script.google.com/macros/s/AKfycbxHRM4lnv3Apa-tqVc-Rg_6u1x6ugM7d-OXR2Fik9JFdaPisHg6VmGiXpWkmLddBncMhQ/exec",
            id: "",
            persons: {},
            person: {},
            loading: !1
        },
        methods: {
            check: function () {
                var n = this;
                    if (void 0 === this.persons[this.id]) {
                        this.loading = !0;
                        var i = this.gas + "?id=" + this.id;
                        fetch(i, {
                            method: "POST"
                        }).then((function (t) {
                            
                            return t.json()
                        })).then((function (t) {
                            if (Object.keys(t).length === 0) {
                                alert('不在參加名單');
                            }
                            var a = t;
                            n.persons[n.id] = t, n.person = t, n.loading = !1;
                            var b = t.class_no;
                        }))
                }
            },
            submit: function () {
                var n = this;
                n.loading = 1;
                $.ajax({
                    url: "https://script.google.com/macros/s/AKfycbyONG3lbppQ1i5tOL35corthMreYsddd9RpkJARGfjIpqxMI4XZ7zPEhKC3fCHi3DTT/exec",
                    data: {
                        "id": this.person.id,
                        "name": this.person.name,
                        "seat": this.person.seat,
                        "temperature": this.person.temperature
                    },
                    success: function (response) {
                        n.loading = !1;
                        alert(response);
                    },
                });
            }
        },
        watch: {
            id: function (t) {
                var n = this;
                if (t.length!=null) {
                    
                }
            }
        }
    })
}();