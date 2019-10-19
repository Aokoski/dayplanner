$(document).ready(function(){
    $("button").on("click",function(){
        var value= $(this).siblings("textarea").val()
        var time= $(this).parent().attr("id")
        localStorage.setItem(time, value)

    
    })
    function updateHours(){
        var currentHour = moment().hours()
        var totalHours = $(".totalHours").length
        for(i=0;i < totalHours; i++){
            var blockHour = parseInt($(this).attr("id").split("-")[1])
            if (blockHour < currentHour ){
                $(this).addClass("past")
                
            }else if(blockHour===currentHour){
                $(this).removeClass("past")
                $(this).addClass("present")
            }else{
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")

            }
        }
    }
    updateHours()
    var interval = setInterval(updateHours,15000)
    $("#hour-9 textarea").val(localStorage.getItem("hour-9"))
})
