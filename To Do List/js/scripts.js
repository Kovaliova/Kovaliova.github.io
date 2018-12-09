// константа (у меня в html уже есть 4 штуки)
var count_of_tasks = 4;
var arr_of_tasks = [];

function Task(title,descr,date,time) {
	this.title = title;
	this.description = descr;
	this.date = date;
	this.time = time; // add by lanin 4.9.17
}


var static_html = document.querySelectorAll('.item');
for (var i = 0; i < static_html.length; i++) {
	var obj = new Task( static_html[i].querySelector('label').textContent.trim() , static_html[i].querySelector('.description').textContent.trim() , static_html[i].querySelector('.date span').textContent.trim() );
	arr_of_tasks.push(obj);
}


// нажатие на галочку
function checkTask() {
	var parent = this.parentElement,
		box = parent.parentElement;

	if (this.checked) {						// если галочку поставили
		parent.classList.add('done');		// добавляем класс done
		$(parent).appendTo('.container2');
		// box.appendChild(parent);			// добавляем таск в самый конец
	} else {
		parent.classList.remove('done'); 	// снимаем класс done
		$(parent).appendTo('.container');
		// box.insertBefore(parent, box.querySelector('.done')); // ставим таск над самым первым выполненным
	}


}

// parent.appendChild(elem); // добавить или переместить
// parent.removeChild(elem); // удалить


// нажатие на крестик
function removeTask() {
	var parent = this.parentElement,
		box = parent.parentElement;
	box.removeChild(parent);
}
 
// добавление таска
function addTask() {
	count_of_tasks++;		// увеличиваем количество тасков
	var field = document.querySelector('.add-task').value; // находим инфу из поля, которое заполнили
	var text = document.querySelector('.description-field').value; // находим инфу из текстового поля, которое заполнили
    var date = document.querySelector('.add-date').value;
    var time = document.querySelector('.add-time').value;

	if (field == "") return;

	var obj = new Task( field.trim() , text.trim(), date.trim(), time.trim() );
	arr_of_tasks.push(obj);

	document.querySelector('.add-task').value = "";		   			// чистим это поле
	document.querySelector('.description-field').value = "";
	document.querySelector('.add-date').value = "";	
	document.querySelector('.add-time').value = "";	// чистим это поле
	console.log(field, text, date, time);

	// создание структурки таска, которую мы добавим на страницу
	var elem = document.createElement('div');
	elem.classList.add('item');
	elem.innerHTML = '<input type="checkbox" id="test' + count_of_tasks + '">';
	elem.innerHTML += '<label for="test'+count_of_tasks+'">' + field + '</label>';
	elem.innerHTML += '<button class="important"><i class="fa fa-star-o" aria-hidden="true"></i></button>';
	elem.innerHTML += '<button class="remove-item"><i class="fa fa-trash" aria-hidden="true"></i></button>';
	elem.innerHTML += '<i class="fa fa-pencil" aria-hidden="true"></i>';

	if (text) {
		elem.innerHTML += '<div class="description" contenteditable="true">' + text + '</div>';
		elem.innerHTML += '<div class="date">Создано: <span>' + date + '&nbsp' + 'в' + '&nbsp' +  time + '</span></div>';
	}

	console.log(elem);

	// добавляем сформированный таск на страницу
	document.querySelector('.middle-line').appendChild(elem);

	mainSettings();
}




// обучение галочек и крестиков нажиматься
function mainSettings() {
	var arr_of_checkbox = document.querySelectorAll('input[type="checkbox"]');
	for (var i = 0; i < arr_of_checkbox.length; i++) {
		arr_of_checkbox[i].addEventListener('click', checkTask);
	}
	var arr_of_closes = document.querySelectorAll('.remove-item');
	for (var i = 0; i < arr_of_closes.length; i++) {
		arr_of_closes[i].addEventListener('click', removeTask);
	}
	var arr_of_stars = document.querySelectorAll('.important');
	for (var i = 0; i < arr_of_stars.length; i++) {
		arr_of_stars[i].addEventListener('click', checkImportant);
	}

	
}


