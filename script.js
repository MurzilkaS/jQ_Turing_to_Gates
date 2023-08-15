$("img").click(function(){
    let img3= $(this).attr("alt-pic")
    $(this).hide()
    $(this).before($(`img[src="${img3}"]`).show())
})