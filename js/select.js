var lookup = {
   'One': [[1,'North and Middle Andaman'], [2,'South Andaman'], [3,'Nicobar']],
   'Two': ['Option 2 - Choice 1', 'Option 2 - Choice 2'],
   'Three': ['Option 3 - Choice 1'],
};

$('#states').on('change', function() {
   var selectValue = $(this).val();
   $('#districts').empty();
   for (i = 0; i < lookup[selectValue].length; i++) {
      $('#districts').append("<option value='" + lookup[selectValue][i][0] + "'>" + lookup[selectValue][i][1] + "</option>");
   }
});