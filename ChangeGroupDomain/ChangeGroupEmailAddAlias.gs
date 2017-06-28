function changePrimaryAndAddAlias() {
    
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var groups = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:A"+maxRows).getValues();
  
  
  for (var i=0;i<groups.length;i++)
  {
    var userName = groups[i];
    
try {   
  
  //This is taking a group on @dundermifflin.net and changing it to sub.dundermifflin.net
  //Please change all instances of dundermifflin.net to your own domains.
  
AdminDirectory.Groups.update({"email": userName + "@sub.dundermifflin.net"}, userName + "@dundermifflin.net"); // @dundermifflin.net--->sub.dundermifflin.net
SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+1)).setValue("SUCCESS")
}
catch(e){
SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+1)).setValue("PASS -- Group does not exist");
}
  }
  }
