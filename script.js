 function validarsesion(){
    const usuario= document.getElementById("usuario").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();


if(usuario=="admin" ||usuario=="mesero" ||usuario=="cocinero"||usuario=="domiciliario"){
    if(usuario=="admin" && contraseña=="123"){
        alert("bienvenida a la administración");
        window.location.href ="pagina-principal.html"
        
        return false;
    }
    else if(usuario=="mesero" && contraseña=="456"){
        alert("bienvenido colaborador, recuerde revisar su horario");
        window.location.href ="pagina-principal.html"
        
        return false;
    }
    else if (usuario=="cocinero" && contraseña=="789"){
        alert("bienvenido cociner@  estamos felices de tenerte en nuestra empresa, sin ti nada de esto sería posible");
        window.location.href ="pagina-principal.html"
        
        return false;
    }
    else if(usuario=="domiciliario" && contraseña=="12345"){
    
    window.location.href ="pagina-principal.html"
        
        return false;
    }
    else {
        alert("usuario o contraseña invalida");
       
        
        return false;
     }
    }
}
