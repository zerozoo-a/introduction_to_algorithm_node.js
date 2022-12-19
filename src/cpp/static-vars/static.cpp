#include<iostream>

void printVar () {
int value = 1;
value++;
std::cout << value << std::endl;
}

void printStaticVar () {
    static int value = 1;
    value++;
    std::cout << value << std::endl;
}

int main () {
    printVar(); // 2
    printVar(); // 2
    printVar(); // 2

    printStaticVar();
    printStaticVar();
    printStaticVar();
    return 0;
}