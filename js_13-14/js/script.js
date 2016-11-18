
;
$(function(){
'use strict;'

// create DOM

var container = document.createElement('div');

container.className = "container";
document.body.appendChild(container);

var createDom = {

	createTitle: function(tagname, tagtext, tagclass) {
		var x = document.createElement(tagname);
		x.innerHTML = tagtext;
		x.className = tagclass;
		container.appendChild(x);
	},

	createList: function(tagtext, tagclass, listName) {
		var list = document.createElement('ul');
		list.className = tagclass;
		for (var i = 0; i < tagtext.length; i++) {
			var listElement = document.createElement('li');
			var listLabel = document.createElement('label');
			var listInput = document.createElement('input');

			listInput.setAttribute('type', 'checkbox');
			listInput.setAttribute('name', listName);
			listInput.setAttribute('value', listName + i);
			listInput.setAttribute('id', listName + i);


			listElement.insertBefore(listLabel, listElement.children[0]);
			listLabel.innerHTML = '<span>' + tagtext[i] + '</span>';
			listLabel.insertBefore(listInput, listLabel.children[0]);
			list.appendChild(listElement);
			container.appendChild(list)
		}


	}
}

var head = 'Тест по географии'

var titleText = ['1. Столица Бельгии'];
var listText = ['Амстердам', 'Берлин', 'Брюссель'];

var titleText2 = ['2. Столица Марокко'];
var listText2 = ['Рабат', 'Алжир', 'Маскат'];

var titleText3 = ['3. Столица Венгрии'];
var listText3 = ['Братислава', 'Будапешт', 'Бухарест'];

var button = 'Проверить мои результаты';

createDom.createTitle('h2', head, 'text-center');

for(var i = 0; i < titleText.length; i++){

	createDom.createTitle('h2', titleText[i], 'main__title');
	createDom.createList(listText, 'list', 'ask1' + i);
}

for(var i = 0; i < titleText.length; i++){

	createDom.createTitle('h2', titleText2[i], 'main__title');
	createDom.createList(listText2, 'list', 'ask2' + i);
}

for(var i = 0; i < titleText.length; i++){

	createDom.createTitle('h2', titleText3[i], 'main__title');
	createDom.createList(listText3, 'list', 'ask3' + i);
}

createDom.createTitle('button', button, 'btn btn-default btn-comp');

//localStorage ready

function returnVal(){

	var lsLength = localStorage.length;

	if ( lsLength != 0 ) {
		for (var i = 0; i < lsLength; i++) {
			var ask = 'ask' + i;
			var text = localStorage.getItem(ask);

			$('#' + text).attr("checked","checked");

			console.log(text);
		}
	}

}

returnVal();


// test


	$('.list li').on("click", function(){

		var input = $(this).find('input');
		var ask = input.attr('name');
		var answer = input.val();

		localStorage.setItem(ask, answer);
	});

// answers

var answers = [

	"ask102",
	"ask200",
	"ask301"
];

//answers count


function countAnswer(){
	var good = 0, bad = 0;
	
	if (localStorage.ask10 === answers[0]) {
		good++;
	} else {
		bad++;
	}

	if (localStorage.ask20 === answers[1]) {
		good++;
	} else {
		bad++;
	}

	if (localStorage.ask30 === answers[2]) {
		good++;
	} else {
		bad++;
	}

	// console.log("good", good);
	// console.log("bad", bad);

	// modal 

	var html = $('#complete-modal').html();


  // var articles = {
  //     name: ,
  //     status: 'Студент заборостроительного университета',
  //   };

  var content = tmpl(html, {
    data: [good, bad]
  });

  $('body').append(content);


}

$('.btn-comp').on("click", countAnswer);

$('body').on('click', '.btn-reset', function(){
	$('input').removeAttr("checked");
	$('.complete-modal').remove();
	// console.log("saff");
	localStorage.clear();
});


});