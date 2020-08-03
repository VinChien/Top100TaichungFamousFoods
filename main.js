new Vue({
    el: '#info',
    data: {
        datas: null
    },
    mounted() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://datacenter.taichung.gov.tw/swagger/OpenData/4d40ce70-21d1-48e7-ba7c-5a9257faf076");
        xhr.send();

        xhr.onload = () => {
            let json = JSON.parse(xhr.responseText);
            this.datas = json;
        }
    },
})