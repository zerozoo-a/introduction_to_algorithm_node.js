cmake_minimum_required(VERSION 3.24)
project(ITA)

set(CMAKE_CXX_STANDARD 14)

add_executable(ITA
        src/cpp/bubbleSort/bubbleSort.cpp
        src/cpp/fib/fib.cpp
        src/cpp/ninenine/nine.cpp
        src/cpp/prac/pass.cpp
        src/cpp/static-vars/static.cpp
        src/cpp/binary-search-tree.cpp)
