#include <stdio.h>
#include <locale.h>

int main() {
    setlocale (LC_ALL, "Portuguese");

    float num1;
    float num2;

    printf("----------------------------------\n");
    printf("CALCULADORA BÁSICA DE DOIS INPUTS\n");
    printf("-----------------------------------\n");

    printf("\nDigite o primeiro número: ");
    scanf("%f", &num1);
    printf("Digite o segundo número: ");
    scanf("%f", &num2);

    int userAnswer;

    printf("\nQual operação desejas fazer: ");
    printf("\n1-SOMA \n2-SUBTRAÇÃO \n3-MULTIPLICAÇÃO \n4-DIVISÃO");
    printf("\nSua resposta: ");
    scanf("%d", &userAnswer);

    if (userAnswer == 1){
        printf("\n\n---------------------\n");
        printf("Resultado da Soma: %f\n", num1 + num2);
        printf("---------------------\n");
    } else if (userAnswer == 2){
        printf("\n\n--------------------------\n");
        printf("Resultado da Subtração: %f\n", num1 - num2);
        printf("--------------------------\n");
    } else if (userAnswer == 3){
        printf("\n\n------------------------------\n");
        printf("Resultado da Multiplicação: %f\n", num1 * num2);
        printf("------------------------------\n");
    } else if (userAnswer == 4){
        printf("\n\n------------------------\n");
        printf("Resultado da Divisão: %f\n", num1 / num2);
        printf("------------------------\n");
    } else {
        printf("\n\n-------------------------------------------------------\n");
        printf("Número Inválido! Recarregue o código e tente novamente\n");
        printf("-------------------------------------------------------\n");
    }
}