def busqueda_binaria_error(lista, x):
    """
    Búsqueda binaria
    Precondición: lista está ordenada

    En esta función existen 2 errores.
    1 error de implementación (Funcional)
    1 error de eficiencia (No funcional)
    
    Busca en toda la lista dividiéndola en segmentos y considerando
    a la lista completa como el segmento que empieza en 0 y termina
    en len(lista) - 1.

    Devuelve -1 si x no está en lista;
    Devuelve p siendo p la posicion dentro de la lista, tal que lista[p] == x, si x está en lista
    """

    izq = 0 # izq guarda el índice inicio del segmento
    der = len(lista) -1 # der guarda el índice fin del segmento

    # una segmento es vacío cuando izq > der:
    while izq <= der:
        medio = int((izq+der)/2)

        if lista[medio] == x:
            return medio

        elif lista[medio] < x:
            der = medio

        else:
            izq = medio

    return -1