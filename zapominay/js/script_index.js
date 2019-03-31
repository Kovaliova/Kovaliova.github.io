var AjaxHandlerScript="http://fe.it-academy.by/AjaxStringStorage2.php";
	var MassA;
	window.onhashchange=RefreshFunc;
	var MainHash={};
	function UpdateContent(URL) {
		MainHash=URL;
		var Content="";
		switch ( MainHash.pagename ) { 
			case 'Main':
				Content+="<h6>Главная страница</h6>";
				Content+="<p>Головоломка — непростая задача, для решения которой, как правило, требуется сообразительность, а не специальные знания высокого уровня. Цель: развить логическое мышление, внимательность, аналитические и стратегические способности. Некоторые головоломки известны с глубокой древности. Оригинальные логические задачи находят на стенах египетских пирамид, в древнегреческих манускриптах и в других исторических памятниках. Эпохой расцвета в средневековой истории головоломок можно считать конец IX века. Рост уровня образования и снижение религиозной нетерпимости к наукам привели к расширению круга любителей логических задач.</p>";
				break;
			case 'Rules':
				Content+="<h6>Правила</h6>";
				Content+="<p>Запоминай-ка – игра для тренировки памяти и развития ассоциативного мышления. Подходит как для детей дошкольного так и для детей послевузовского возраста.</p><p>При использовании специальных тем может быть повышена внимательность, быстрота запоминания. При использовании нескольких уровней сложности возможно увеличение запоминаемого объема и развития памяти в различных направлениях.</p><p>Возможность сохранения результатов позволяет анализировать стабильность запоминания. Проводить по результатам дополнительные мероприятия.</p>";
				break;
			case 'Start':
				Content+="<h6>Начало игры</h6>";
				Content+="<p><a href='game.html?diff=1'>Уровень 1 (простой)<br><a href='game.html?diff=2'>Уровень 2 (посложнее)<br></p>";
				break;
			case 'Score':
				ShowRecords();
				break;
			case 'About':
				Content+="<h6>О проекте</h6>";
				Content+="<p>Выпускной проект: 'Запоминай-ка!' игра для тренировки памяти<br>Автор: Ковалёва Екатерина.<br>Преподаватель: Алексей Локтев.<br>Дата: 30.03.19.</p>";
				break;
		}
		document.getElementById('article').innerHTML=Content;
	}
	function RefreshFunc() {
		var URLHash=window.location.hash;
		var URLname=URLHash.substr(1); 
		if ( URLname!="" ){
			var N=URLname.split("_")
			var URL={ pagename: N[0] };
			UpdateContent(URL);
		}
		else{
			UpdateContent( { pagename:'Main' } );
		}
	}
	function MainPage() {
		location.hash='Main';
		RefreshFunc();
	}
	function RulesPage() {
		location.hash='Rules';
		RefreshFunc();
	}
	function StartPage() {
		location.hash='Start';
		RefreshFunc();
	}
	function ScorePage() {
		location.hash='Score';
		RefreshFunc();
	}
	function AboutPage() {
		location.hash='About';
		RefreshFunc();
	}
	RefreshFunc();
	

	function ErrorHandler(jqXHR,StatusStr,ErrorStr){
		alert(StatusStr+' '+ErrorStr);
	}
	function ShowRecords(){
		$.ajax(
				{
					url : AjaxHandlerScript,
					type : 'POST',
					data : { f : 'READ', n : 'KOVALIOVA_MEMORY_GAME' },
					cache : false,
					success : ReadReady,
					error : ErrorHandler
				}
			);
	}
	function ReadReady(Result){
		if ( Result.error!=undefined ){
			alert(Result.error); 
		}
		else{
			MassA=[];
			MassA=JSON.parse(Result.result);
			AddRecords();
		}
	}
	function AddRecords(){
		$('#article').empty();
		var CONT="<h6>Последние рекорды</h6>";
		CONT+='<table border=1 cellspacing=0 cellpadding=3>';
		CONT+='<tr><th style="width: 250px;">Игрок</th><th>Очки</th></tr>';
		for ( var i=MassA.length-1; i>=0;--i){
			var Fill= MassA[i];
			var name;
			var sco;
			for(var k in Fill){
				if(k=='name'){
					name=Fill[k];
				}
				else if(k=='score'){
					sco=Fill[k];
				}
			}
			CONT +='<tr><td>'+name+'</td><td>'+sco+'</td></tr>';
		}
		CONT+='</table>';
		document.getElementById('article').innerHTML =CONT;
	}
	