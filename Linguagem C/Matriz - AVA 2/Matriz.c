#include <stdio.h>
#include <locale.h>

int main(){
    setlocale (LC_ALL, "Portuguese");
    int matriz[3][3];
    int lin, col;

    for (lin = 0; lin <= 2; lin++){
        for(col = 0; col <= 2; col++){
            printf("Digite o ELEMENTO da linha %d, coluna %d da matriz: ", lin+1, col+1);
            scanf("%d", &matriz[lin][col]);
        }
        printf("\n");
    }

    printf("\nMATRIZ MULTIPLICADA POR 5\n");
    for (lin = 0; lin <=2; lin++){
        for(col = 0; col <=2; col++){
            printf("%d\t", matriz[lin][col]*5);
        }
        printf("\n");
    }
}