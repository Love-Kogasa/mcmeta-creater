var codeele, interval
var manifest = JSON.parse(`
{
    "pack" : {
        "description" : "",
        "pack_format" : 3
    }
}
`)

function setHeader( name, value ){
    manifest.pack[name] = value
}
function version( value ){
    setHeader( "format_version", ( function(){
        var version = Number( value.split( "." )[1] ) - 9 || 1
        return version < 1 ? 1 : version
    })())
}
function save(){
    download( JSON.stringify(
        manifest, 0, 4
    ), "pack.mcmeta", "application/json" )
}
async function copy(){
    await navigator.clipboard.writeText(JSON.stringify(
        manifest, 0, 4
    ))
}

function preOnload( ele ){
    interval = setInterval( function(){
        ele.innerHTML = jsonHighlight( manifest )
    }, 300)
    codeele = ele
}