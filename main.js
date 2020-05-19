//griglia tramite Handlebars

var template_html = $('#griglia').html();

var template_function = Handlebars.compile(template_html);

var html_finale = template_function();

for (var i = 0; i < 36; i++) {
    $('.griglia').append(html_finale);
}

//intercetto il click su uno dei quadrati

$('.quadrato').click(function () {
    var indice = $(this);
//richiamo l'api ajax (random)
    $.ajax({
        'url': 'https://flynn.boolean.careers/exercises/api/random/int',
        'method': 'GET',
        'success': function(data) {
            var numero_pc = data.response;
//richiamo la funzione per assegnare il colore ai quadrati
            colore(numero_pc, indice);
        },
        'error': function() {
            alert('si è verificato un errore');
        }
    });
})

//funzione per cambiare il colore ai quadrati

function colore(pc_number, index) {
    $(index).find('p').text(pc_number)
    if (pc_number <= 5) {
        $(index).addClass('giallo');
    }
    else {
        $(index).addClass('verde');
    }
}