mainSettings();
// добавление прослушки на клик на кнопку "Добавить";
// add_task.addEventListener('click', addTask);
// или
document.querySelector('.add-task-btn').addEventListener('click', addTask);

function checkImportant() {
	var parent = this.parentElement;
	if ( parent.classList.contains('border-anim') ) {
		parent.classList.remove('border-anim');
		// таск обычный
		this.children[0].classList.remove('fa-star');
		this.children[0].classList.add('fa-star-o');
	} else {
		parent.classList.add('border-anim');
		this.children[0].classList.remove('fa-star-o');
		this.children[0].classList.add('fa-star');
		// таск важный
	}
}



// var count_of_tasks = document.querySelectorAll('.item').length;
// var index = randomInteger(0,count_of_tasks-1);

// редактор

	var pencil = document.querySelectorAll('.fa-pencil');
	for (var i = 0; i < pencil.length; i++) {
		pencil[i].addEventListener('click', editTask);
	}

function editTask() {

	var listItem = this.parentNode;
	var input = listItem.querySelector("input[type=text");
	var label = listItem.querySelector("label");
    
   
	if (!this.classList.contains('pen')) {
		this.classList.add('pen');
		listItem.classList.add("editMode");
	} else { 
		this.classList.remove('pen');
		label.innerText = input.value;
		listItem.classList.remove("editMode");
	}	

	
}
 

function abc() {
	// comment by lanin 4.9.17
// 	var static_html = document.querySelectorAll('.item');
// 	for (var i = 0; i < static_html.length; i++) {
// 	var obj = new Task( static_html[i].querySelector('label').textContent.trim() , static_html[i].querySelector('.description').textContent.trim() );
// 	arr_of_tasks.push(obj);
// }
	// зачем добавлять в массив еще раз? у нас это все в массиве уже есть

	var string = JSON.stringify(arr_of_tasks);
	console.log(string);
}

function qwerty() {
	var string = prompt("Введите JSON");
	var json = JSON.parse(string);
	console.log(json);
	// -> 

	for (var i = 0; i < json.length; i++) {
		count_of_tasks++;		// увеличиваем количество тасков
		var field = json[i].title; // находим инфу из поля, которое заполнили
		var text = json[i].description;
		var date = json[i].date;
		var time = json[i].time; // находим инфу из текстового поля, которое заполнили


		if (field == "") return;

		var obj = new Task( field.trim() , text.trim(), date, time);
		arr_of_tasks.push(obj);

		console.log(field, text, date, time);

		// создание структурки таска, которую мы добавим на страницу
		var elem = document.createElement('div');
		elem.classList.add('item');
		elem.innerHTML = '<input type="checkbox" id="test' + count_of_tasks + '">';
		elem.innerHTML += '<label for="test'+count_of_tasks+'">' + field + '</label>';
		elem.innerHTML += '<button class="important"><i class="fa fa-star-o" aria-hidden="true"></i></button>';
		elem.innerHTML += '<button class="remove-item"><i class="fa fa-trash" aria-hidden="true"></i></button>';
		elem.innerHTML += '<i class="fa fa-pencil" aria-hidden="true"></i>';
		
		if (text) {
			elem.innerHTML += '<div class="description">' + text + '</div>';
			elem.innerHTML += '<div class="date">Создано: ' + date + '</div>';

		}

		console.log(elem);

		// добавляем сформированный таск на страницу
		document.querySelector('.middle-line').appendChild(elem);

		mainSettings();
	}

}


document.querySelector('.export').addEventListener('click',abc);
document.querySelector('.import').addEventListener('click',qwerty);

// $(this).parent().find('.description').slideDown()
// $(this).parent().find('.description').slideUp()













