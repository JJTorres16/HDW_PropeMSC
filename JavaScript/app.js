var getData = function(){
  var base_str = document.getElementById("Base").value;
  var altura_str = document.getElementById("Altura").value;

      if (base_str == "") {
        document.getElementById("Base").focus();
          } else {
            if (altura_str == ""){
              document.getElementById("Altura").focus();
            } else {
              document.getElementById("Base").value = "";
              document.getElementById("Altura").value = "";
              document.getElementById("Base").focus();
          }
       }

      var base = parseFloat(base_str);
      var altura = parseFloat(altura_str);
      var area_new = base*altura;
      var area_orig = 5.6*2.8; //15.68
      var relacion_areas = area_orig/area_new;

      var base_base = parseInt(5.6/base); // >1 (1.1, 1.3)
      var altura_altura = parseInt(2.8/altura); // > 1 (1.1, 1.3)
      var cantidad_horizontal = (base_base*altura_altura);

      //console.log("La figura cabe horizontalmente " + cantidad_horizontal + " veces");

      var base_altura = parseInt(5.6/altura); // >1 (1.1, 1.3)
      var altura_base = parseInt(2.8/base); // > 1 (1.1, 1.3)
      var cantidad_vertical = (base_altura*altura_base);

      document.getElementById("val_area").innerHTML = area_new;

          if (cantidad_horizontal > 1 || cantidad_horizontal == 0){
              document.getElementById("cant_hor").innerHTML = cantidad_horizontal + " veces";
              } else {
                  document.getElementById("cant_hor").innerHTML = cantidad_horizontal + " vez";
                  }

                  if (cantidad_vertical > 1 || cantidad_vertical == 0){
                      document.getElementById("cant_vert").innerHTML = cantidad_vertical + " veces";
                      } else {
                          document.getElementById("cant_vert").innerHTML = cantidad_vertical + " vez";
                          }

/************************************************************************************************************************/

                          if (relacion_areas > 1 || relacion_areas == 0){
                              document.getElementById("cant_mat").innerHTML = relacion_areas.toFixed(2) + " veces";
                              } else {
                                  document.getElementById("cant_mat").innerHTML = relacion_areas.toFixed(2) + " vez";
                                }

    var canv_hor = document.getElementById("canvas_hor");
    lienzo_horizontal = canv_hor.getContext("2d");
    lienzo_horizontal.fillStyle = "#0B2161";
    lienzo_horizontal.strokeStyle = "#CEF6F5";
    lienzo_horizontal.clearRect(0,0,560,280);
    lienzo_horizontal.fillRect(0,0,(base*base_base*100),(altura*altura_altura*100));

    var canv_vert = document.getElementById("canvas_vert");
    lienzo_vertical = canv_vert.getContext("2d");
    lienzo_vertical.fillStyle = "#DBA901";
    lienzo_vertical.strokeStyle = "#CEF6F5";
    lienzo_vertical.clearRect(0,0,560,280);
    lienzo_vertical.fillRect(0,0,(altura*base_altura*100),(base*altura_base*100));

    var i = 0;
    var e = 0;

    while(e<=altura_altura-1){
      while(i<=base_base-1){
        lienzo_horizontal.strokeRect((base*i*100),(altura*e*100),(base*100),(altura*100));
          i++;
        }
        i = 0;
        e++;
    }

    var i = 0;
    var e = 0;

    while(e<=altura_base-1){
      while(i<=base_altura-1){
        lienzo_vertical.strokeRect((altura*i*100),(base*e*100),(altura*100),(base*100));
          i++;
        }
        i = 0;
        e++;
    }
}


function validaNumericos(event){
  if ((event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46){
    return true;
  } else {
    return false;
  }
}
