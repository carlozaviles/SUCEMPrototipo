
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
			ID    : "CETES",
			Nombre  : "CERTIFICADOS DE LA TESORERIA",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION CETES",
            Motivo : "MOTIVO CETES",
            Estatus : "Pendiente de Validar",
            Usuario : "Andrea Sevilla",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client2);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "BONDES",
			Nombre  : "BONOS DE DESARROLLO DEL GOBNO FEDER",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION BONDES",
            Motivo : "MOTIVO BONDES",
            Estatus : "Pendiente de Validar",
            Usuario : "Mario Unzueta",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
    
        var client = JSON.stringify({
			ID    : "ABS",
			Nombre  : "ACEPTACIONES BANCARIOS",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION ABS",
            Motivo : "MOTIVO ABS",
            Estatus : "Pendiente de Validar",
            Usuario : "Gustavo Sanchez",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "PRLV",
			Nombre  : "PAGARE VENTANILLA",
			Mercado : "DLDT",
			Descripcion : "DESCRIPCION PRLV",
            Motivo : "MOTIVO PRLV",
            Estatus : "Pendiente de Validar",
            Usuario : "Armando Perez",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "FXD",
			Nombre  : "FOREIGN EXCHANGE",
			Mercado : "FXDH",
			Descripcion : "DESCRIPCION FXD",
            Motivo : "MOTIVO FXD",
            Estatus : "Pendiente de Validar",
            Usuario : "Alma Lobato",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "GENLED",
			Nombre  : "MULTICURRENCY GENERAL LEDGER",
			Mercado : "MGL",
			Descripcion : "DESCRIPCION GENLED",
            Motivo : "MOTIVO GENLED",
            Estatus : "Pendiente de Validar",
            Usuario : "Carlos Aviles",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        /////////////////////////////////////////////////////
        
        var client = JSON.stringify({
			ID    : "SECUR",
			Nombre  : "FIXED INCOME SECURITIES",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION SECUR",
            Motivo : "MOTIVO SECUR",
            Estatus : "Pendiente de Validar",
            Usuario : "Osvaldo Rosas",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client2 = JSON.stringify({
			ID    : "TESO",
			Nombre  : "BONOS DE LA TESORERIA",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION TESO",
            Motivo : "MOTIVO TESO",
            Estatus : "Pendiente de Validar",
            Usuario : "Andrea Sevilla",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client2);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "AJUSTA",
			Nombre  : "BONOS AJUSTABLES DEL GOBIERNO FEDER",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION AJUSTA",
            Motivo : "MOTIVO AJUSTA",
            Estatus : "Pendiente de Validar",
            Usuario : "Mario Unzueta",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
    
        var client = JSON.stringify({
			ID    : "PAGARE",
			Nombre  : "PAGARE C/ REND. LIQ. AL VENCIMIENTO",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION PAGARE",
            Motivo : "MOTIVO PAGARE",
            Estatus : "Pendiente de Validar",
            Usuario : "Gustavo Sanchez",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "PENINT",
			Nombre  : "PENA CONVENCIONAL",
			Mercado : "DLDT",
			Descripcion : "DESCRIPCION PENINT",
            Motivo : "MOTIVO PENINT",
            Estatus : "Pendiente de Validar",
            Usuario : "Armando Perez",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "IVA",
			Nombre  : "IVA",
			Mercado : "FEES",
			Descripcion : "DESCRIPCION IVA",
            Motivo : "MOTIVO IVA",
            Estatus : "Pendiente de Validar",
            Usuario : "Alma Lobato",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "CALL",
			Nombre  : "CALL AND NOTICE",
			Mercado : "ACCT",
			Descripcion : "DESCRIPCION CALL",
            Motivo : "MOTIVO CALL",
            Estatus : "Pendiente de Validar",
            Usuario : "Carlos Aviles",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
		
        /////////////////////////////////////////////////////
        
        var client = JSON.stringify({
			ID    : "DPNL",
			Nombre  : "DEPOSITOS Y PRESTAMOS",
			Mercado : "DLDT",
			Descripcion : "DESCRIPCION DPNL",
            Motivo : "MOTIVO DPNL",
            Estatus : "Pendiente de Validar",
            Usuario : "Osvaldo Rosas",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client2 = JSON.stringify({
			ID    : "REPO",
			Nombre  : "REPORTOS",
			Mercado : "RPRH",
			Descripcion : "DESCRIPCION REPO",
            Motivo : "MOTIVO REPO",
            Estatus : "Pendiente de Validar",
            Usuario : "Andrea Sevilla",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client2);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "PRCALL",
			Nombre  : "PRESTAMO CALL",
			Mercado : "DLDT",
			Descripcion : "DESCRIPCION PRCALL",
            Motivo : "MOTIVO PRCALL",
            Estatus : "Pendiente de Validar",
            Usuario : "Mario Unzueta",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
    
        var client = JSON.stringify({
			ID    : "DEPCAL",
			Nombre  : "DEPOSITO CALL",
			Mercado : "DLDT",
			Descripcion : "DESCRIPCION DEPCAL",
            Motivo : "MOTIVO DEPCAL",
            Estatus : "Pendiente de Validar",
            Usuario : "Gustavo Sanchez",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "ACCS04",
			Nombre  : "ACCIONES SOCIEDADES INVERSION COMUN",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION ACCS04",
            Motivo : "MOTIVO ACCS04",
            Estatus : "Pendiente de Validar",
            Usuario : "Armando Perez",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "ACCS01",
			Nombre  : "ACCIONES DE SEGUROS",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION ACCS01",
            Motivo : "MOTIVO ACCS01",
            Estatus : "Pendiente de Validar",
            Usuario : "Alma Lobato",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "ACCS02",
			Nombre  : "ACCIONES DE FIANZAS",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION ACCS02",
            Motivo : "MOTIVO ACCS02",
            Estatus : "Pendiente de Validar",
            Usuario : "Carlos Aviles",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        /////////////////////////////////////////////////////
        
        var client = JSON.stringify({
			ID    : "ACCS03",
			Nombre  : "ACCIONES DE CASAS DE BOLSA",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION ACCS03",
            Motivo : "MOTIVO ACCS03",
            Estatus : "Pendiente de Validar",
            Usuario : "Osvaldo Rosas",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client2 = JSON.stringify({
			ID    : "ACCS06",
			Nombre  : "ACCIONES SOCIEDADES INVERSION CAPIT",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION ACCS06",
            Motivo : "MOTIVO ACCS06",
            Estatus : "Pendiente de Validar",
            Usuario : "Andrea Sevilla",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client2);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "ACCS07",
			Nombre  : "ACCIONES INDUSTRIALES",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION ACCS07",
            Motivo : "MOTIVO ACCS07",
            Estatus : "Pendiente de Validar",
            Usuario : "Mario Unzueta",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
    
        var client = JSON.stringify({
			ID    : "ACCS08",
			Nombre  : "ACCIONES COMERCIALES",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION ACCS08",
            Motivo : "MOTIVO ACCS08",
            Estatus : "Pendiente de Validar",
            Usuario : "Gustavo Sanchez",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "ACCS09",
			Nombre  : "ACCIONES DE SERVICIOS",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION ACCS09",
            Motivo : "MOTIVO ACCS09",
            Estatus : "Pendiente de Validar",
            Usuario : "Armando Perez",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "ACCS10",
			Nombre  : "ACCIONES DE BANCOS",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION ACCS10",
            Motivo : "MOTIVO ACCS10",
            Estatus : "Pendiente de Validar",
            Usuario : "Alma Lobato",
            FechaUltModif : "02/03/2012"
		});
		tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        
        var client = JSON.stringify({
			ID    : "ACCS11",
			Nombre  : "ACCIONES DE GRUPOS FINANCIEROS",
			Mercado : "SECM",
			Descripcion : "DESCRIPCION ACCS11",
            Motivo : "MOTIVO ACCS11",
            Estatus : "Pendiente de Validar",
            Usuario : "Carlos Aviles",
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