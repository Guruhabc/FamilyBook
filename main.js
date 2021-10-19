
  var images = ["https://c.tenor.com/LR1ix8BWRX4AAAAM/papa-daddy.gif","https://c.tenor.com/7ejo0LVwUZoAAAAM/happy-mothers-day-mom-happy-moms-day.gif","https://i.pinimg.com/originals/c8/0d/5a/c80d5a2d2e1504e84a9d98f3cb825442.gif","https://c.tenor.com/VylB5F2roWMAAAAi/granny-grandmother.gif","https://cdn.dribbble.com/users/1056629/screenshots/3392167/grandpa.gif"
  ];
  var names = ["Family Book","Mom","Me","Grand Mother","Grand Father","Dad"];
  var i = 0;
  function update()
  {    
      i++;
      var numbers_of_family_member_in_array = 5
      if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
      var updatedImage = images[i]
      var updatedName = names[i]
      document.getElementById("family_member_image").src = updatedImage;
      document.getElementById("family_member_name").innerHTML = updatedName;
    }