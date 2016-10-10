/**
 * Created by maffee on 16/10/9.
 */
var domUtil = {}

Array.prototype.rotate = (function() {
    var unshift = Array.prototype.unshift,
        splice = Array.prototype.splice;

    return function(count) {
        var len = this.length >>> 0,
            count = count >> 0;

        unshift.apply(this, splice.call(this, count % len, len));
        return this;
    };
})();


domUtil.uploadFileToS3 = function(file, awsCreds, callback){

    var fd = new FormData();

    // var key = "orders/" + folderExtension + "/" + fileName;

    fd.append('key', awsCreds.key);
    fd.append('acl', 'public-read');
    fd.append('Content-Type', file.type);
    fd.append('AWSAccessKeyId', awsCreds.accessKeyId);
    fd.append('policy', awsCreds.policy)
    fd.append('signature', awsCreds.signature);

    fd.append("file",file);

    var xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", domUtil.uploadProgress, false);
    xhr.addEventListener("load", callback, false);
    xhr.addEventListener("error", domUtil.uploadFailed, false);
    xhr.addEventListener("abort", domUtil.uploadCanceled, false);

    xhr.open('POST', 'https://user-upload-terravion-com.s3.amazonaws.com/', true); //MUST BE LAST LINE BEFORE YOU SEND

    xhr.send(fd);
}

domUtil.uploadProgress = function(evt) {
    console.log("This method has been removed");
}

domUtil.uploadComplete = function (evt) {
    /* This event is raised when the server send back a response */
    alert("Done - " + evt.target.responseText );
}

domUtil.uploadFailed = function (evt) {
    alert("There was an error attempting to upload the file." + evt);
}

domUtil.uploadCanceled = function (evt) {
    alert("The upload has been canceled by the user or the browser dropped the connection.");
}

domUtil.renderFileNameSafe = function(fileName){
    return fileName.replace(/[^\w|\.]/g, "_")
}

domUtil.acresToHectares = function(acres){
    if(acres === ''){
        return ''
    } else {
        return (acres*0.404686)
    }
}

domUtil.hectaresToAcres = function(hectares){
    if(hectares === ''){
        return ''
    } else {
        return (hectares*2.47105)
    }
}

domUtil.calculateOneShotCost = function(acres){
    var cost = 15000
    if(acres <= 10){
        return cost
    }
    acres -= 10
    var priceTierCentsUSDOneShot = [
        [ 70, 500],
        [50000000, 100]
    ]

    for (var i = 0; i < priceTierCentsUSDOneShot.length; i++){
        if(acres <= 0){
            return cost
        }
        var acreageStep = priceTierCentsUSDOneShot[i][0]
        var priceTier = priceTierCentsUSDOneShot[i][1]
        console.log(acreageStep, priceTier, "cost: "+cost, "acres: "+acres)
        if (acres <= acreageStep ){
            cost += acres * priceTier
            acres -= acreageStep
        } else {
            cost += acreageStep * priceTier
            acres -= acreageStep
        }
    }
    return cost
}

domUtil.calculateCost = function(acres, planChargeLength, region){

    var area = 0
    var cost = 0
    if ( domUtil.isRegionAmerican(region) ){
        area = acres
    } else {
        area = Math.ceil(domUtil.hectaresToAcres(acres))
    }

    if(planChargeLength === 1){
        return domUtil.calculateOneShotCost(area)
    }

    var priceTierCentsUSD = [
        [ 300, 100],
        [ 300, 80],
        [ 400, 74],
        [50000000, 33]
    ] // figure at index 0 is the acreage, figure at index 1 is the base cent cost
    // build an array of break points, with a cent cost per acre ratio

    for (var i = 0; i < priceTierCentsUSD.length; i++){
        if(area <= 0){
            return cost * planChargeLength
        }
        var acreageStep = priceTierCentsUSD[i][0]
        var priceTier = priceTierCentsUSD[i][1]
        // console.log(acreageStep, priceTier, " cost: "+cost, " area: "+area)
        if (area <= acreageStep ){
            cost += area * priceTier
            area -= acreageStep
        } else {
            cost += acreageStep * priceTier
            area -= acreageStep
        }
    }
    return cost * planChargeLength
}

domUtil.planChargeLength = function(plan){
    if(plan === '15week'){
        return 21
    } else if (plan === 'oneshot'){
        return 1
    } else if (plan === 'annual'){
        return 30
    }
    throw "domUtil.planChargeLength: The parameter passed doesn't match any of the known plans"
}

