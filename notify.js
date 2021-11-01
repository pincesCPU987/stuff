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
 if (Notification.permission !== 'granted')
  Notification.requestPermission();
 else {
  var notification = new Notification("Click to Go Back", {
   icon: 'https://docs.google.com/uc?export=download&id=1Hz5g7Cyuwo49jpDI0i45BiYBlD1W-yNC',
   body: 'Click this notification to return to my website. Close this notifaction if you don\'t want it.',
  });
  Notification.onclick = function() {
   window.open('pincescpu987.github.io/Links/');
  };
 }
   return null;
}
