function apiSearch() {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': 'affc159c9c47400b9fd33a07f98d8271'
        }
    })
        .done(function (data) {
            var len = data.webPages.value.length;
            var results = '';
            for (i = 0; i < len; i++) {
                results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert('error');
        });
}

currImg = 0
window.addEventListener("click", async () => {
    if(currImg == 0){
        currImg = 1;
        $('#backgroundPic').css('background-image', 'url(https://images.unsplash.com/photo-1727013031787-858020654797?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)')
    }else{
        currImg = 0;
        $('#backgroundPic').css('background-image', 'url(https://images.unsplash.com/photo-1726742942147-1f87c0a19d0b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)')
    }
})

document.getElementById('searchButton').onclick = ((event) => {
    apiSearch();
})

function setTimeDia() {
    curr = new Date();
    $('#time').html('' + curr.getHours() + ':' + curr.getMinutes());
    $('#time').dialog();
}

document.getElementById('timeButton').onclick = (() => {
    setTimeDia();
});