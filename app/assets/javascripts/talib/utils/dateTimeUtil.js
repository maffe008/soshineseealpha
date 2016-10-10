/**
 * Created by maffee on 16/10/9.
 */
var dateTimeUtil = {}

dateTimeUtil.displayDateObject = function(timeIntervalUnit, year, timeIntervalValue, userLang) {

    var displayDate = '-';
    var startDate, endDate, date;
    if(timeIntervalUnit === 'WEEKLY') {
        startDate = moment().millisecond(0).second(0).minute(0).hour(0).year(year).isoWeek(timeIntervalValue).isoWeekday(1);
        endDate = moment().millisecond(0).second(0).minute(0).hour(0).year(year).isoWeek(timeIntervalValue + 1).isoWeekday(1).millisecond(-1);

        displayDate = startDate.format("MMM D") + "-" + endDate.format("MMM D");
        if (!(userLang === "en-us" || userLang === "en_us")){
            displayDate = startDate.format("D/M") + "-" + endDate.format("D/M");
        }
    } else if(timeIntervalUnit === 'DAILY') {
        date = moment().year(year).dayOfYear(timeIntervalValue);

        displayDate = date.format("MMM D");
        if (!(userLang === "en-us" || userLang === "en_us")){
            displayDate = date.format("D/M");
        }
    }
    return {
        startDate: startDate,
        endDate: endDate,
        displayDate: displayDate,
        date: date
    };
}