let todayHeader = moment();
$('#todayInScheduler').text(todayHeader.format("MMM Do, YYYY"));

// day container
let todaysTimes = [
    {
        id: '0',
        scheduleTime: '07:00',
        actualTime: '07',
        amPm: ' AM',
        notes: ''
    },
    {
        id: '1',
        scheduleTime: '08:00',
        actualTime: '08',
        amPm: ' AM',
        notes: ''
    },
    {
        id: '2',
        scheduleTime: '09:00',
        actualTime: '09',
        amPm: ' AM',
        notes: ''
    },
    {
        id: '3',
        scheduleTime: '10:00',
        actualTime: '10',
        amPm: ' AM',
        notes: ''
    },
    {
        id: '4',
        scheduleTime: '11:00',
        actualTime: '11',
        amPm: ' AM',
        notes: ''
    },
    {
        id: '5',
        scheduleTime: '12:00',
        actualTime: '12',
        amPm: ' PM',
        notes: ''
    },
    {
        id: '6',
        scheduleTime: '01:00',
        actualTime: '13',
        amPm: ' PM',
        notes: ''
    },
    {
        id: '7',
        scheduleTime: '02:00',
        actualTime: '14',
        amPm: ' PM',
        notes: ''
    },
    {
        id: '8',
        scheduleTime: '03:00',
        actualTime: '15',
        amPm: ' PM',
        notes: ''
    },
    {
        id: '9',
        scheduleTime: '04:00',
        actualTime: '16',
        amPm: ' PM',
        notes: ''
    },
    {
        id: '10',
        scheduleTime: '05:00',
        actualTime: '17',
        amPm: ' PM',
        notes: ''
    },
    {
        id: '11',
        scheduleTime: '06:00',
        actualTime: '18',
        amPm: ' PM',
        notes: ''
    },
    {
        id: '12',
        scheduleTime: '07:00',
        actualTime: '19',
        amPm: ' PM',
        notes: ''
    },
    {
        id: '13',
        scheduleTime: '08:00',
        actualTime: '20',
        amPm: ' PM',
        notes: ''
    },
    {
        id: '14',
        scheduleTime: '09:00',
        actualTime: '21',
        amPm: ' PM',
        notes: ''
    },
    {
        id: '15',
        scheduleTime: '10:00',
        actualTime: '22',
        amPm: ' PM',
        notes: ''
    }
]

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

    // create a save button to store data into local storage
    let saveInformation = $('<i class="far fa-save fa-lg"></i>')
    let saveButton = $('<button>').attr({'class': 'col-md-2 saveButton'});

    saveButton.append(saveInformation);
    timeRow.append(schedulerTime, schedulerInfo, saveButton);
})