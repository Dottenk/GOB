$(document).ready(function () {

    $('.star').on('click', function () {
        $(this).toggleClass('star-checked');
    });

    $('.ckbox label').on('click', function () {
        $(this).parents('tr').toggleClass('selected');
    });

    $('.btn-filter').on('click', function () {
        var $target = $(this).data('target');
        if ($target != 'all') {
            $('.table .recetas').css('display', 'none');
            $('.table .recetas[data-status="' + $target + '"]').fadeIn('slow');
        } else {
            $('.table .recetas').css('display', 'none').fadeIn('slow');
        }
    });


    $('.nav-link').on('click', function () {
        if (document.getElementById("home-tab").classList.contains('active')){
            document.getElementById("home-pane").className = 'tab-pane fade show active'
        }else{
            document.getElementById("home-pane").className = 'tab-pane fade'
        }
        if (document.getElementById("info-tab").classList.contains('active')) {
            document.getElementById("info-pane").className = 'tab-pane fade show active'
        } else {
            document.getElementById("info-pane").className = 'tab-pane fade'
        }

    });




    var activeSystemClass = $('.list-group-item.active');

    $('#system-search').keyup(function () {
        var that = this;
        // affect all table rows on in systems table
        var tableBody = $('.table-list-search tbody');
        var tableRowsClass = $('.table-list-search tbody tr');
        $('.search-sf').remove();
        tableRowsClass.each(function (i, val) {

            //Lower text for case insensitive
            var rowText = $(val).text().toLowerCase();
            var inputText = $(that).val().toLowerCase();
            if (inputText != '') {
                $('.search-query-sf').remove();
                tableBody.prepend('<tr class="search-query-sf"><td colspan="6"><strong>Buscando por: "'
                    + $(that).val()
                    + '"</strong></td></tr>');
            }
            else {
                $('.search-query-sf').remove();
            }

            if (rowText.indexOf(inputText) == -1) {
                //hide rows
                tableRowsClass.eq(i).hide();

            }
            else {
                $('.search-sf').remove();
                tableRowsClass.eq(i).show();
            }
        });
        //all tr elements are hidden
        if (tableRowsClass.children(':visible').length == 0) {
            tableBody.append('<tr class="search-sf"><td class="text-muted" colspan="6">No entries found.</td></tr>');
        }
    });

});

