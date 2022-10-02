const schedule = require('node-schedule');

// list of events
const events = [
	{
		"text": "Text One",
		"dateTime": "2022-10-31T23:38:00.000+05:30"
    },
    {
		"text": "Text Two",
		"dateTime": "2022-10-31T23:39:00.000+05:30"
    },
    {
		"text": "Text Three",
		"dateTime": "2022-10-31T23:40:00.000+05:30"
    },
    {
		"text": "Text Four",
		"dateTime": "2022-10-31T23:41:00.000+05:30"
    },
    {
		"text": "Text Five",
		"dateTime": "2022-10-31T23:42:00.000+05:30"
    },
    {
		"text": "Text Six",
		"dateTime": "2022-10-31T23:43:00.000+05:30"
    },
    {
		"text": "Text Seven",
		"dateTime": "2022-10-31T23:44:00.000+05:30"
    },
    {
		"text": "Text Eight",
		"dateTime": "2022-10-31T23:45:00.000+05:30"
    },
    {
		"text": "Text Nine",
		"dateTime": "2022-10-31T23:46:00.000+05:30"
    },
    {
		"text": "Text Ten",
		"dateTime": "2022-10-31T23:47:00.000+05:30"
    }
]

function trigger(text, dateTime) {
    let size = text.length; // store the length of text in size
    let reverseText = text.split("").reverse().join(""); // reverse the text string
    let scheduledTime = new Date(dateTime);
    // scheduling the event to trigger the function at the said date and time
    schedule.scheduleJob(scheduledTime, () => {
        // function will sleep for size (the length of text) seconds
        // and then output reverseText in the console
        setTimeout(function() {
            console.log(reverseText);
        }, 10000 * size);
    })
}

// looping through the list of events
events.forEach((item,index) => {
    trigger(item.text,item.dateTime);
});
