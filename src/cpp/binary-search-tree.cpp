#include<iostream>

struct Node {
    int data;
    struct Node *left, *right;
};

Node* newNode(int data) {
    Node* temp = new Node;
    temp->data = data;
    temp->left = temp->right = NULL;
    return temp;
}

void printInOrder(struct Node* node) {
    if(node == NULL) return;


    if(node -> left != NULL){
        printInOrder(node -> left);
    }

    std::cout << node -> data << " ";

    if(node -> right != NULL){
        printInOrder(node -> right);
    }
}

int main() {
    struct Node* root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);
    root->left->right = newNode(5);


    std::cout << "\n InOrder traversal of binary tree is \n";
    printInOrder(root);
    return 0;
}