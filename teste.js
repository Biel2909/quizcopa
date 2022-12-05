	let instruçoes = document.querySelector ('#instruçoes')
	let aviso = document.querySelector ('#aviso')
	let pontos = 0
	let placar = 0
	
	
	let numQuestao = document.querySelector ('#numQuestao')
	let pergunta = document.querySelector ('#pergunta')
	
	
    let a = document.querySelector ('#a')
	let b = document.querySelector ('#b')
	let c =	document.querySelector ('#c')
	let d = document.querySelector ('#d')
	
	let articleQuestao = document.querySelector ('#questao')
	
	let alternativas = document.querySelector ('#alternativas')
	
	
	const q1= { 
	numQuestao   : 1,
    pergunta     :"Quantas copas tem o Brasil?",
	altrnativaA  :"6",
	altrnativaB  :"3",
	altrnativaC  :"5",
	altrnativaD  :"0",
	correta      :"5",
	}
	
	const q2= {
		
	numQuestao   : 2,
    pergunta     :"Qual seleção tem mais títulos de Copa do Mundo",
	altrnativaA  :"Brasil",
    altrnativaB  :"Itália",
	altrnativaC  :"Grécia",
	altrnativaD  :"Egito",
	correta      :"Brasil",
	}	

    const q3= {	
	numQuestao   : 3,
    pergunta     :"Qual seleção ganhou a primeira Copa do Mundo",
	altrnativaA  :"Espanha",
	altrnativaB  :"Equador",
	altrnativaC  :"Uruguai",
	altrnativaD  :"Argentina," 
	correta      :"Uruguai",
	}
	
	const questoes = [q1, q2, q3]
	
	let numero = document.querySelector ('numero')
	let total = document.querySelector ('total')
	
	numero.textContent = q1.numQuestao
	
	let totalDeQuestoes = (questoes.lenght)-1
	console.log("Total de questões" + totalDeQuestoes)
	total.textContent = totalDeQuestoes
	
	numQuestao.textContent = q1.numQuestao
	pergunta.textContent = q1.pergunta
	a.textContent = q1.altrnativaA
	b.textContent = q1.altrnativaB
	c.textContent = q1.altrnativaC
	d.textContent = q1.altrnativaD
	
	
	a.setAttribute('value', '1A')
	b.setAttribute('value', '1B')
	c.setAttribute('value', '1C')
	d.setAttribute('value', '1D')
	
	function proximaQuestao (nQuestao){
	numero.textContent = nQuestao
	numQuestao.textContent = questoes[nQuestao].numQuestao
	pergunta.textContent = questoes[nQuestao].pergunta
	a.textContent = questoes[nQuestao].alternativaA
	b.textContent = questoes[nQuestao].alternativaB
	c.textContent = questoes[nQuestao].alternativaC
	d.textContent = questoes[nQuestao].alternativaD
	a.setAttribute ('value', nQuestao+'A')
	b.setAttribute ('value', nQuestao+'B')
	c.setAttribute ('value', nQuestao+'C')
	d.setAttribute ('value', nQuestao+'D')
	}
	
	function bloquearAlternativas(){
	a.classList.add('bloqueado')	
	b.classList.add('bloqueado')	
	c.classList.add('bloqueado')	
	d.classList.add('bloqueado')
	}

    function desbloquearAlternativas(){	
	a.classList.remove('bloqueado')	
	b.classList.remove('bloqueado')	
	c.classList.remove('bloqueado')	
	d.classList.remove('bloqueado')
	}
	
	function verificarSeAcertou(nQuestao, resposta){
	let numeroDaQuestao = nQuestao.value
	console.log("Questão " = numeroDaQuestao)

	let respostaEscolhida = resposta.textContent	
	console.log("RespU " + respostaEscolhida)
	
	let certa = questoes[numeroDaQuestao].correta
	console.log("RespC" + certa)
	
	if(respostaEscolhida == certa) {
	
	pontos += 10
	}else{
		
	}
	
	placar = pontos
	instrucoes.textContent = "pontos"  + placar
	
	bloqueadoAlternativas()
	
	setTimeout(function){
		
	proxima = numeroDaQuestao+1

    if(proxima > totalDeQuestoes) {
	console.log	('fim de jogo')
	fimDoJogo()
	
	}else{
	proximaQuestao(proxima)	
	}
	
	},250 )
	desbloquearAlternativas()
	
	}
	function fimDoJogo() {
	intrucoes.textContent = "fim do jpgo"
	numQuestao.textContent = ""
	
	let pont = ''
	pontos == 0 ? pont 'ponto' : pont = 'pontos'
	
	pergunta.textContent = " Você conseguiu " + pontos  + "" + pont
	
	aviso.textContent = " Você conseguiu " + pontos  + "" + pont
	
	a.textContent =  ""
	b.textContent =  ""
	c.textContent =  ""
	d.textContent =  ""
	
	a.setAttribute('value', '0')
	b.setAttribute('value', '0')
	c.setAttribute('value', '0')
	d.setAttribute('value', '0')		
	
	
	
	articleQuestao.style.display = 'none'
	setTimeout(function(){
	location.reload();
	}, 2000)
	
	}