/**
 * @author GImhan Pabasara <gimhanpabasara4@gmail.com> (www.gimhanpabasara.tk)
 * @since 5/23/2022
 */
(function(){
    //Cache elements for use
    var hamburger = document.getElementById('menu');
    var s = document.getElementById('search');
    var likes = document.getElementById('likesCounter');
    var submit = document.getElementById('submit');
    var likes = document.getElementById('parent');

    //Event Handlers
    var search = s.addEventListener('click', searchHandler);
    var submitVal = submit.addEventListener('click', onSubmit);
    var likesEvent = likes.addEventListener('click',likesHandler);

    //Handler Logic

    // function searchHandler(e) {
    //     var sr = document.getElementById('search-bar');
    //
    //     if(sr.style.display === 'none' && submit.style.display === 'none') {
    //         sr.style.display = 'block';
    //         submit.style.display = 'block';
    //     }
    //
    //     else {
    //         sr.style.display = 'none';
    //         submit.style.display = 'none';
    //     }
    // }
    //
    // function onSubmit() {
    //     var inputVal = document.getElementById('search-bar').value;
    //     var arrList = [];
    //     document.getElementById('search-bar').value = "";
    // }

    function likesHandler(e) {
        e.preventDefault();
        if(e.target.nodeName === "SPAN") {
            var currentNum = e.target.innerText;
            var currentId = e.target.id;
            likesIncrement(currentNum, currentId);
        }
    }

    function likesIncrement(currentNum, currentId) {
        currentNum = currentNum.replace(/,/g, "");
        currentNum = parseInt(currentNum);
        currentNum++;
        currentNum = String(currentNum);
        currentNum = numberWithCommas(currentNum);
        document.getElementById(currentId).innerText = currentNum;
    }

    function numberWithCommas(likes) {
        return likes.replace(/(.)(?=(.{3})+$)/g,"$1,");
    }

}());