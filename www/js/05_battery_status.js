window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(info) {
    alert("BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged);
}

//document.getElementById("batteryStatus").addEventListener("batterystatus", onBatteryStatus, false);