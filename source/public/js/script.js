fetch('../json/matriculado.json').then(res => res.json)
.then(rows => {
  let matriculado = JSON.parse(data);
  mostrarJson(matriculado);
})
.then((rows) => {
    for (let row of rows) {
        // row will be a mysql row -- you can loop over these and do what you want with them
    }
 })
.catch(e => console.log(e));

function mostrarJson(matriculado){
  console.log(matriculado);
}
