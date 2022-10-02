const schedule = require('node-schedule');

// list of events
const events = [
	{
		"text": "TextOne",
		"dateTime": "2022-03-31T23:38:00.000+05:30"
    },
    {
		"text": "TextTwo",
		"dateTime": "2022-03-31T23:39:00.000+05:30"
    },
    {
		"text": "TextThree",
		"dateTime": "2022-03-31T23:40:00.000+05:30"
    },
    {
		"text": "TextFour",
		"dateTime": "2022-03-31T23:41:00.000+05:30"
    },
    {
		"text": "TextFive",
		"dateTime": "2022-03-31T23:42:00.000+05:30"
    },
    {
		"text": "TextSix",
		"dateTime": "2022-03-31T23:43:00.000+05:30"
    },
    {
		"text": "TextSeven",
		"dateTime": "2022-03-31T23:44:00.000+05:30"
    },
    {
		"text": "TextEight",
		"dateTime": "2022-03-31T23:45:00.000+05:30"
    },
    {
		"text": "TextNine",
		"dateTime": "2022-03-31T23:46:00.000+05:30"
    },
    {
		"text": "TextTen",
		"dateTime": "2022-03-31T23:47:00.000+05:30"
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
        }, 1000 * size);
    })
}

// looping through the list of events
events.forEach((item,index) => {
    trigger(item.text,item.dateTime);
});
