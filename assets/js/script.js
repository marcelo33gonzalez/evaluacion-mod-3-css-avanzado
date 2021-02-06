$(document).ready(function () {
  //ejercicio 1

  $("#btoEjercicioUno").click(function () {
    var value,
      span = $("#spEjercicioUno")[0];
    console.log(span);
    value = jQuery.data(
      span,
      "hola",
      " Moraleja: Según hagamos el engaño, así recibiremos el daño."
    );
    $("#spEjercicioUno").text("" + value);
  });

  $("#btoEjerUnoObtener").click(function () {
    var value,
      span = $("#spEjercicioUno").text();
    alert(span);
  });

  //ejercicio 2

  $("#btoEjercicioDos").click(function () {
    $("#pEjercicioDos").addClass("rojo");
  });
  $("#btoEjercicioDos").click(function () {
    $("#pEjercicioDos").addClass("rojo grande26");
  });

  //Ejercicio 3

  $("#btoEjercicioTres").click(function () {
    $("#imgEjercicioTres").slideToggle();
  });

  //Ejercicio 4

  $("#btoEjercicioCuatro").click(function () {
    $("#pEjercicioCuatro").append(
      "<br>Moraleja: No trates nunca de complacer y quedar bien con todo el mundo. Te será imposible."
    );
  });

  //Ejercicio 5

  $("#btoEjercicioCinco").click(function () {
    $("#inValor").val("Marcelo Gonzalez");
  });

  //Ejercicio 6

  $("#btoEjercicioSeisIn").click(function () {
    $("#imgEjercicioSeisA").fadeIn();
    $("#imgEjercicioSeisB").fadeIn("slow");
    $("#imgEjercicioSeisC").fadeIn(2000);
  });
  $("#btoEjercicioSeisOut").click(function () {
    $("#imgEjercicioSeisA").fadeOut(1000);
    $("#imgEjercicioSeisB").fadeOut(1500);
    $("#imgEjercicioSeisC").fadeOut(2000);
  });

  //Ejercicio 7
  $("#btoEjercicioSiete").click(function () {
    $("#inputSiete").focus();
    $("#spEjercicioSiete").css("display", "inline").fadeOut(2000);
  });

  //Ejercicio 8

  $("#btoEjOchoAparece").on("click", function () {
    $("#pEjercicioOchoB").show();
  });

  $("#btoEjOchoDesaparece").on("click", function () {
    $("#pEjercicioOchoB").hide();
  });

  //ejercicio 9

  $("#slideDown").click(function () {
    $("#panel").slideDown("slow");
  });

  $("#slideUp").click(function () {
    $("#panel").slideUp("slow");
  });

  //fin de los ejercicios
});
