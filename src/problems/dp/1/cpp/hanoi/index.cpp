#include<iostream>

void hanoi(char s, char d, char e, int n) {
    if(n <= 0) return;

    hanoi(s,e,d,n-1);

    std::cout << n << "번 원반을 " << s << "에서 " << d << "로 옮깁니다." << std::endl;

    hanoi(e,d,s,n-1);
}

int main () {

    hanoi('s','d','e',3);

    return 0;
}