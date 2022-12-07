"""
1.	Implementa dos funciones para obtener la parte entera y la parte decimal de un 
número en punto flotante (double). La definición de las funciones es como sigue: 
•	def get_parte_entera(numero) return parte entera del numero
•	def get_parte_decimal(numero) return parte decimal del numero 
"""

"""
1º Debéis hacer una tabla, con los casos de prueba que vayáis a realizar
2º Realizáis la implementación del código
3º Implementáis los casos de prueba que hayáis definido en la parte 1
4º Ejecutais los casos de prueba
5º Comprobáis los resultados
6º Arregláis los fallos y volvéis a ejecutar las pruebas
"""

"""
Tabla:
Función a probar: get_parte_entera
¿Qué compruebo?     Val.Entrada     Res.Esperado    Res.Obtenido
assertEqual()       1.02            1               ?
"""
def get_parte_entera(numero):
    
    if(type(numero) is not int and type(numero) is not float):
        raise ValueError

    st_numero = str(numero)
    arr_numero = st_numero.split(".")
    return int(arr_numero[0])


def get_parte_decimal(numero):

    if(type(numero) is not int and type(numero) is not float):
        raise ValueError

    st_numero = str(numero)
    arr_numero = st_numero.split(".")
    return float(0) if(len(arr_numero) == 1) else float("0."+arr_numero[1])


if __name__ == "__main__":
    print(get_parte_decimal(1))
    