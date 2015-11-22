/* global $ */
$(document).ready(function () {
  var table = $('.filelist').DataTable({
    dom: 't',
    bPaginate: false
  });
  $('.filelist')
    .find('input')
    .each(function (index, item) {
      $(item)
        .on('keyup change', function () {
          table.column(index).search(this.value).draw();
        })
        .on('click', function () {
          return false;
        });
    });

});
