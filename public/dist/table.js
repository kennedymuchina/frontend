$(document).ready(function() {
  const table = $('#training-table').DataTable({
    lengthChange: false,
    buttons: ['copy', 'excel', 'pdf', 'colvis'],
  });
  table.column(13).visible(false);

  // table.buttons().container() gives us the DOM element with buttons
  //  we append the container to a menu outside of the table
  //  and then add buttons vertical so the buttons appear vertically
  //  could easily change to make sidebar or really anything
  table
    .buttons()
    .container()
    .appendTo($('#buttons-menu'))
    .addClass('ui buttons');

  const mentorshipTable = $('#mentorship-table').DataTable({
    lengthChange: false,
    buttons: ['copy', 'excel', 'pdf', 'colvis'],
    aaSorting: [[0, 'desc']],
  });
  mentorshipTable.column(8).visible(false);
  mentorshipTable.column(9).visible(false);
  mentorshipTable
    .buttons()
    .container()
    .appendTo($('#buttons-menu'))
    .addClass('ui buttons');
  // demonstrate how to change styling of buttons
  //   order of classes matter
  $('.ui.button', table.buttons().container()).addClass('basic primary');
  $('.ui.button', mentorshipTable.buttons().container()).addClass(
    'basic primary'
  );
});
