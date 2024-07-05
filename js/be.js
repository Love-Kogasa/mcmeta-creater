var codeele, interval
var manifest = JSON.parse(`
{
    "format_version": 2,
    "header": {
        "name": "",
        "description": "",
        "uuid": "",
        "version": [0, 0, 1],
        "min_engine_version": [ 1, 13, 20 ]
    },
    "modules": [
        {
            "type": "resources",
            "uuid": "",
            "version": [0, 0, 1]
        }
    ]
}
`)

manifest.header.uuid = guid()
manifest.modules[0].uuid = guid()

function setHeader( name, value ){
    manifest.header[name] = value
}
function setType( isdt=false ){
    if( isdt == true ){
        manifest.modules[0].type = "data"
    } else {
        manifest.modules[0].type = "resources"
    }
}
function version( value ){
    setHeader( "min_engine_version", ( function(){
        var vs = []
        value.split( "." ).forEach( function( num ){
            vs.push( Number( num ) || 0 )
        })
        return vs
    })())
}
function save(){
    download( JSON.stringify(
        manifest, 0, 4
    ), "manifest.json", "application/json" )
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