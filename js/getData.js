document.getElementById("campo").addEventListener("keyup", getDireccion)

const changeText = (txt) => {
    document.getElementById("campo").value = txt;
    document.getElementById("lista").innerHTML = null;
}

function getDireccion() {

    let input = document.getElementById("campo").value
    let lista = document.getElementById("lista")

    if (input.length > 0) 
    {
        lista.style.display = 'block'
        fetch("./DBFinal.csv").then(res => {
            return res.text()
        }).then(data => {
            let result =data.split(/\r?\n|\r/)
            let filteredData = result.filter(value => value.includes(input.toUpperCase()));

            if (filteredData.length>0){
                let result = filteredData.map(value=>`<li onclick="changeText('${value}');">`+value+"</li>");
                result = result.join("\n")
                lista.innerHTML=result;
            }else {
                lista.innerHTML = "<li> No te encuentras en nuestra base de datos, te enviaremos un mensaje para confirmar la dirección de envío! </li>"
            }
console.log(filteredData)
        })

    } else {
        lista.style.display = 'none'
    }
}
