 function validarsesion(){
    const usuario= document.getElementById("usuario").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();


if(usuario=="admin" ||usuario=="empleados" ){
    if(usuario=="admin" && contraseña=="123"){
        alert("bienvenida a la administración");
        window.location.href ="pagina-principal.html"
        
        return false;
    }
    else if(usuario=="empleados" && contraseña=="456"){
        alert("bienvenido colaborador, recuerde revisar su horario");
        window.location.href ="pagina-principal.html"
        
        return false;
    }
   
    
    else {
        alert("usuario o contraseña invalida");
       
        
        return false;
     }
    }
}
