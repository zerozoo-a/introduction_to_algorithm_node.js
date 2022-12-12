#include<iostream>
#include<ctime>

void getSeconds(unsigned long *par);
void getArray(int numbers[5]);
void getArrayRef(int* numbers);

int main () {
    unsigned long sec;
    getSeconds( &sec );
    std::cout << "Number of seconds : " << sec << std::endl;

    int var = 20;
    int* ptr = &var;
    printf("val at ptr = %p \n", ptr);
    int numbers[5] = {1,2,3,4,5};


    getArray(numbers);

    printf("next! \n");

    getArrayRef(numbers);


    return 0;
}

void getArrayRef(int* numbers) {
    std::cout << numbers[0] <<std::endl;
    return;
}

void getArray(int numbers[5]){
    std::cout << numbers[0] <<std::endl;
    return;
}

void getSeconds(unsigned long *par) {
    std::cout << par << std::endl;
    *par =std::time( NULL );
    return;
}