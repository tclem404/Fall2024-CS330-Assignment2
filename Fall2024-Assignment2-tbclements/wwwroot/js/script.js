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
            var results = `Showing ${len} results<br>`;
            for (i = 0; i < len; i++) {
                results += `<p class="searchResultEntry"><a class="link" href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }

            $('#searchResults').html(results);
            
        })
        .fail(function () {
            alert('error');
        });
}

let currImg = 0
window.addEventListener("click", async () => {
    if(currImg == 0){
        currImg = 1;
        $('#backgroundPic').css('background-image', 'url(https://images.unsplash.com/photo-1727013031787-858020654797?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)')
    }else{
        currImg = 0;
        $('#backgroundPic').css('background-image','url(https://images.unsplash.com/photo-1727452165826-920ea81d89e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)')
    }
})

document.getElementById('searchButton').onclick = ((event) => {
    apiSearch();
})

function setTimeDia() {
    let curr = new Date();
    let hours = (curr.getHours() < 10 ? '0' + curr.getHours() : '' + curr.getHours())
    let mins = (curr.getMinutes() < 10 ? '0' + curr.getMinutes() : '' + curr.getMinutes())
    $('#time').html(hours + ':' + mins);
    $('#time').dialog({
        position: {my: 'top', at: 'bottom', of: '#timeButton'}
    });
}

document.getElementById('timeButton').onclick = (() => {
    setTimeDia();
});

function apiSearchLucky() {
    var params = {
        'q': $('#query').val(),
        'count': 10,
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
            
            if (len == 0){
                alert("No Webpages Found :(");
                return;
            }
            window.location.href = (data.webPages.value[0].url);
        })
        .fail(function () {
            alert('error');
        });
}

document.getElementById('luckyButton').onclick = ((event) => {
    apiSearchLucky();
})

function colorName(){
    let colors = ['blue', 'red', 'yellow', 'blue', 'green', 'red', 'yellow'];

    let nameOfEngine = $('#logo').html();
    nameOfEngine = nameOfEngine.split("");

    var modified = "";
    for(var i = 0; i < nameOfEngine.length; i++){
        modified += `<text style="color:${colors[i]};font-size: xxx-large;">${nameOfEngine[i]}`;
    }

    $('#logo').html(modified);

}

colorName();