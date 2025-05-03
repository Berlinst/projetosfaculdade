var num_Cadastro = 0;

var validaNome=false;
var validaEmail=false;
var validaData=false;
var validaSexo=false;
var validaEstadoCivil=false;
var validaAreas=false;

function validar(event) {
    event.preventDefault(); 
    
	/*VALORES*/
	var nome = document.getElementById("nome").value;
	var email = document.getElementById("email").value;
	var dia = document.getElementById("dia").value;
	var mes = document.getElementById("mes").value;
	var ano = document.getElementById("ano").value;
	var sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
	var estadoCivilSelecionado = document.querySelector('input[name="estadoCivil"]:checked');
	var areaInteresseSelecionada = document.querySelectorAll('input[name="areas"]:checked');
	
	/*VERIFICA NOME*/
	if(nome == "") {
		alert("O campo Nome Completo está vazio!");
		document.formulario.nome.focus();
		return false;
	}
	
	if(isNaN(nome) == false) {
		alert("Você digitou um número. Por favor, digite um nome!");
		document.formulario.nome.focus();
		return false;
	}
	
	if(nome.length < 15) {
		alert("O seu nome parece incompleto!");
		document.formulario.nome.focus();
		return false;
	}
	
	if(isNaN(nome)== true) {
		validaNome=true;
	}
	
	/*VERIFICA EMAIL*/
	if(email.indexOf("@")>0 && email.indexOf(".")>0 && email.length>15){
		validaEmail=true;
		document.formulario.email.focus();
	} else {
		alert("E-mail inválido! Verifique-o.");
		document.formulario.email.focus();
		return false;
	}
	
	 
	/*VERIFICA DATA DE NASCIMENTO*/
	if(dia == "" || mes == "" || ano== "") {
		alert("Algum campo da Data de Nascimento está vazio! Preencha-o!");
		if (dia == "") {
			document.getElementById("dia").focus();
		} else if (mes == "") {
			document.getElementById("mes").focus();
		} else {
			document.getElementById("ano").focus();
		}
		
		return false;
	}
	
	if(isNaN(dia)==true || isNaN(mes)==true || isNaN(ano)== true) {
		alert("Digite somente números nos campos da Data de Nascimento!");
		if (isNaN(dia)) {
			document.getElementById("dia").focus();
		} else if (isNaN(mes)) {
			document.getElementById("mes").focus();
		} else {
			document.getElementById("ano").focus();
		}
    
		return false;
	}
	
	if(isNaN(dia)==false && isNaN(mes)==false && isNaN(ano)==false) {
		validaData=true;
		document.querySelector('input[name="sexo"]').focus();
	}
	
	/*VERIFICA SEXO*/
	if (sexoSelecionado) {
        validaSexo=true;
    } else {
		alert("O campo Sexo está em branco!");
		return false;
    }
	
	/*VERIFICA ESTADO CIVIL*/
	if (estadoCivilSelecionado) {
		if (estadoCivilSelecionado.value === "Solteiro(a)") {
			var dataNascimento = new Date(ano, mes - 1, dia);
			var hoje = new Date();
			var idade = hoje.getFullYear() - dataNascimento.getFullYear();
			var mesAtual = hoje.getMonth() + 1;

			if (mesAtual < mes || (mesAtual === mes && hoje.getDate() < dia)) {
				idade--;
			}

			if (idade <= 15) {
				alert("Você deve ser maior de 15 anos para se inscrever no estágio!");
				return false;
			}
		}

		validaEstadoCivil=true;
	} else {
		alert("O campo Estado Civil está em branco!");
		return false;
	}

		
	/*VALIDA ÁREAS DE INTERESSE*/	
	if (areaInteresseSelecionada.length > 0) {
        var valoresAreas = [];
        areaInteresseSelecionada.forEach(function(areaInteresseSelecionada) {
            valoresAreas.push(areaInteresseSelecionada.value);
        });
		validaAreas=true;
    } else {
        alert("O campo Área de Interesse está em branco!");
		return false;
    }
		
	if (validaNome==true && validaEmail==true && validaData==true && validaSexo==true && validaEstadoCivil==true && validaAreas==true){
		alert("Parabéns " + nome + ", sua inscrição foi realizada com sucesso!")
		num_Cadastro ++;
		console.log("Cadastro #" + num_Cadastro)
		console.log("Nome Completo: " + nome)
		console.log("Email: " + email)
		console.log(`Data de Nascimento Completo: ${dia}/${mes}/${ano}`)
		console.log("Sexo: " + sexoSelecionado.value)
		console.log("Estado Civil: " + estadoCivilSelecionado.value)
		console.log("Áreas de Interesse: " + valoresAreas.join(", ") + ".");
		return true
	}
}