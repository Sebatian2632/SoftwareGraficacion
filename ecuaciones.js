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

    if((x1_eo <='0') || (x2_eo <= 0))
    {
        alert("Alguno de los valores de la función objetivo es menor o igual a 0. Favor de cambiarlo");
    }
    else if((x1_r1 <= '0') || (x2_r1 <= '0') || (v1 <= '0'))
    {
        alert("Alguno de los valores de la restricción 1 es menor o igual a 0. Favor de cambiarlo");
    }
    else if((x1_r2 <= '0') || (x2_r2 <= '0') || (v2 <= '0'))
    {
        alert("Alguno de los valores de la restricción 2 es menor o igual a 0. Favor de cambiarlo");
    }
    else if((x1_r3 <= '0') || (x2_r3 <= '0') || (v3 <= '0'))
    {
        alert("Alguno de los valores de la restricción 3 es menor o igual a 0. Favor de cambiarlo");
    }
    else
    {
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

    var Coordenadas = [[X1_1P,X2_1P],[X1_2P,X2_2P],[X1_3P,X2_3P]];

    //Variable para saber el mayor resultado dentro del eje X
    var maximox = Coordenadas[0][0];

    //For para sacar el valor maximo dentro del eje de las x
    for (var i = 0; i < Coordenadas.length; i++) {
        if (Coordenadas[i][0] > maximox) {
          maximox = Coordenadas[i][0];
        }
      }

    //Variable para saber el mayor resultado dentro del eje y
    var maximoy = Coordenadas[0][1];

    //For para sacar el valor maximo dentro del eje de las y
    for (var i = 0; i < Coordenadas.length; i++) {
        if (Coordenadas[i][1] > maximoy) {
          maximoy = Coordenadas[i][1];
        }
      }

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
        ["R1", R1, X_1I, Y_1I],
        ["R2", R2, X_2I, Y_2I],
        ["R3", R3, X_3I, Y_3I]];
    
    //Llamamos a la función para acomodar el arrelo
    Acomodo(Resultados);
    
    graficar(maximox,maximoy, Coordenadas, Resultados);
    //Imprime en pantalla el valor correcto, en teoria
    let Conclusion = 'El mayor resultado que podemos obtener es '+ Resultados[1][1] + ' usando '+ Resultados[1][2] + ' unidades de x1 y ' + Resultados[1][3] +' unidades de x2';
    document.getElementById("mensaje").innerHTML = Conclusion;
    }
}

async function grafica_min()
{
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

    if((x1_eo <='0') || (x2_eo <= 0))
    {
        alert("Alguno de los valores de la función objetivo es menor o igual a 0. Favor de cambiarlo");
    }
    else if((x1_r1 <= '0') || (x2_r1 <= '0') || (v1 <= '0'))
    {
        alert("Alguno de los valores de la restricción 1 es menor o igual a 0. Favor de cambiarlo");
    }
    else if((x1_r2 <= '0') || (x2_r2 <= '0') || (v2 <= '0'))
    {
        alert("Alguno de los valores de la restricción 2 es menor o igual a 0. Favor de cambiarlo");
    }
    else if((x1_r3 <= '0') || (x2_r3 <= '0') || (v3 <= '0'))
    {
        alert("Alguno de los valores de la restricción 3 es menor o igual a 0. Favor de cambiarlo");
    }
    else
    {
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

    var Coordenadas = [[X1_1P,X2_1P],[X1_2P,X2_2P],[X1_3P,X2_3P]];

    //Variable para saber el mayor resultado dentro del eje X
    var maximox = Coordenadas[0][0];

    //For para sacar el valor maximo dentro del eje de las x
    for (var i = 0; i < Coordenadas.length; i++) {
        if (Coordenadas[i][0] > maximox) {
          maximox = Coordenadas[i][0];
        }
      }

    //Variable para saber el mayor resultado dentro del eje y
    var maximoy = Coordenadas[0][1];

    //For para sacar el valor maximo dentro del eje de las y
    for (var i = 0; i < Coordenadas.length; i++) {
        if (Coordenadas[i][1] > maximoy) {
          maximoy = Coordenadas[i][1];
        }
      }

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
        ["R1", R1, X_1I, Y_1I],
        ["R2", R2, X_2I, Y_2I],
        ["R3", R3, X_3I, Y_3I]];


    //Llamamos a la función para acomodar el arrelo
    Acomodo(Resultados);
    
    graficar(maximox,maximoy,Coordenadas,Resultados);
    //Imprime en pantalla el valor correcto, en teoria
    let Conclusion = 'El menor resultado que podemos obtener es '+ Resultados[1][1] + ' usando '+ Resultados[1][2] + ' unidades de x1 y ' + Resultados[1][3] +' unidades de x2';
    document.getElementById("mensaje").innerHTML = Conclusion;
    }
}

