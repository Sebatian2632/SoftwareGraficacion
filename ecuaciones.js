function grafica_max(){
    //Obtener constantes de ecuación objetivo
    const x1_eo=document.getElementById('x1_eo').value;
    const x2_eo=document.getElementById('x2_eo').value;

    //Obtener constantes de restricciones 
    //Restricción 1
    const x1_r1=document.getElementById('x1_r1').value;
    const x2_r1=document.getElementById('x2_r1').value;
    const v1=document.getElementById('v1').value;
    //Restricción 2
    const x1_r2=document.getElementById('x1_r2').value;
    const x2_r2=document.getElementById('x2_r2').value;
    const v2=document.getElementById('v2').value;
    //Restricción 3
    const x1_r3=document.getElementById('x1_r3').value;
    const x2_r3=document.getElementById('x2_r3').value;
    const v3=document.getElementById('v3').value;
}

async function grafica_min()
{
    console.log('me diste click');
    //Obtener constantes de ecuación objetivo
    const x1_eo = document.getElementById('x1_eo').value;
    const x2_eo=document.getElementById('x2_eo').value;

    //Obtener constantes de restricciones 
    //Restricción 1
    const x1_r1=document.getElementById('x1_r1').value;
    const x2_r1=document.getElementById('x2_r1').value;
    const v1=document.getElementById('v1').value;
    //Restricción 2
    const x1_r2=document.getElementById('x1_r2').value;
    const x2_r2=document.getElementById('x2_r2').value;
    const v2=document.getElementById('v2').value;
    //Restricción 3
    const x1_r3=document.getElementById('x1_r3').value;
    const x2_r3=document.getElementById('x2_r3').value;
    const v3=document.getElementById('v3').value;

    //Resolver las ecuaciones
    //Primera ecuación:
    X1_1P = v1 / x1_r1;
    X2_1P = v1 / x2_r1;
    //Segunda ecuación:
    X1_2P = v2 / x1_r2;
    X2_2P = v2 / x2_r2;
    //Tercera ecuación:
    X1_3P = v3 / x1_r3;
    X2_3P = v3 / x2_r3;

    //Puntos de intersección:
    //Primer punto:
    X_1I = ((v1 * x2_r2) - (x2_r1 * v2)) / ((x1_r1 * x2_r2) - (x2_r1 * x1_r2));
    Y_1I = ((x1_r1 * v2) - (v1 * x1_r2)) / ((x1_r1 * x2_r2) - (x2_r1 * x1_r2));

    //Segundo punto:
    X_2I = ((v1 * x2_r3) - (x2_r1 * v3)) / ((x1_r1 * x2_r3) - (x2_r1 * x1_r3));
    Y_2I = ((x1_r1 * v3) - (v1 * x1_r3)) / ((x1_r1 * x2_r3) - (x2_r1 * x1_r3));

    //Tercer punto:
    X_3I = ((v2 * x2_r3) - (x2_r2 * v3)) / ((x1_r2 * x2_r3) - (x2_r2 * x1_r3));
    Y_3I = ((x1_r2 * v3) - (v2 * x1_r3)) / ((x1_r2 * x2_r3) - (x2_r2 * x1_r3));

    //Sustitución en las ecuaciones:
    R1 = (x1_eo * X_1I) + (x2_eo * Y_1I);
    R2 = (x1_eo * X_2I) + (x2_eo * Y_2I);
    R3 = (x1_eo * X_3I) + (x2_eo * Y_3I);

    //Agrelo para guardar los resultados:
    let Resultados = [
        ["R1", R1],
        ["R2", R2],
        ["R3", R3]];
    
    //For para imprimir los resultados en la consola
        for(let i=0; i<Resultados.length;i++)
    {
        for(let j=0; j<Resultados[i].length; j++)
        {
            console.log(Resultados[i][j]);
        }
    }

    console.log('Arreglo acomodado');
    //Llamamos a la función para acomodar el arrelo
    Acomodo(Resultados);

    //For para imprimir el arreglo acomodado en la consola
    for(let i=0; i<Resultados.length;i++)
    {
        for(let j=0; j<Resultados[i].length; j++)
        {
            console.log(Resultados[i][j]);
        }
    }
    
    //Imprime en pantalla el valor correcto, en teoria
    console.log('El menor resultado que podemos obtener es '+ Resultados[1][1]);
}
//Función para el acomodo del arreglo
function Acomodo(Resultados)
{
    let n = Resultados.length;
    for(let i =0; i<n-1; i++)
    {
        for(let j=0; j<n-1;j++)
        {
            if(Resultados[j][1]> Resultados[j+1][1])
            {
                //Intercambio de valores
                let temp = Resultados[j];
                Resultados[j] = Resultados[j+1];
                Resultados[j+1] = temp;
            }
        }
    }
}

function reiniciar()
{
    //Limpiar constantes de ecuación objetivo
    document.getElementById('x1_eo').value = "";
    document.getElementById('x2_eo').value = "";

    //Limpiar constantes de restricciones 
    //Restricción 1
    document.getElementById('x1_r1').value = "";
    document.getElementById('x2_r1').value = "";
    document.getElementById('v1').value = "";
    //Restricción 2
    document.getElementById('x1_r2').value = "";
    document.getElementById('x2_r2').value = "";
    document.getElementById('v2').value = "";
    //Restricción 3
    document.getElementById('x1_r3').value = "";
    document.getElementById('x2_r3').value = "";
    document.getElementById('v3').value = "";
}