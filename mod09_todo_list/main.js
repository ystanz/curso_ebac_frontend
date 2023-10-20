$(document).ready(function() {

    $('#input-new-task').change(function() {
        const newTask = $(this).val();
        $('<li>' + newTask + '<i class="fa fa-check" title="Pressione para riscar a tarefa"></i> <i title="Pressione para apagar" class="fa fa-trash"></i></li>').appendTo('ul');
        $(this).val('');
    });

    $('ul').on('click', '.fa-trash', function() {
        $(this).parent('li').fadeOut(200);
    });

    $('ul').on('click', '.fa-check', function() {
        $(this).parent('li').toggleClass('checked');
    });
});