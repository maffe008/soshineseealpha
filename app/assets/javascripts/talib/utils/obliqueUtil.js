/**
 * Created by maffee on 16/10/9.
 */
var obliqueUtil = {}

obliqueUtil.obliquePopupContent = function(url, collectionPointImageId, obliqueDate){
    if(url !== null){

        var momentDate = moment(obliqueDate);
        var displayDate = momentDate.format("ddd, MMM Do, YYYY h:mm A");

        var imageTag = "<div><img src='" + url + "' width=480px/></div><div class='downloadbutton'><a href='" + url + "' class='btn btn-success active' target='_blank'><span class='glyphicon glyphicon-download-alt'></span>" + polyglot.t("capitalized.phrase.download.oblique") + "</a></div>"

        var tableOblique = "<table class='table table-condensed' style='margin-bottom:0'><tr><td>" + polyglot.t("capitalized.phrase.date") + "</td><td>" + displayDate + "</td></tr><tr><td></td><td>"

        var issueUrl = "<a href='javascript:void(0)' onclick='window.taGlobals.showLayerReport(\"" + collectionPointImageId + "\", \"oblique\")'>" + polyglot.t("popup.issue") + "</a></td>"

        return imageTag + tableOblique + issueUrl
    }
}

obliqueUtil.obliqueThumbnailUrlFixer = function(url, isDemo){
    if(url !== null) {
        if(isDemo) {
            return ('/apidemo/layers/oblique/' + url.slice(28));
        }
        return ('/api/layers/oblique/' + url.slice(28));
    }
}

obliqueUtil.adjustBearing = function(bearing){
    var newBearing
    if(bearing >= -180 && bearing < 90){
        newBearing = -bearing + 90
    } else {
        newBearing = -bearing + 450
    }
    return newBearing
}

obliqueUtil.adjustObliqueGeom = function(point, bearing){
    var geo = GeographicLib.Geodesic.WGS84;

    var transformedPoint = geo.Direct(point.coordinates[1], point.coordinates[0], bearing, point.coordinates[2]-300)
    point.coordinates[1] = transformedPoint.lat2
    point.coordinates[0] = transformedPoint.lon2
    return point
}
