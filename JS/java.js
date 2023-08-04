function isEmpty(){
    var str=document.forms['myForm'].fn.value;
    var str1=document.forms['myForm'].ln.value;
    var str2=document.forms['myForm'].dat.value;
    var str3=document.forms['myForm'].ag.value;
    var str4=document.forms['myForm'].genre.value;
    var str5=document.forms['myForm'].nat.value;
    var str6=document.forms['myForm'].mai.value;
    var str7=document.forms['myForm'].nm.value;
    var str8=document.forms['myForm'].hotel.value;
    
    if(!str.replace(/\s+/,'').length){
        alert("Vellez renseigner votre Nom");
        return false;
    }
    if(!str1.replace(/\s+/,'').length){
        alert("Vellez renseigner votre prenom");
        return false;
    }
    if(!str2.replace(/\s+/,'').length){
        alert("Vellez renseigner votre date de naissance");
        return false;
    }
    if(!str3.replace(/\s+/,'').length){
        alert("Vellez renseigner votre âge");
        return false;
    }
    if(!str4.replace(/\s+/,'').length){
        alert("Vellez renseigner votre sexe");
        return false;
    }
    if(!str5.replace(/\s+/,'').length){
        alert("Vellez renseigner votre nationalité");
        return false;
    }
    if(!str6.replace(/\s+/,'').length){
        alert("Vellez renseigner votre E-mail");
        return false;
    }
    if(!str7.replace(/\s+/,'').length){
        alert("Vellez renseigner votre numero de telephone");
        return false;
    }
    if(!str8.replace(/\s+/,'').length){
        alert("Vellez renseigner votre hôtel");
        return false;
    }
}

// code java de geolocalisation
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      var locationElement = document.getElementById("location");
      locationElement.textContent = "Latitude: " +latitude + "Longitude: " + longitude;
    });
  } else {
    console.log("La géolocalisation n'est pas supportée par ce navigateur.");
  }  

  //carte gps
  function initMap() {
    var position = { lat: 48.8566, lng: 2.3522 }; // Coordonnées GPS (Paris, France)

    var map = new google.maps.Map(document.getElementById("map"), {
      center: position,
      zoom: 10
    });

    var marker = new google.maps.Marker({
      position: position,
      map: map,
      title: "Position GPS"
    });
  }