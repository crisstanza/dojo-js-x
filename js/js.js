function $(id) {
	return document.getElementById(id);
}

//(function() {

	var btOk;
	var inSize;
	
	function isEvenEven (value) {
		return isEven(value) ? isEven(value/2) : false;   
	}

	function isEven (value) {
		return value == 0 ? false : value%2 == 0;		
	}		

	function isBetween (start, value,  end) {
		return (value >= start && value <= end);
	}

	function isInteger (value) {
		return Number.isInteger(value);
	}

	function isPositive (value) {
		return value > 0;
	}
	
	function btOkClick () {

		if (btOk.value == "recome\u00e7ar") {
			return window.location.reload();
		}

		var result = {};
    	result.status = true;
    	result.message = [];
    	var value = new Number(inSize.value);

		console.log("valor : " + value + " " + Number.isNaN(value));
    	if (isNaN(value) == false) {
   			if (isInteger(value)) {
   				result.status = false;
	   			result.message.push("O valor deve ser Inteiro");
	   		}
   			if (!isPositive(value)) {
   		    	result.status = false;
	   			result.message.push("O valor deve ser positivo");
	   		}
	   		if (!isEvenEven(value)) {
	   		    result.status = false;
	   			result.message.push("O valor deve ser par e sua metade tamb\u00E9m deve ser par");
	   		}
	   		if (!isBetween(4,value,32)) {
	   			result.status = false;
	   			result.message.push("O valor deve ser maior ou igual a 4 e menor ou igual a 32");
	   		}
    	} else {
	   		result.status = false;
	   		result.message.push("O valor deve ser um n\u00FAmero");
		}
		if (result.status == false) {
			alert(result.message.join("\n"));
		} else {
			inSize.setAttribute('readOnly', 'true');
			btOk.value = "recome\u00e7ar";
			createTable(value);
		}
	}

	function createTable (len) {
		var tb = document.createElement("table");
		tb.setAttribute("id","tb");
		
		var conteudo = [];

		for (var i=0;i<len+2;i++) {
			conteudo.push('<tr>');
			for (var j=0;j<len+2;j++) {
				conteudo.push('<td>');
				if (i==0 && isBetween(1,j,len)) {
					conteudo.push('<input type="button" value="/\\" data-i="'+i+'" data-j="'+j+'"/>');
				} else if (i==len+1 && isBetween(1,j,len)) {	 
					conteudo.push('<input type="button" value="\\/" data-i="'+i+'" data-j="'+j+'"/>');
				} else if (j==0 && isBetween(1,i,len)) {
					conteudo.push('<input type="button" value="<" data-i="'+i+'" data-j="'+j+'"/>');
				} else if (j==len+1 && isBetween(1,i,len)) {
					conteudo.push('<input type="button" value=">" data-i="'+i+'" data-j="'+j+'"/>');
				} else {
					conteudo.push('&nbsp;')
				}
				conteudo.push('</td>');
			}	
			conteudo.push('</tr>');
		}

		tb.innerHTML = conteudo.join('');
		document.body.appendChild(tb);
	}


	function initButtons() {
		btOk = $("bt-ok");
		btOk.addEventListener("click", btOkClick);
		inSize = $("inSize");

	}

	function initGlobals() {
	}

	function init() {
		initGlobals();
		initButtons();
	}

	window.addEventListener('load', function() { init(); });

//})();
