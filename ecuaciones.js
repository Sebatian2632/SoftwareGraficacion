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

    console.log('X_1I = ', X_1I);
    console.log('Y_1I = ', Y_1I);
    console.log('X_2I = ', X_2I);
    console.log('Y_2I = ', Y_2I);
    console.log('X_3I = ', X_3I);
    console.log('Y_3I = ', Y_3I);


}

