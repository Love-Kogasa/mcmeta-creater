function pageMain(){
    var element = {
        main : document.getElementById( "main" ),
        title : document.getElementById( "title" ),
        link : document.getElementById( "link" ) }
    element.main.innerHTML = marked.parse(
        $GET[ "main" ] || "无内容" )
    element.title.innerHTML = $GET[ "title" ] || "无标题"
    element.link.innerHTML = $GET[ "btn" ] || " 附属链接 "
    element.link.href = $GET[ "link" ] || "javascript:alert('no link')"
}
/*
  http://localhost:8080/mcmanifest/page.html?title=TITLE&main=*YOUR WEB INFORMATION*&btn=CLICK&link=javascript:alert('nothing')
*/