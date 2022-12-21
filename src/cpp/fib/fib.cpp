#include<iostream>

int fib(int n){
    int a = 1, b = 1, c, cnt;

    if(n == 1 || n == 2) {
        return 1;
    }

    for(cnt = 3; cnt <= n; cnt++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}


int main(){
    int result = fib(21); 

    std::cout << result << std::endl; // 10946

    return 0;
}
