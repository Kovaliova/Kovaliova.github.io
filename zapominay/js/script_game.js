 var AjaxHandlerScript="http://fe.it-academy.by/AjaxStringStorage2.php";
            var MassA;
            var memory_array = [];
            var Size=(location.search.substr(6));
            if(Size==1){
                console.log('difficulty = '+Size);
                memory_array = ['☂','☂','☁','☁','☀','☀','✾','✾'];
            } else if (Size==2){
                console.log('difficulty = '+Size);
                memory_array = ['☁','☁','☂','☂','☀','☀','✲','✲','★','★','❉','❉','✿','✿','✾','✾','⁂','⁂','⚛','⚛','❤','❤','❅','❅'];
            }
            var user_name;
            var result;
            var memory_values = []; 
            var memory_tile_ids = [];
            var tiles_flipped = 0; 
            var start_time; 
            var end_time; 
            var result;
            Array.prototype.memory_tile_shuffle = function(){
                var i = this.length, j, temp;
                while(--i > 0){
                    j = Math.floor(Math.random() * (i+1));
                    temp = this[j];
                    this[j] = this[i];
                    this[i] = temp;
                }
            }

            function saveResult(){
                user_name = document.getElementById('user_name').value;
                var cont = '';
                document.getElementById('input').innerHTML = '';
                console.info(`User name: ${user_name}`);
                if (user_name) {
                    ReceiveRecords();
                    cont = '<p>Результат сохранен в таблице рекордов!</p><input type="button" value="Новая игра" onclick="newBoard()">';
                } else if (user_name == "") {
                    cont = '<div id="label">Введите Ваше имя или нажмите "Продолжить не сохраняясь"</div><input type="text" id="user_name"><button type="submit" class="btn" value="" onclick="saveResult()">Сохранить результат</button><button type="reset" class="btn" value="" onclick="newBoard()">Продолжить не сохраняясь</button>';
                }
                document.getElementById('input').innerHTML = cont;
            }

            function newBoard(){ 
                start_time = new Date().getTime();
                tiles_flipped = 0;
                var output = '';
                memory_array.memory_tile_shuffle();
                for(var i = 0; i < memory_array.length; i++){
                    output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
                }
                if (document.getElementById('CONTAINER')) {
                    document.getElementById('CONTAINER').id = 'memory_board';
                }
                if (document.getElementById('memory_info').style.display = 'none') {
                    document.getElementById('memory_info').style.display = 'block';
                }
                document.getElementById('memory_board').innerHTML = output;
            }

            function memoryFlipTile(tile,val){ 
                if(tile.innerHTML == "" && memory_values.length < 2){
                    tile.innerHTML = val;
                    tile.style.background = '#FFB6C1';
                    tile.style.boxShadow = '2px 2px 6px #FF1493';
                    if(memory_values.length == 0){
                        memory_values.push(val);
                        memory_tile_ids.push(tile.id);
                    } else if(memory_values.length == 1){
                        memory_values.push(val);
                        memory_tile_ids.push(tile.id);
                        if(memory_values[0] == memory_values[1]){
                            tiles_flipped += 2;
                            memory_values = [];
                            memory_tile_ids = [];
                            if(tiles_flipped == memory_array.length){
                                end_time = new Date().getTime();
                                result = (((end_time - start_time)/1000).toFixed() + ' s');
                                console.log(result);
                                if (Size == 2) {
                                    ShowWin();
                                } else if (Size == 1) {
                                    ShowSimpleWin();
                                }
                            }
                        } else {
                            function flip2Back(){
                                var tile_1 = document.getElementById(memory_tile_ids[0]);
                                var tile_2 = document.getElementById(memory_tile_ids[1]);
                                tile_1.style.background = '#FF69B4';
                                tile_1.innerHTML = "";
                                tile_1.style.boxShadow = '2px 2px 6px #FF1493';
                                tile_2.style.background = '#FF69B4';
                                tile_2.innerHTML = "";
                                tile_2.style.boxShadow = '2px 2px 6px #FF1493';
                                memory_values = [];
                                memory_tile_ids = [];
                            }
                            setTimeout(flip2Back, 700);
                        }
                    }
                }
                
                function ShowWin() {
                    document.getElementById('memory_info').style.display = 'none';
                    var newDiv = document.createElement('div');
                    var memDiv = document.getElementById('memory_board');
                    memDiv.innerHTML = '';
                    memDiv.appendChild(newDiv);
                    memDiv.id = 'CONTAINER';
                    newDiv.id = 'BALL';
                    newDiv.style.background = '#98FB98';
                    newDiv.style.background = 'linear-gradient(to bottom, #98FB98 0%,#98FB98 100%)';
                    newDiv.style.top = '185px';
                    var winText = document.createTextNode("Результат : " + result);
                    newDiv.appendChild(winText);
                    setTimeout(createInput, 3500);
                }
                
                function createInput() {
                    var inputDiv = document.createElement('div');
                    inputDiv.id = 'input';
                    document.getElementById('memory_info').style.display='none';
                    var memDiv = document.getElementById('CONTAINER');
                    memDiv.appendChild(inputDiv);
                    var cont = '<div id="label">Введите имя, чтобы сохранить свой результат: </div><input type="text" id="user_name"><button type="submit" class="btn" value="" onclick="saveResult()">Сохранить результат</button><button type="reset" class="btn" value="" onclick="newBoard()">Продолжить не сохраняясь</button>';
                    inputDiv.innerHTML = cont;
                }
                
                function ShowSimpleWin() {
                    document.getElementById('memory_info').style.display = 'none';
                    var newDiv = document.createElement('div');
                    var memDiv = document.getElementById('memory_board');
                    memDiv.innerHTML = '';
                    memDiv.appendChild(newDiv);
                    memDiv.id = 'CONTAINER';
                    newDiv.id = 'BALL';
                    newDiv.style.background = '#98FB98';
                    newDiv.style.background = 'linear-gradient(to bottom, #98FB98 0%,#98FB98 100%)';
                    newDiv.style.width = '180px';
                    var winText = document.createTextNode("Ваш результат - " + result);
                    newDiv.appendChild(winText);
                    setTimeout(changeId, 3500);
                }
                
                function changeId () {
                    document.getElementById('BALL').style.display = 'none';
                    document.getElementById('CONTAINER').removeChild(document.getElementById('BALL'));
                    document.getElementById('CONTAINER').id = 'memory_board';
                    newBoard();
                }
                
                for(var i=0; i < memory_array.length; i++) {
                    if(document.getElementById('memory_board')) {
                        var elem = document.getElementById('memory_board').childNodes[i];
                        if (elem.innerHTML=='✾') {
                            elem.style.color = '#FF0000';
                        } else if (elem.innerHTML=='☂') {
                            elem.style.color = '#000';
                        } else if (elem.innerHTML=='☀') {
                            elem.style.color = '#FFFF00';
                        } else if (elem.innerHTML=='☁') {
                            elem.style.color = '#808080';
                        }
                    }       
                }
            }

            function ReceiveRecords(){
                $.ajax({
                        url : AjaxHandlerScript,
                        type : 'POST',
                        data : { f : 'LOCKGET', n : 'KOVALIOVA_MEMORY_GAME', p : 123 },
                        cache : false,
                        success : LockGetReady,
                        error : ErrorHandler
                    }
                );
            }

            function LockGetReady(Result) {
                if ( Result.error!=undefined ){
                    alert(Result.error);
                }
                else{
                    if (Result.result !== ``) {
                        MassA=JSON.parse(Result.result);
                    } else {
                        MassA = [];
                    }
                    MassA.push({ name: user_name, score: result});
                    var MassNames=[];
                    var MassScores=[];
                    for(var N in MassA){
                        MassNames[N]=MassA[N].name;
                        MassScores[N]=MassA[N].score;
                    }
                    for(var i=1;i<MassScores.length;++i){
                        if(MassScores[i-1]==MassScores[i]){
                            if(MassNames[i-1]==MassNames[i]){
                                console.log(MassNames[i-1]+' '+MassNames[i]);
                                MassA.splice(i-1,1);
                            }
                        }
                    }
                    console.log(MassA);
                    if ( MassA.length>10 ){
                            MassA=MessagesA.slice(MassA.length-10);
                    }
                    $.ajax({
                            url : AjaxHandlerScript,
                            type : 'POST',
                            data : { f : 'UPDATE', n : 'KOVALIOVA_MEMORY_GAME',
                                v : JSON.stringify(MassA), p : 123 },
                            cache : false,
                            success : UpdateReady,
                            error : ErrorHandler
                        }
                    );
                }
                setTimeout(ShowRecords, 700);
            }

            function UpdateReady(Result) {
                if ( Result.error!=undefined )
                    alert(Result.error); 
            }
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
                }
            }

            newBoard();

            function start_game() {
                var memory_info = document.getElementById('memory_info');
                document.location.href = "index.html#Start";
                var start_time = new Date();
            }

            function main_page() {
                document.location.href = "index.html#Main";
            }

            function rules_page() {
                document.location.href = "index.html#Rules";
            }

            function score_page() {
                document.location.href = "index.html#Score";
            }

            function about_page() {
                document.location.href = "index.html#About";
            }