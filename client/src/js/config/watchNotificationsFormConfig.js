'use strict';

var notificationsConfig = [
    //Dummy notification stuff below
    /*{
      label: 'Go to contacts on right button',
      notificationType: 'dummyNotification',
      defaultValue: 'Click right button to go to contacts.'
    },
    {
      label: 'Left button will be contacts now',
      notificationType: 'dummyNotification',
      defaultValue: 'Now left button will lead you to contacts.'
    },
    {
      label: 'No default message!',
      notificationType: 'dummyNotification'
    }*/
    {
      label:'Send Meet Request',
      notificationType:'meetingRequestRecieve',
      defaultValue:''
    },

    {
      label:'Meeting Confirmed',
      notificationType:'meetConfirmed',
      defaultValue:''
    }

];

module.exports = notificationsConfig;
