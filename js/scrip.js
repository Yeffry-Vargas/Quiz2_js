const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 20 },
  { id: 2, nombre: 'Juan', edad: 22 },
  { id: 3, nombre: 'María', edad: 21 }
];

function buscarEstudiante(id) {
  return new Promise((resolve, reject) => {
    const estudiante = estudiantes.find(est => est.id === id);

    if (estudiante) {
      resolve(estudiante);
    } else {
      reject(`No existe un estudiante con el ID ${id}.`);
    }
  });
}

buscarEstudiante(2)
  .then(est => {
    console.log(`Nombre: ${est.nombre}, Edad: ${est.edad}`);
  })
  .catch(error => {
    console.error(error);
  });

buscarEstudiante(10)
  .then(est => {
    console.log(`Nombre: ${est.nombre}, Edad: ${est.edad}`);
  })
  .catch(error => {
    console.error(error);
  });