
$(function(){
    
	var operation = "A"; //"A"=Adding; "E"=Editing

	var selected_index = -1; //Index of the selected list item

	var tbClients = localStorage.getItem("tbClients");//Retrieve the stored data
    
    var seleccionados = [];

	tbClients = JSON.parse(tbClients); //Converts string to object

	if(tbClients == null) //If there is no data, initialize an empty array
		tbClients = [];
    
    
    if (tbClients.length==0){
        fillTable();
    }
    
    function fillTable(){
        
        var client = JSON.stringify({
			ID    : "BONOFW",
			Nombre  : "BONOS FORWARD",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION BONOFW",
            Motivo : "MOTIVO BONOFW",
            Estatus : "Pendiente de Validar",
            Usuario : "Osvaldo Rosas",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client2 = JSON.stringify({
			ID    : "BONOFW 2",
			Nombre  : "BONOS FORWARD 2",
			Mercado : "SECM 2",
			Descripcion : "DESCRIPCION BONOFW 2",
            Motivo : "MOTIVO BONOFW 2",
            Estatus : "Pendiente de Validar",
            Usuario : "Osvaldo Rosas",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client2);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "BONOFW 3",
			Nombre  : "BONOS FORWARD 3",
			Mercado : "SECM 3",
			Descripcion : "DESCRIPCION BONOFW 3",
            Motivo : "MOTIVO BONOFW 3",
            Estatus : "Pendiente de Validar",
            Usuario : "Osvaldo Rosas",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
    
		
        List();
        
    }
    
	function Add(){
		var client = JSON.stringify({
			ID    : $("#txtID").val(),
			Nombre  : $("#txtName").val(),
			Mercado : $("#txtMercado").val(),
			Descripcion : $("#txtDescripcion").val(),
            Motivo : $("#txtMotivo").val(),
            Estatus : $("#txtEstatus").val(),
            Usuario : $("#txtUsuario").val(),
            FechaUltModif : $("#txtFecha").val()
		});
		tbClients.push(client);
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("El producto fue guardado.");
		return true;
	}

	function Edit(){
		tbClients[selected_index] = JSON.stringify({
				ID    : $("#txtID").val(),
                Nombre  : $("#txtName").val(),
                Mercado : $("#txtMercado").val(),
                Descripcion : $("#txtDescripcion").val(),
                Motivo : $("#txtMotivo").val(),
                Estatus : $("#txtEstatus").val(),
                Usuario : $("#txtUsuario").val(),
                FechaUltModif : $("#txtFecha").val()
			});//Alter the selected item on the table
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("El producto fue actualizado.")
		operation = "A"; //Return to default value
		return true;
	}
    
    

	function Delete(){
		tbClients.splice(selected_index, 1);
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("Producto Eliminado.");
        operation = "A";
        location.reload();
        return true;
	}

	function List(){
		$("#tblList").html("");
		$("#tblList").html(
			"<thead>"+
			"	<tr>"+
            "   <th></th>"+
            "   <th></th>"+
			"	<th>Identificador</th>"+
			"	<th>Nombre del Producto</th>"+
			"	<th>Mercado</th>"+
            "	<th>Descripcion</th>"+
            "	<th>Motivo</th>"+
            "	<th>Estatus</th>"+
            "	<th>Usuario</th>"+
			"	<th>Fecha de ultima modificación</th>"+
			"	</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"
			);
		for(var i in tbClients){
			var cli = JSON.parse(tbClients[i]);
		  	$("#tblList tbody").append("<tr>"+
                                         "<td><input type='checkbox' class='check' alt='check"+i+"'></td>"+
									 	 "	<td><button type='button' class='btn btn-default btn-xs btnEdit' id='ButtonWidth' alt='Edit"+i+"'>Modificación</button>" + 
										 "	<td>"+cli.ID+"</td>" + 
										 "	<td>"+cli.Nombre+"</td>" + 
										 "	<td>"+cli.Mercado+"</td>" + 
										 "	<td>"+cli.Descripcion+"</td>" +
                                         "	<td>"+cli.Motivo+"</td>" +
                                         "	<td>"+cli.Estatus+"</td>" +
                                         "	<td>"+cli.Usuario+"</td>" +
                                         "  <td>"+cli.FechaUltModif+"</td>" +
		  								 "</tr>");
		}
	}
    
    function obtieneFecha(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!

        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        var today = dd+'/'+mm+'/'+yyyy;
        
        return today;
    }
    
    function bajaOperativa(){
        for (i = 0; i < seleccionados.length; i++) {
            var registro =  JSON.parse(tbClients[seleccionados[i]]); 
            tbClients[seleccionados[i]] = JSON.stringify({
                ID    : registro.ID,
                Nombre  : registro.Nombre,
                Mercado : registro.Mercado,
                Descripcion : registro.Descripcion,
                Motivo : registro.Motivo,
                Estatus : "Baja Operativa Pendiente de Validar",
                Usuario : registro.Usuario,
                FechaUltModif : registro.FechaUltModif
			});//Alter the selected item on the table
		localStorage.setItem("tbClients", JSON.stringify(tbClients));  
        }
        location.reload();
    }
    
    function bajaTotal(){
        for (i = 0; i < seleccionados.length; i++) {
            var registro =  JSON.parse(tbClients[seleccionados[i]]); 
            tbClients[seleccionados[i]] = JSON.stringify({
                ID    : registro.ID,
                Nombre  : registro.Nombre,
                Mercado : registro.Mercado,
                Descripcion : registro.Descripcion,
                Motivo : registro.Motivo,
                Estatus : "Baja Total Pendiente de Validar",
                Usuario : registro.Usuario,
                FechaUltModif : registro.FechaUltModif
			});//Alter the selected item on the table
		localStorage.setItem("tbClients", JSON.stringify(tbClients));  
        }
        location.reload();
    }
    
    function reactivacion(){
        for (i = 0; i < seleccionados.length; i++) {
            var registro =  JSON.parse(tbClients[seleccionados[i]]); 
            tbClients[seleccionados[i]] = JSON.stringify({
                ID    : registro.ID,
                Nombre  : registro.Nombre,
                Mercado : registro.Mercado,
                Descripcion : registro.Descripcion,
                Motivo : registro.Motivo,
                Estatus : "Operativo",
                Usuario : registro.Usuario,
                FechaUltModif : registro.FechaUltModif
			});//Alter the selected item on the table
		localStorage.setItem("tbClients", JSON.stringify(tbClients));  
        }
        location.reload();
    }
    
    function deshabilita(){
        $("#txtID").prop("disabled","true");
		$("#txtName").prop("disabled","true");
		$("#txtMercado").prop("disabled","true");
		$("#txtDescripcion").prop("disabled","true");
        $("#txtMotivo").prop("disabled","true");
        $("#txtEstatus").prop("disabled","true");
    }
    
    function habilita(){
        $("#txtID").prop("disabled","");
		$("#txtName").prop("disabled","");
		$("#txtMercado").prop("disabled","");
		$("#txtDescripcion").prop("disabled","");
        $("#txtMotivo").prop("disabled","");
    }
    
    /////////////////////////Eventos

	$("#frmCadastre").bind("submit",function(){		
		if(operation == "A")
			return Add();
		else
			return Edit();
	});

	List();

	$(".btnEdit").bind("click", function(){
        obtieneFecha();
        $("#txtEstatus").prop('disabled', false);
		operation = "E";
		selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
		
		var cli = JSON.parse(tbClients[selected_index]);
		$("#txtID").val(cli.ID);
		$("#txtName").val(cli.Nombre);
		$("#txtMercado").val(cli.Mercado);
		$("#txtDescripcion").val(cli.Descripcion);
        $("#txtMotivo").val(cli.Motivo);
        $("#txtEstatus").val(cli.Estatus);
        $("#txtUsuario").val(cli.Usuario);
        //$("#txtFecha").val(cli.FechaUltModif);
		$("#txtID").attr("readonly","readonly");
		$("#txtName").focus();
        
	});

	$(".btnDelete").bind("click", function(){
		selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
		Delete();
		List();
	});
    
    $(".btnBajaOperativa").bind("click", function(){
        alert("Entre a baja operativa");
        console.log($(this).attr("alt").replace("BajaOperativa", ""));
        selected_index = parseInt($(this).attr("alt").replace("BajaOperativa", ""));
        console.log(selected_index);
        
    });
    
    $(".check").bind('change',function(){
        selected_index = parseInt($(this).attr("alt").replace("check", ""));
        
        if( $(this).is(':checked') ) {
            seleccionados.push(selected_index);
        }
        else {
            
            for (i = 0; i < seleccionados.length; i++) {
                if(seleccionados[i]==selected_index){
                    seleccionados.splice(i);
                }
            }
        }
        
        
    });
    
    $("#btnBajaOperativa").on("click", function(){
		if(seleccionados.length==0){
           alert("No se ha seleccionado ningun registro");
        }
        else{
            bajaOperativa();
        }
	});
    
    $("#btnBajaTotal").on("click", function(){
		if(seleccionados.length==0){
           alert("No se ha seleccionado ningun registro");
        }
        else{
            bajaTotal();
        }
	});
    
    $("#btnReactivacion").on("click", function(){
		if(seleccionados.length==0){
           alert("No se ha seleccionado ningun registro");
        }
        else{
            reactivacion();
        }
	});
    
    $("#btnConsulta").on("click", function(){
		location.reload();
	});
    
    
    
    $("#checktodos").on('change',function(){
        
        
        if( $(this).is(':checked') ) {
            deshabilita();
        }
        else {
            habilita();
        }
        
        
    });
    
    
});