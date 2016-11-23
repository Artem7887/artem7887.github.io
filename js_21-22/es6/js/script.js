'use strict';

window.onbeforeunload = () => {
    localStorage.clear();
};

$(() => {
    const quizz = {
        "testName":"ProgrammingTest",
        "submitText":"View results",
        "questions":[
            {
                "id": "q1",
                "answer": "1",
                "text": "How variables are declared in the ES6?",
                "type": "radio",
                "variants":[
                    { "text": "let a = 1;", "value": 1 },
                    { "text": "var a = 1;", "value": 2 },
                    { "text": "es6 a = 1;", "value": 4 }
                ]
            },
            {
                "id": "q2",
                "answer": "10",
                "text": "Which data format is the most common?",
                "type": "radio",
                "variants":[
                    { "text": "TXT", "value": 1 },
                    { "text": "JSON", "value": 2 },
                    { "text": "XML", "value": 4 }
                ]
            },
            {
                "id": "q3",
                "answer": "1011",
                "text": "Which results are equal 0",
                "type": "checkbox",
                "variants":[
                    { "text": " (1 ^ 1)", "value": 1 },
                    { "text": " (1 ^ 1 & 1)", "value": 2 },
                    { "text": " (0 | 1)", "value": 4 },
                    { "text": " (1 ^ 0 ^ 1)", "value": 8 }
                ]
            }
        ]
    }

    localStorage.setItem('quizz', JSON.stringify(quizz));

    const savedQuizz = getQuizz();

    const tmpl = _.template(document.getElementById('content-template').innerHTML);
    const content = tmpl( savedQuizz );
    $('body').html(content);

    function getQuizz() {
        try {
            var quizz = JSON.parse(localStorage.getItem('quizz'));
            return quizz;
        } catch(exception){
            return { "testName":"The test is unreachable :(", "submitText":"No need to push the button", "questions": [] };
        }
    }

    function checkAnswers(q){
        const totalItems = q.questions.length;
        let totalAnswered = 0;

        q.questions.forEach((item) => {
            let checkSum = 0;

            $(`#${item.id} input:checked`).each((index, el) => {
                checkSum += parseInt($(el).val());
            });

            if ( (checkSum^parseInt(item.answer, 2)) == 0 ) {
                totalAnswered +=  1;
            }
        });

        return (totalItems == totalAnswered) ? "Bingo!" : `Your result is: ${totalAnswered}/${totalItems}`;
    }

    $('button[type="submit"]').click(() => {
        $('#results .modal-body p').html(checkAnswers(savedQuizz));
        $('#results').modal('show');
    });
    $('#results .btn-primary').click(() => {
        $('input').prop('checked', false);
        $('#results').modal('hide');
    });
});
