const schedule = require('node-schedule');

exports.scheduleReminder =  (hour, minute , channel)=>{
    const rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = [ new schedule.Range(1, 5)];
    rule.hour = hour;
    rule.minute = minute;
    schedule.scheduleJob(rule, function(){
        channel.send('**Have you studied yet?**')
     });
} 

