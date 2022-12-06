#include<iostream>

void dp (int c, int *numbers, int size) {
    if(c == size - 1) return; 

    numbers[c+1] += numbers[c];
    dp(c+1, numbers, size);
    return;
};


void accumulate (int *numbers, int size) {
    dp(0, numbers, size);
}

int main (void) {
    int ary[] = {1,2,3};
    int ary_size = sizeof(ary) / sizeof(ary[0]);

    accumulate(ary, ary_size);

    for(int i = 0 ; i < ary_size ; i++) {
        std::cout << ary[i] << std::endl;
    }

    return 0;
}