document.addEventListener('DOMContentLoaded', function() {
 if (!Notification) {
  alert('Desktop notifications not available in your browser. Try Chromium.');
  return;
 }

 if (Notification.permission !== 'granted')
  Notification.requestPermission();
});

window.onunload(if (Notification.permission !== 'granted'){
  Notification.requestPermission();
} else {
  var notification = new Notification() {
   icon: 'https://docs.google.com/uc?export=download&id=1Hz5g7Cyuwo49jpDI0i45BiYBlD1W-yNC',
   body: 'Click here on this notification to go back to my site.',
  }
  notification.onclick = function() {
   window.open('https://pincescpu987.github.io/Links/');
  }
 }
);
