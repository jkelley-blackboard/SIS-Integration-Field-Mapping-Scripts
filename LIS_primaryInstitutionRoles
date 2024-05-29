(function() { 
 var primaryRole = data.getPerson().getRoles().get(0).getPrimaryInstitutionRole(); 
 if ( primaryRole != null ) { 
   var instRole = primaryRole.value; 
   helper.logInfo("Primary Role found in XML = " +  instRole );
     
   if ( instRole == 'Student' ) {
             helper.logInfo("Mapping Primary Institution Role to STUDENT");
             return 'STUDENT'; 
      }
   else if ( instRole == 'Instructor' ) {
             helper.logInfo("Mapping Primary Institution Role to FACULTY");
             return 'FACULTY';
      }
   else if ( instRole == 'Staff' ) {
             helper.logInfo("Mapping Primary Institution Role to STAFF");
             return 'STAFF';
      } 
   else {
             helper.logInfo("No map for Primary Institution Role");
             return instRole; 
   }
 }  
 else { 
   helper.logWarning("Primary Role not found in XML.  Skip Record");
   helper.skipRecord();
 }
}()); 
