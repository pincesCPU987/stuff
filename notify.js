document.addEventListener('DOMContentLoaded', function() {
 if (!Notification) {
  alert('Desktop notifications not available in your browser. Try Chromium.');
  return;
 }

 if (Notification.permission !== 'granted')
  Notification.requestPermission();
});

window.onbeforeunload = notifyMe;
function notifyMe(e){
   // do something...
   return null;
}
