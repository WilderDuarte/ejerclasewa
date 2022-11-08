var array;

function arraymulti(){
    array = [
        {username:"Wilder", cod:"190363", doc:"123456", tipouser:"profe"},
        {username:"Andres", cod:"190364", doc:"123456", tipouser:"estudiante"},
        {username:"Duarte", cod:"190365", doc:"123456", tipouser:"admin"}
    ]
    let fecha = new Date();
    // var tiempo = fecha.getTime();
    // console.log(tiempo);
}

function compara(){
    var nombre = $("#nombre").val();
    for(let i=0;i<array.length;i++){
        if(nombre==array[i].username){
            console.log("El nombre SI existe");
        }
        else{
            console.log("El nombre NO existe");
        }
    }
    
    

}