//Función para el acomodo del arreglo
function Acomodo(Resultados)
{
    let n = Resultados.length;
    for(let i = 0; i < n-1; i++) {
        for(let j = 0; j < n-i-1; j++) {
            if(Resultados[j][1] > Resultados[j+1][1]) {
                // Intercambio de valores
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

    let Conclusion = 'Aqui va la interpretación de la grafica';
    document.getElementById("mensaje").innerHTML = Conclusion;

    var ctx = document.getElementById("miGrafico").getContext("2d");
      var miGrafico = new Chart(ctx, {
      });

}

function graficar(maximox,maximoy,Coordenadas, Resultados)
{    
    var MAXIMOX = [];
    var MAXIMOY = [];

    for(var i = 0; i<=maximox+1;i++)
    {
      MAXIMOX[i]=i;
    }

    for(var i=0;i<=maximoy+1;i++)
    {
      MAXIMOY[i] = i;
    }

    //Variables y sustitución para la linea 1:
    var xL1 = Coordenadas[0][0];
    var yL1 = Coordenadas[0][1];
    var Linea1 = [];
    var aux1 = 0;
    var aux2 = yL1;
    aux1 = yL1/xL1;
    Linea1[0] = yL1;
    for(var i=1;i<=xL1;i++)
        {
            Linea1[i] = aux2 - aux1;
            aux2 = aux2 - aux1; 
        }
    //Variebles y sustitución para la linea 2:
    var xL2 = Coordenadas[1][0];
    var yL2 = Coordenadas[1][1];
    var Linea2 = [];
    var aux1 = 0;
    var aux2 = yL2;
    aux1 = yL2/xL2;
    Linea2[0] = yL2;
    for(var i=1;i<=xL2;i++)
        {
            Linea2[i] = aux2 - aux1;
            aux2 = aux2 - aux1; 
        }
    //Variables y sustitución para la linea 3:
    var xL3 = Coordenadas[2][0];
    var yL3 = Coordenadas[2][1];
    var Linea3 = [];
    var aux1 = 0;
    var aux2 = yL3;
    aux1 = yL3/xL3;
    Linea3[0] = yL3;
    for(var i=1;i<=xL3;i++)
        {
            Linea3[i] = aux2 - aux1;
            aux2 = aux2 - aux1; 
        }
    //Punto intersección 1:
    var P1_X = Resultados[0][2];
    var RP1_X = Math.round(P1_X);
    var P1_Y = Resultados[0][3];
    CordP1 = [];
    for(var i=0;i<=RP1_X;i++)
    {
        if(i == RP1_X)
        {
            CordP1[i] = P1_Y;
        }
        else
        {
            CordP1[i] = null;
        }
    }
    //Punto intersección 2:
    var P2_X = Resultados[1][2];
    var RP2_X = Math.round(P2_X);
    var P2_Y = Resultados[1][3];
    CordP2 = [];
    for(var i=0;i<=RP2_X;i++)
    {
        if(i == RP2_X)
        {
            CordP2[i] = P2_Y;
        }
        else
        {
            CordP2[i] = null;
        }
    }
    //Punto intersección 3:
    var P3_X = Resultados[2][2];
    var RP3_X = Math.round(P3_X);
    var P3_Y = Resultados[2][3];
    CordP3 = [];
    for(var i=0;i<=RP3_X;i++)
    {
        if(i == RP3_X)
        {
            CordP3[i] = P3_Y;
        }
        else
        {
            CordP3[i] = null;
        }
    }
		var ctx = document.getElementById('miGrafico').getContext('2d');
        var miGrafico = new Chart(ctx, {
            type: 'line',
            data: {
                labels: MAXIMOX,
                datasets: [
                    {
                        label: 'Línea 1',
                        data: Linea1,
                        borderColor: 'red',
                        fill: false,
                        pointRadius: 0,
                        zIndex: 1
                    },
                    {
                        label: 'Línea 2',
                        data: Linea2,
                        borderColor: 'blue',
                        fill: false,
                        pointRadius: 0,
                        zIndex: 2
                    },
                    {
                        label: 'Línea 3',
                        data: Linea3,
                        borderColor: 'green',
                        fill: false,
                        pointRadius: 0,
                        zIndex: 3
                    },
                    {
                        data : CordP1,
                        borderColor: 'black',
                        fill: false,
                        borderWidth: 0,
                        pointRadius: 5,
                        pointBackgroundColor: 'black',
                        pointHoverRadius: 5,
                        pointHitRadius: 20,
                        zIndex: 4
                    },
                    {
                        data : CordP2,
                        borderColor: 'black',
                        fill: false,
                        borderWidth: 0,
                        pointRadius: 5,
                        pointBackgroundColor: 'black',
                        pointHoverRadius: 5,
                        pointHitRadius: 20,
                        zIndex: 4
                    },
                    {
                        data : CordP3,
                        borderColor: 'black',
                        fill: false,
                        borderWidth: 0,
                        pointRadius: 5,
                        pointBackgroundColor: 'black',
                        pointHoverRadius: 5,
                        pointHitRadius: 20,
                        zIndex: 4
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        });
        

}