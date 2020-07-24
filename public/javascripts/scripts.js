$(document).ready(function(){

  $('#delete').on('click',function(){
     var id = $('#delete').attr('data-id');
     $.ajax({
         method: 'delete',
         url: '/admin/admin-doctor/'+id,
         success: function(response){
             window.location.href= '/admin/admin-doctors';
         },
         error: function(err){
           console.log(err);
         }
     });
   });

});