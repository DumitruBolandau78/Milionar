'use strict'

addEventListener('DOMContentLoaded', () => {
    const questions = [
        [
            ['Care este capitala angliei?', 'a. Rusia', 'b. Bacau', 'c. Chisinau', 'd. Londra', 4],
            ['Ce culori are drapelul Romaniei?', 'a. Albastru, galben, rosu', 'b. Verde, alb, negru', 'c. Rosu, alb, albastru', 'd. Verde, portocaliu, alb', 1],
            ['Cine a fost Mihai Eminescu?', 'a. Luptator UFC', 'b. Sculptor', 'c. Domnitor', 'd. Poet', 4],
            ['Cate picioare are un patruped?', 'a. 2', 'b. 1', 'c. 4', 'd. 8', 3]
        ],
        [
            ['Cine a scris cartea Macbeth?', 'a. Feodor Dostoievski', 'b. William Shakespeare', 'c. Igor Dodon', 'd. Lev Tolstoi', 2],
            ['Cine a fost primul om care a ajuns pe luna?', 'a. Neil Armstrong', 'b. Iuri Gagarin', 'c. Valentina Tereșkova', 'd. Alan Shepard', 1],
            ['Cum se numea conducatorul Rusiei in evul mediu?', 'a. Domnitor', 'b. Rege', 'c. Țar', 'd. Cesar', 3],
            ['Cine a inventat limbajul de programare c++?', 'a. Bill Gates', 'b. Albert Einstein', 'c. Stephen Hawking', 'd. Bjarne Stroustrup', 4]
        ],
        [
            ['Cine a descoperit gravitatia?', 'a. Isaac Newton', 'b. Nikola Tesla', 'c. Thomas Edison', 'd. Henry Ford', 1],
            ['Cine a scris seria de carti Harry Potter?', 'a. Neil Armstrong', 'b. Tom Felton', 'c. Emma Watson', 'd. J. K. Rowling', 4],
            ['Pe drapelul cărei ţări stă scrie motto-ul „Ordine şi progres”?', 'a. Australia', 'b. Brazilia', 'c. Africa de Sud', 'd. Indonezia', 2],
            ['Cine a fost Iuliu Maniu?', 'a. un om politic', 'b. fotbalist', 'c. pictor', 'd. vrăjitor', 1]
        ],
        [
            ['Sediul căreia dintre următoarele instituţii se află în Piaţa Victoriei din Bucureşti?', 'a. Camera Lorzilor', 'b. Camera Deputaților', 'c. Guvernul', 'd. Senatul', 3],
            ['Ce este un imaș?', 'a. Margarina', 'b. mătură', 'c. islaz', 'd. clepsidră', 3],
            ['Miopia este un defect de:?', 'a. gândire', 'b. proiectare', 'c. vedere', 'd. caracter', 3],
            ['Religia oficială în România este:?', 'a. ortodoxă', 'b. catolică', 'c. protestantă', 'd. budism', 1]
        ],
        [
            ['Prefixul „eco” vine de la un cuvânt grecesc care înseamnă:', 'a. stat', 'b. casă', 'c. soare', 'd. viață', 2],
            ['Care este cel mai apropiat oraş de Braşov?', 'a. Câmpina', 'b. Constanța', 'c. Timișoara', 'd. Iași', 1],
            ['Care dintre variantele următoare reprezintă o maşină de război în antichitate?', 'a. balustrada', 'b. balonzaidul', 'c. balista', 'd. baliza', 3],
            ['Ce fel de animale cresc columbofilii?', 'a. balene', 'b. porumbei', 'c. vidre', 'd. ursi', 2]
        ],
        [
            ['Care dintre următoarele soiuri de struguri este folosit pentru a produce un celebru vin roşu?', 'a. Pinot Grigio', 'b. Riesling', 'c. Cabernet Sauvignon', 'd. Chardonnay', 3],
            ['Ce este o agavă?', 'a. un mecanism', 'b. o pungă', 'c. o plantă', 'd. un afluent', 3],
            ['Cum se scrie în cifre romane: "1910"?', 'a. MDX', 'b. MDC', 'c. MCML', 'd. MCMX', 4],
            ['În ce capitală europeană se află Poarta Brandenburg?', 'a. Madrid', 'b. București', 'c. Paris', 'd. Berlin', 4]
        ],
        [
            ['Muammar Gaddafi a fost conducătorul cărei ţări între 1969 şi 2011?', 'a. Libia', 'b. Tunisia', 'c. Sudan', 'd. Egipt', 1],
            ['Ce stat din Orientul Mijlociu are capitala la Abu Dhabi?', 'a. Kuwait', 'b. Emiratele Arabe Unite', 'c. Irak', 'd. Yemen', 2],
            ['În craterul vulcanic al Muntelui Ciomatu se află lacul:', 'a. Sf. Vineri', 'b. Sf. Ana', 'c. Vidraru', 'd. Bolboci', 2],
            ['Unde s-au tinut jocurile Olimpice in anul 2012?', 'a. Beijing', 'b. Londra', 'c. Atena', 'd. Moldova', 2]
        ],
        [
            ['Ce gara reprezintă Claude Monet intr-o pictura din 1877?', 'a. Keleti', 'b. Saint-Lazare', 'c. Basarab', 'd. Obor', 2],
            ['Cu ce parte a unui computer este asociat brand-ul „Intel Inside”?', 'a. BIOS', 'b. RAM', 'c. USB', 'd. Procesorul', 4],
            ['Cine a compus opera Norma?', 'a. Verdi', 'b. Puccini', 'c. Bellini', 'd. Mozart', 3],
            ['Care dintre următoarele oraşe este capitala Arabiei Saudite?', 'a. Abu Dhabi', 'b. Manama', 'c. Doha', 'd. Riyadh', 1]
        ],
        [
            ['Pe ce lungime udă Dunărea teritoriul României?', 'a. 634 km', 'b. 1900km', 'c. 1459 km', 'd. 1075 km', 4],
            ['Câte scaune are opera lui Brâncuşi intitulată Masa Tăcerii?', 'a. 6', 'b. 10', 'c. 8', 'd. 12', 4],
            ['Unde a avut loc Conciliul convocat de Papa Paul al III-lea, o etapă doctrinară esențială a Reformei catolice?', 'a. Toronto', 'b. Verona', 'c. Trento', 'd. Londra', 3],
            ['În spațiul cultural românesc prima tipăritură a apărut în secolul:', 'a. XIV', 'b. XV', 'c. XVI', 'd. XVII', 3]
        ],
        [
            ['Sub ce nume a rămas cunoscut eroul naţional al Spaniei, Rodrigo Diaz de Bivar?', 'a. El Cano', 'b. El Greco', 'c. El Cid', 'd. El Salvador', 3],
            ['Din ce etaj al formațiunilor vegetale fac parte padurile de pin?', 'a. vegetația montană', 'b. vegetația de deal și podis', 'c. vegetația de câmpie', 'd. vegetația luncilor', 1],
            ['Care dintre următoarele ornamente imită o specie de plantă?', 'a. rozetă', 'b. rocalille', 'c. ovă', 'd. acantă', 4],
            ['Care era prenumele Doamnei Bovary din romanul omonim al lui Flaubert?', 'a. Inna', 'b. Anna', 'c. Emma', 'd. Ella', 3]
        ],
        [
            ['În ce judeţ se află localitatea Roşia Montană?', 'a. Prahova', 'b. Alba', 'c. Buzău', 'd. Maramureș', 2],
            ['Cine a fost primul artist ce a avut o expoziţie în Louvre la Paris încă din timpul vieţii?', 'a. Georges de La Tour', 'b. Georges Brassens', 'c. Georges Braque', 'd. Seurat Georges', 3],
            ['Care președinte american a avut patru mandate consecutive?', 'a. George Washington', 'b. Franklin Delano Roosevelt', 'c. Theodor Roosevelt', 'd. John Adams', 2],
            ['Iron Tigran” a fost un supranume dat unui mare maestru al jocului de şah numit:', 'a. Smîslov', 'b. Botvinnik', 'c. Petrosian', 'd. Kasparov', 3]
        ],
        [
            ['Care dintre următoarele variante denumeşte un bici alcătuit din mai multe curele împletite?', 'a. gârbaci', 'b. gârliță', 'c. gâză', 'd. gârniță', 1],
            ['Câţi ani a trăit revoluţionarul şi istoricul Nicolae Bălcescu?', 'a. 33', 'b. 25', 'c. 39', 'd. 45', 1],
            ['Alantoina poate fi găsită în:', 'a. compușii alaunului', 'b. borați', 'c. urina mamiferelor', 'd. structură osoasă', 3],
            ['Înainte de trecerea calendarul gregorian, la ce dată începea noul an al coloniilor americane?', 'a. 25 martie', 'b. 1 iulie', 'c. 25 septembrie', 'd. 1 decembrie', 1]
        ],
        [
            ['In ce domeniu artistic s-au remarcat: Karl Richter, Rudolf Kempe, Otto Klemperer, Clemens Kraus?', 'a. regie de teatru', 'b. regie de film', 'c. dirijorat', 'd. coregrafie', 3],
            ['Cu ce se ocupă vexilologia?', 'a. studiul armelor medievale', 'b. studiul steagurilor', 'c. studiul vechilor codexuri', 'd. studiul armelor', 2],
            ['Dacă Soarele s-ar stinge acum, în cât timp am rămâne în întuneric?', 'a. 30 minute', 'b. 15 minute', 'c. 8 minute', 'd. 5 minute', 3],
            ['În ce domeniu au fost folosite iniţial cartelele perforate:', 'a. pontaj', 'b. țesătorie', 'c. calculatoare mecanice', 'd. identificarea cetățenilor', 2]
        ],
        [
            ['Cine a fost liderul răsculaților în celebra „Revoltă de pe Bounty” din 1789?', 'a. Wiliam Bligh', 'b. Fletcher Christian', 'c. Alexander Smith', 'd. Matthew Quintal', 2],
            ['Ce explorator european a ajuns pentru prima dată în America?', 'a. Cristofor Columb', 'b. Barry Bell', 'c. Leif Erikson', 'd. Fernardo Magellan', 3],
            ['Care celebritate a plătit în decembrie 1963 o recompensă de 240.000$ pentru a-și recupera fiul răpit?', 'a. Kirk Douglas', 'b. Burt Lancaster', 'c. Frank Sinastra', 'd. Hank Williams', 3],
            ['Potrivit Biroului de Referință a Populației, care este numărul aproximativ de oameni care au trăit vreodată pe Pământ?', 'a. 50 de miliarde', 'b. 100 de miliarde', 'c. 1 trilion', 'd. 5 trilioane', 2]
        ]
    ];

    const li = document.querySelectorAll('ul li'),
        lastP = document.querySelectorAll('ul li p:last-of-type'),
        money = document.querySelector('.money'),
        question = document.querySelector('.question'),
        answers = document.querySelectorAll('.answer'),
        timer = document.querySelector('.timer'),
        answersPArent = document.querySelector('.answers'),
        fiftyFifty = document.querySelector('.fifty'),
        callAFriend = document.querySelector('.call'),
        publicAnswer = document.querySelector('.public'),
        newGame = document.querySelector('.new-game'),
        popMenu = document.querySelector('.pop-menu'),
        closeModal = document.querySelector('.close'),
        popupMessage = document.querySelector('.popup-message'),
        fiftyOption = document.querySelector('.fifty .option-inactive'),
        publicOption = document.querySelector('.public .option-inactive'),
        callOption = document.querySelector('.call .option-inactive'),
        answersByData = document.querySelectorAll('[data-answer]');

    let numberOfQuestions = 0,
        counter = 1,
        randomNr,
        timerCounter = 30,
        interval,
        liCounter = li.length - 1,
        friendMessage,
        randomNrClone,
        publicAnswerRandom1,
        publicAnswerRandom2,
        publicAnswerRandom3,
        publicAnswerCorrect;

    answersPArent.addEventListener('click', selectAnswer);

    function selectAnswer(e) {
        const answerBlock = e.target.closest('.answer');

        if (answerBlock.innerHTML == '') {
            return 0;
        } else {
            answerBlock.style.backgroundColor = '#191970';
            answerBlock.style.color = 'white';
            clearInterval(interval);

            if (answerBlock.dataset.answer == questions[numberOfQuestions][randomNr][5]) {

                setTimeout(() => {
                    answerBlock.style.backgroundColor = '#FF4500';
                }, 1500);

                setTimeout(() => {
                    numberOfQuestions++;
                    counter = 1;
                    timerCounter = 30;
                    questionAndAnswersInner();
                }, 3000);
            } else {
                answersPArent.removeEventListener('click', selectAnswer);
                setTimeout(() => {
                    answers.forEach(item => {
                        if (item.dataset.answer == questions[numberOfQuestions][randomNr][5]) {
                            item.style.backgroundColor = '#FF4500';
                            item.style.color = 'white';
                        }
                    });
                }, 1500);
            }
        }
    }

    function questionAndAnswersInner() {
        getRandomNumber();

        li.forEach(item => {
            item.style.backgroundColor = '';
        });

        getMoney();
        if (numberOfQuestions < 14) {
            question.textContent = `${questions[numberOfQuestions][randomNr][0]}`;

            answers.forEach(item => {
                item.style.backgroundColor = '';
                item.style.color = '';
                item.textContent = `${questions[numberOfQuestions][randomNr][counter]}`;
                counter++;
            });

            interval = setInterval(() => {
                timer.textContent = `${timerCounter}`;
                timerCounter--;
                if (timerCounter == 0) {
                    timer.textContent = `${timerCounter}`;
                    clearInterval(interval);
                    popupMessage.innerHTML = '<p><b>You lose!</b></p>';
                    popMenu.classList.add('popup-active');
                }
            }, 1000);
        }
    }

    function getMoney() {
        money.textContent = `${lastP[liCounter].textContent}`;
        if (liCounter > 0) {
            li[liCounter - 1].style.backgroundColor = 'red';
        } else if(liCounter == 0){
            popupMessage.innerHTML = '<p><b>You Win!</b></p>';
            popMenu.classList.add('popup-active');
            answersPArent.removeEventListener('click', selectAnswer);
        }

        liCounter--;
    }

    questionAndAnswersInner();

    function getRandomNumberClone() {
        randomNrClone = Math.floor(Math.random() * 4);
    }

    function getRandomNumber() {
        randomNr = Math.floor(Math.random() * 4);
    }

    function getRandomNumberForPublicAnswer() {
        publicAnswerRandom1 = Math.floor(Math.random() * 20);
        publicAnswerRandom2 = Math.floor(Math.random() * 39);
        publicAnswerRandom3 = Math.floor(Math.random() * 15);
    }

    closeModal.addEventListener('click', () => {
        popMenu.classList.remove('popup-active');
    });

    callAFriend.addEventListener('click', getCorrectAnswer);

    function getCorrectAnswer() {
        popMenu.classList.add('popup-active');

        if (questions[numberOfQuestions][randomNr][5] == 1) {
            friendMessage = 'a';
        } else if (questions[numberOfQuestions][randomNr][5] == 2) {
            friendMessage = 'b';
        } else if (questions[numberOfQuestions][randomNr][5] == 3) {
            friendMessage = 'c';
        } else if (questions[numberOfQuestions][randomNr][5] == 4) {
            friendMessage = 'd';
        }

        popupMessage.innerHTML = `<p><b>-John-</b></p><p>-Hello my friend, glad to hear you!</p><p>The question is easy, corect asnwer is ${friendMessage}.</p>`;
        callAFriend.removeEventListener('click', getCorrectAnswer);

        callOption.style.display = 'block';
    }

    fiftyFifty.addEventListener('click', removeTwoOptions);

    function removeTwoOptions() {

        getRandomNumberClone();

        let correctOption = questions[numberOfQuestions][randomNr][5],
            removeOption1 = randomNrClone + 1,
            removeOption2 = randomNrClone + 1;

        while (correctOption == removeOption1 || correctOption == removeOption2 || removeOption1 == removeOption2) {
            getRandomNumberClone();
            removeOption1 = randomNrClone + 1;
            while (removeOption1 == removeOption2 || removeOption2 == correctOption) {
                getRandomNumberClone();
                removeOption2 = randomNrClone + 1;
            }
        }

        answersByData.forEach(item => {
            if (item.dataset.answer == removeOption1 || item.dataset.answer == removeOption2) {
                item.innerHTML = '';
            }
        });

        fiftyFifty.removeEventListener('click', removeTwoOptions);
        fiftyOption.style.display = 'block';
    }

    publicAnswer.addEventListener('click', usePublicAnswer);

    function usePublicAnswer() {
        getRandomNumberForPublicAnswer();

        publicAnswerCorrect = 100 - (publicAnswerRandom1 + publicAnswerRandom2 + publicAnswerRandom3);

        popupMessage.innerHTML = `<div class="text-variants"><div class="variant1-text"></div><div class="variant2-text"></div><div class="variant3-text"></div><div class="variant4-text"></div></div><div class="variant-blocks"><div class="variant1-block">a</div><div class="variant2-block">b</div><div class="variant3-block">c</div><div class="variant4-block">d</div></div><div class="bottom-text"><div class="ans1">a</div><div class="ans2">b</div><div class="ans3">c</div><div class="ans4">d</div></div>`;

        const variant1_text = document.querySelector('.variant1-text'),
            variant2_text = document.querySelector('.variant2-text'),
            variant3_text = document.querySelector('.variant3-text'),
            variant4_text = document.querySelector('.variant4-text'),
            variant1_block = document.querySelector('.variant1-block'),
            variant2_block = document.querySelector('.variant2-block'),
            variant3_block = document.querySelector('.variant3-block'),
            variant4_block = document.querySelector('.variant4-block');

        let changeNumber,
            correctOption = questions[numberOfQuestions][randomNr][5];

        if (correctOption == 1) {
            changeNumber = publicAnswerCorrect;
            publicAnswerCorrect = publicAnswerRandom1;
            variant1_text.textContent = `${changeNumber}%`;
            variant2_text.textContent = `${publicAnswerRandom2}%`;
            variant3_text.textContent = `${publicAnswerRandom3}%`;
            variant4_text.textContent = `${publicAnswerCorrect}%`;

            variant1_block.style.height = (changeNumber * 2) + 'px';
            variant2_block.style.height = (publicAnswerRandom2 * 2) + 'px';
            variant3_block.style.height = (publicAnswerRandom3 * 2) + 'px';
            variant4_block.style.height = (publicAnswerCorrect * 2) + 'px';
        } else if (correctOption == 2) {
            changeNumber = publicAnswerCorrect;
            publicAnswerCorrect = publicAnswerRandom2;
            variant1_text.textContent = `${publicAnswerRandom1}%`;
            variant2_text.textContent = `${changeNumber}%`;
            variant3_text.textContent = `${publicAnswerRandom3}%`;
            variant4_text.textContent = `${publicAnswerCorrect}%`;

            variant2_block.style.height = (changeNumber * 2) + 'px';

            variant1_block.style.height = (publicAnswerRandom1 * 2) + 'px';
            variant2_block.style.height = (changeNumber * 2) + 'px';
            variant3_block.style.height = (publicAnswerRandom3 * 2) + 'px';
            variant4_block.style.height = (publicAnswerCorrect * 2) + 'px';
        } else if (correctOption == 3) {
            changeNumber = publicAnswerCorrect;
            publicAnswerCorrect = publicAnswerRandom3;
            variant1_text.textContent = `${publicAnswerRandom1}%`;
            variant2_text.textContent = `${publicAnswerRandom2}%`;
            variant3_text.textContent = `${changeNumber}%`;
            variant4_text.textContent = `${publicAnswerCorrect}%`;

            variant3_block.style.height = (changeNumber * 2) + 'px';

            variant1_block.style.height = (publicAnswerRandom1 * 2) + 'px';
            variant2_block.style.height = (publicAnswerRandom2 * 2) + 'px';
            variant3_block.style.height = (changeNumber * 2) + 'px';
            variant4_block.style.height = (publicAnswerCorrect * 2) + 'px';
        } else if (correctOption == 4) {
            variant1_text.textContent = `${publicAnswerRandom1}%`;
            variant2_text.textContent = `${publicAnswerRandom2}%`;
            variant3_text.textContent = `${publicAnswerRandom3}%`;
            variant4_text.textContent = `${publicAnswerCorrect}%`;

            variant4_block.style.height = (publicAnswerCorrect * 2 + 'px');

            variant1_block.style.height = (publicAnswerRandom1 * 2) + 'px';
            variant2_block.style.height = (publicAnswerRandom2 * 2) + 'px';
            variant3_block.style.height = (publicAnswerRandom3 * 2) + 'px';
            variant4_block.style.height = (publicAnswerCorrect * 2) + 'px';
        }

        publicAnswer.removeEventListener('click', usePublicAnswer);
        publicOption.style.display = 'block';
        popMenu.classList.add('popup-active');
    }

    newGame.addEventListener('click', () => {
        getRandomNumber();
        numberOfQuestions = 0,
        counter = 1,
        timerCounter = 30,
        clearInterval(interval),
        liCounter = li.length - 1;
        publicAnswer.addEventListener('click', usePublicAnswer);
        fiftyFifty.addEventListener('click', removeTwoOptions);
        callAFriend.addEventListener('click', getCorrectAnswer);
        fiftyOption.style.display = 'none';
        publicOption.style.display = 'none';
        callOption.style.display = 'none';
        answersPArent.addEventListener('click', selectAnswer);
        questionAndAnswersInner();
    });
});