const openSchedulerBtn = document.getElementById('openButton');

openSchedulerBtn.addEventListener('click', function(){
    location.replace('./schedulerBody.html')
})

let todayHeader = moment();
$('#today').text(todayHeader.format("MMM Do, YYYY"));

console.log(todayHeader)