var url = window
  .location
  .href
  .split("/")
  .slice(0,-1)
  .join("/")

var id = ( i ) => document.getElementById( i )

var setting = {
    title : "",
    main : "",
    link : "",
    btn : ""
}

function set( name, value ){
    if( value.length > 450 ) return;
    setting[name] = encodeURI( value )
    id( "link" ).innerHTML = `${url}/page.html?title=${
      setting.title || encodeURI(
        "没有标题喵"
      )
    }&main=${
      setting.main || encodeURI(
        "没有正文喵"
      )
    }&link=${
      setting.link || encodeURI(
        "javascript:alert('没有链接喵')"
      )
    }&btn=${
      setting.btn || encodeURI(
        "链接"
      )
    }`
}

async function copy(){
    await navigator.clipboard.writeText( id( "link" ).innerHTML.replace( /amp;/g, "" ) )
}