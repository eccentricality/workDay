let todayHeader = moment();
$('#todayInScheduler').text(todayHeader.format("MMM Do, YYYY"));

// day container
let todaysTimes = [
    {
        id: 0,
        scheduleTime: '07:00',
        actualTime: '07:00',
        amPm: 'am',
        notes: ''
    },
    {
        id: 1,
        scheduleTime: '08:00',
        actualTime: '08:00',
        amPm: 'am',
        notes: ''
    },
    {
        id: 2,
        scheduleTime: '09:00',
        actualTime: '09:00',
        amPm: 'am',
        notes: ''
    },
    {
        id: 3,
        scheduleTime: '10:00',
        actualTime: '10:00',
        amPm: 'am',
        notes: ''
    },
    {
        id: 4,
        scheduleTime: '11:00',
        actualTime: '11:00',
        amPm: 'am',
        notes: ''
    },
    {
        id: 5,
        scheduleTime: '12:00',
        actualTime: '12:00',
        amPm: 'pm',
        notes: ''
    },
    {
        id: 6,
        scheduleTime: '01:00',
        actualTime: '01:00',
        amPm: 'pm',
        notes: ''
    },
    {
        id: 7,
        scheduleTime: '02:00',
        actualTime: '02:00',
        amPm: 'pm',
        notes: ''
    },
    {
        id: 8,
        scheduleTime: '03:00',
        actualTime: '03:00',
        amPm: 'pm',
        notes: ''
    },
    {
        id: 9,
        scheduleTime: '04:00',
        actualTime: '04:00',
        amPm: 'pm',
        notes: ''
    },
    {
        id: 10,
        scheduleTime: '05:00',
        actualTime: '05:00',
        amPm: 'pm',
        notes: ''
    },
    {
        id: 11,
        scheduleTime: '06:00',
        actualTime: '06:00',
        amPm: 'pm',
        notes: ''
    },
    {
        id: 12,
        scheduleTime: '07:00',
        actualTime: '07:00',
        amPm: 'pm',
        notes: ''
    },
    {
        id: 13,
        scheduleTime: '08:00',
        actualTime: '08:00',
        amPm: 'pm',
        notes: ''
    },
    {
        id: 14,
        scheduleTime: '09:00',
        actualTime: '09:00',
        amPm: 'pm',
        notes: ''
    },
    {
        id: 15,
        scheduleTime: '10:00',
        actualTime: '10:00',
        amPm: 'pm',
        notes: ''
    }
]

// dynamically create and append actual scheduler
todaysTimes.forEach(function(thisHour) {
    
    // create the rows for time with form so notes can be typed in
    let timeRow = $('<form>').attr({'class': 'row'});
    $('.scheduleTable').append(timeRow);

    // create schedule time
    let schedulerTime = $('<div>')
        .text(`${thisHour.scheduleTime}${thisHour.amPm}`)
        .attr({'class': 'col-md-2 scheduleTime'});

    timeRow.append(schedulerTime);

})

// function to save notes to local storage to be called back
// function saveNotes() {
//     localStorage.setItem('todaysNotes', JSON.stringify(todaysNotes));
// }