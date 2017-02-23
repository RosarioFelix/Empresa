
var lista =
[ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
  { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
  { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
  { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
  { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];

  var llamando = document.getElementById('llamar');

 llamar.innerHTML= "";

  lista.forEach(function(e){
    llamar.innerHTML += (" <div> <ul>"+"<li>Nombre: "+ e.nombre+ "<li>Apellido: " +
                      e.apellido+"<li>Rol: " + e.rol+"<li>Cumpleaños: " +
                      e.cumpleanios+"</li> </ul> </div>");

  });
