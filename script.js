$(document).ready(function()
{
    $("h1").click(function() 
    {
        alert("You Click H1");
    });

    $("#myH2").click(function()
    {
        alert("You click H2");
    });
   
    $("#btnSubmit").click(function()
    {
        let name =$("#name").val()
        alert(name)
        $("#myH2").text(name)
    });
});