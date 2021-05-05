var lookup = {
   1: [[3 ,' Nicobar '],[1 ,' North and Middle Andaman '],[2 ,' South Andaman ']],
   2: [[9 ,' Anantapur '],[10 ,' Chittoor '],[11 ,' East Godavari '],[5 ,' Guntur '],[4 ,' Krishna '],[7 ,' Kurnool '],[12 ,' Prakasam '],[13 ,' Sri Potti Sriramulu Nellore '],[14 ,' Srikakulam '],[8 ,' Visakhapatnam '],[15 ,' Vizianagaram '],[16 ,' West Godavari '],[6 ,' YSR District, Kadapa (Cuddapah) ']],
   3: [[22 ,' Anjaw '],[20 ,' Changlang '],[25 ,' Dibang Valley '],[23 ,' East Kameng '],[42 ,' East Siang '],[17 ,' Itanagar Capital Complex '],[24 ,' Kamle '],[27 ,' Kra Daadi '],[21 ,' Kurung Kumey '],[33 ,' Lepa Rada '],[29 ,' Lohit '],[40 ,' Longding '],[31 ,' Lower Dibang Valley '],[18 ,' Lower Siang '],[32 ,' Lower Subansiri '],[36 ,' Namsai '],[19 ,' Pakke Kessang '],[39 ,' Papum Pare '],[35 ,' Shi Yomi '],[37 ,' Siang '],[30 ,' Tawang '],[26 ,' Tirap '],[34 ,' Upper Siang '],[41 ,' Upper Subansiri '],[28 ,' West Kameng '],[38 ,' West Siang ']],
   
};

$('#states').on('change', function() {
   var selectValue = $(this).val();
   $('#districts').empty();
   for (i = 0; i < lookup[selectValue].length; i++) {
      $('#districts').append("<option value='" + lookup[selectValue][i][0] + "'>" + lookup[selectValue][i][1] + "</option>");
   }
});