#include<iostream>

using namespace std;
void bubbleSort(int *arr, int n);
void bubbleSortRecur(int *arr, int n);
void swap(int *a, int *b);



int main (void){
    int nums[3] = {3, 2, 1};
    bubbleSortRecur(nums,3);
    for(int i = 0; i < 3; i++) {
        cout << "nums: " << nums[i] << endl;
    }
    return 0;


}

void bubbleSortRecur(int *arr, int n) {
    if(n == 1) return;

    for(int i = 0; i < n - 1; i++) {
        if(arr[i] > arr[i+1]) {
            swap(&arr[i], &arr[i+1]);
        }

        bubbleSortRecur(arr, n - 1);
    }
}

void bubbleSort(int *arr, int n) {
    for(int i = 0; i < n - 1; i++) {
        for(int j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                swap(&arr[j], &arr[j+1]);
            }
        }
    }
}

void swap(int *a, int *b) {
    *a ^= *b;
    *b ^= *a;
    *a ^= *b;
}