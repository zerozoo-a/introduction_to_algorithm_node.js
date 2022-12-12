#include<stdio.h>
void printTable(int n, int i);

int main (void){

    printTable(2, 1);

    return 0;
}

void printTable(int n, int i = 1) {
    if(i == 10) return;

    printf("%d * %d = %d \n",n, i, n * i);

    printTable(n, i + 1);
}