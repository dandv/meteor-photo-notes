Template.body.helpers({
  notes: function () {
    return Notes.find(
      { },
      {
        sort: { timestamp: -1 }
      }
    );
  }  
});

Template.body.events({
  'click button': function () {
    var cameraOptions = {
      width: 800,
      height: 600
    };

    MeteorCamera.getPicture(cameraOptions, function (error, data) {
      Session.set("photo", data);
      if (error) {
        // e.g. camera permission denied, or unsupported browser (Safari on iOS, looking at you)
        console.log(error);
      } else {  
        Notes.insert({photo: data, timestamp: new Date()});
      }  
    });
  }
});
