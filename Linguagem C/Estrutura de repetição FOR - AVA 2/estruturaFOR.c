#include <stdio.h>
#include <locale.h>

int main(){
    setlocale(LC_ALL, "Portuguese");
    int numInicial, numFinal, i;
    int quantidadePares = 0;

    printf("Digite o número INICIAL: ");
    scanf("%d", &numInicial);

    printf("Digite o número FINAL: ");
    scanf("%d", &numFinal);

    int res;

    for(i = numInicial; i <= numFinal; i++){
        res = checkNumber(i);
        if (res == 2){
            printf("\nO número %d é PAR.", i);
            quantidadePares++;
        } else {
            printf("\nO número %d é ÍMPAR.", i);
        }
    }

    printf("\nO total de valores pares encontrado foi de %d números.\n", quantidadePares);
}

int checkNumber(int num){
    if (num % 2 == 0){
        return 2;
    } else {
        return 1;
    }
}