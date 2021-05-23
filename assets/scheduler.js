// displays today's time at the top
let todayHeader = moment();
$('#todayInScheduler').text(todayHeader.format("MMM Do, YYYY"));

// day container
let todaysTimes = [
    {
        id: '0',
        scheduleTime: '07:00',
        actualTime: '07',
        amPm: ' AM',
        information: ''
    },
    {
        id: '1',
        scheduleTime: '08:00',
        actualTime: '08',
        amPm: ' AM',
        information: ''
    },
    {
        id: '2',
        scheduleTime: '09:00',
        actualTime: '09',
        amPm: ' AM',
        information: ''
    },
    {
        id: '3',
        scheduleTime: '10:00',
        actualTime: '10',
        amPm: ' AM',
        information: ''
    },
    {
        id: '4',
        scheduleTime: '11:00',
        actualTime: '11',
        amPm: ' AM',
        information: ''
    },
    {
        id: '5',
        scheduleTime: '12:00',
        actualTime: '12',
        amPm: ' PM',
        information: ''
    },
    {
        id: '6',
        scheduleTime: '01:00',
        actualTime: '13',
        amPm: ' PM',
        information: ''
    },
    {
        id: '7',
        scheduleTime: '02:00',
        actualTime: '14',
        amPm: ' PM',
        information: ''
    },
    {
        id: '8',
        scheduleTime: '03:00',
        actualTime: '15',
        amPm: ' PM',
        information: ''
    },
    {
        id: '9',
        scheduleTime: '04:00',
        actualTime: '16',
        amPm: ' PM',
        information: ''
    },
    {
        id: '10',
        scheduleTime: '05:00',
        actualTime: '17',
        amPm: ' PM',
        information: ''
    },
    {
        id: '11',
        scheduleTime: '06:00',
        actualTime: '18',
        amPm: ' PM',
        information: ''
    },
    {
        id: '12',
        scheduleTime: '07:00',
        actualTime: '19',
        amPm: ' PM',
        information: ''
    },
    {
        id: '13',
        scheduleTime: '08:00',
        actualTime: '20',
        amPm: ' PM',
        information: ''
    },
    {
        id: '14',
        scheduleTime: '09:00',
        actualTime: '21',
        amPm: ' PM',
        information: ''
    },
    {
        id: '15',
        scheduleTime: '10:00',
        actualTime: '22',
        amPm: ' PM',
        information: ''
    }
]


// function to store information to local storage
function storeInformation() {
    localStorage.setItem('todaysTimes', JSON.stringify(todaysTimes));
}

// function to call information stored 
function callInformation() {
    todaysTimes.forEach(function(_thisTime) {
        $(`#${_thisTime.id}`).val(_thisTime.information);
    })
}

// sets initial state of scheduler depending on stored data
function setInitialState() {
    let retrievedInformation = JSON.parse(localStorage.getItem('todaysTimes'));

    if (retrievedInformation) {
        todaysTimes = retrievedInformation;
    }

    storeInformation();
    callInformation();
}

// dynamically create and append actual scheduler
todaysTimes.forEach(function(thisTime) {
    
    // create the rows for time with form so notes can be typed in
    let timeRow = $('<form>').attr({'class': 'row'});
    $('.scheduleTable').append(timeRow);

    // create schedule time
    let schedulerTime = $('<div>')
        .text(`${thisTime.scheduleTime}${thisTime.amPm}`)
        .attr({'class': 'col-md-2 scheduleTime'});

    // create area to append schedule data
    let schedulerInfo = $('<div>')
        .attr({'class': 'col-md-8 information p-0'});

    // create area to append data and assess whether past present or future
    let todaysPlans = $('<textarea>');

    todaysPlans.attr('id', thisTime.id);
    schedulerInfo.append(todaysPlans);

    // assesses current time status compared to actual time from moment
    if (thisTime.actualTime < moment().format('HH')) {
        todaysPlans.attr({'class': 'past'});
    }
    else if (thisTime.actualTime === moment().format('HH')) {
        todaysPlans.attr({'class': 'present'});
    }
    else if (thisTime.actualTime > moment().format('HH')) {
        todaysPlans.attr({'class': 'future'});
    }

    // create a save button to store data into local storage add icon to save button
    let saveInformation = $('<i class="fas fa-archive fa-2x"></i>');
    let saveButton = $('<button>').attr({'class': 'col-md-2 saveButton'});

    saveButton.append(saveInformation);
    timeRow.append(schedulerTime, schedulerInfo, saveButton);
})

setInitialState();

// save button function on click to store data and prevent default so local storage is not lost
$('.saveButton').on('click', function(event) {
    event.preventDefault();

    // stores and retrieves stored information based on index per each form row
    let storedInfoIndex = $(this).siblings('.information').children('.future, .present, .past').attr('id');
    todaysTimes[storedInfoIndex].information = $(this).siblings('.information').children('.future, .present, .past').val();
    storeInformation();
    callInformation();
})