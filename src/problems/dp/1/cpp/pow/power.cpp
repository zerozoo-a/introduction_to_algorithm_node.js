#include <iostream>

int power(int x, int n) {
    if(n == 0) return 1;

    if(x == 1) return x;

    return x * power(x, n - 1);
}

int main(){
    int res = power(2,4);
    std::cout << "The answer" << res << std::endl;

}