domUtil.findNextMidSeason = function(region){
    var nextBilling = moment().add(2,'w').month()
    var nextMidSeason
    var cycle = domUtil.regionToOpsCycle(region)
    if(cycle === 'northern' || cycle === 'year-round'){
        nextMidSeason = moment().dayOfYear(1).add(6,'M')
        if(nextBilling > 5){
            nextMidSeason.add(1, 'y')
        }
    } else if (cycle === 'southern') {
        nextMidSeason = moment().dayOfYear(1)
        if (nextBilling <= 5){
            nextMidSeason.add(1, 'y')
        }
    }
    return nextMidSeason
}

domUtil.findEndOfSeason = function(region, endDateMoment){
    var endDateMomentMonth = endDateMoment.month()
    var standardizedEndDate
    var cycle = domUtil.regionToOpsCycle(region)
    standardizedEndDate = moment().millisecond(0).second(0).minute(0).hour(0).year(endDateMoment.year()+1).dayOfYear(1).millisecond(-1)
    if(cycle === 'northern'){
    } else if (cycle === 'southern') {
        standardizedEndDate.add(6, 'M')
    } else if (cycle === 'year-round') {
        return endDateMoment.add(12, 'M')
    }
    return standardizedEndDate
}

domUtil.regionToOpsCycle = function(region){

    var options = {
        norcal: 'northern',
        midwest: 'northern',
        pnwWillamette: 'northern',
        pnwPalouse: 'northern',
        chile: 'southern',
        socalaz: 'year-round'
    }
    return options[region]
}

domUtil.isRegionAmerican = function(region){
    var americanRegions = {
        socalaz: "merka",
        norcal: "freedom!",
        pnwWillamette: "No one likes metric anyway",
        pnwPalouse: "How do you spell acres in Spanish?",
        midwest: "How many countries in the world use imperial? Two"
    }
    if(americanRegions[region]){
        return true
    }
    return false
}

domUtil.startDateOptionBuilder = function(startWeek, currentYear, scheduleReference, dayOfYear, userRole){
    var weeksArray = []
    var pastSchedule = scheduleReference.slice(0)
    var schedule = scheduleReference.slice(0)
    if(startWeek === 1 && dayOfYear >= 359){
        currentYear += 1
    }

    if(userRole === "ADMIN"){
        pastSchedule.rotate(startWeek - 52 ) //mutates pastSchedule
        for (var i = 0; i < pastSchedule.length; i++){
            if (pastSchedule[i]){
                var currentWeek = startWeek - 52 + i
                var currentWeekDate = moment([currentYear]).startOf('isoWeek').add(currentWeek ,'w').subtract(1, 'd')
                var endOfDateRange = moment(currentWeekDate).add(pastSchedule[i], 'w').subtract(1, 'd')
                var orderDateRange

                if (userLang === "en-us" || userLang === "en_us"){
                    var orderDateRange = currentWeekDate.format("MMM D") + " to " + endOfDateRange.format("MMM D YYYY");
                } else {
                    var orderDateRange = currentWeekDate.format("D/M") + "-" + endOfDateRange.format("D/M/YYYY");
                }
                weeksArray.push({
                    currentWeekDate: currentWeekDate.format("YYYY-MM-DD"),
                    orderDateRange: orderDateRange,
                    endDate: endOfDateRange.format("YYYY-MM-DD")
                })
            }
        }
        startWeek -= 1
    }

    schedule.rotate(startWeek) //mutates schedule

    for (var i = 0; i < schedule.length; i++){
        if (schedule[i]){
            var currentWeek = startWeek + 1 + i
            var currentWeekDate = moment([currentYear]).startOf('isoWeek').add(currentWeek ,'w').subtract(1, 'd')
            var endOfDateRange = moment(currentWeekDate).add(schedule[i], 'w').subtract(1, 'd')
            var orderDateRange

            if (userLang === "en-us" || userLang === "en_us"){
                var orderDateRange = currentWeekDate.format("MMM D") + " to " + endOfDateRange.format("MMM D YYYY");
            } else {
                var orderDateRange = currentWeekDate.format("D/M") + "-" + endOfDateRange.format("D/M/YYYY");
            }
            weeksArray.push({
                currentWeekDate: currentWeekDate.format("YYYY-MM-DD"),
                orderDateRange: orderDateRange,
                endDate: endOfDateRange.format("YYYY-MM-DD")
            })
        }
    }
    return weeksArray // An array of time-ordered values representing the weeks that we are flying. Each element in the array is an object with a weekStartDate string for the database and a display date-range string for the user
}