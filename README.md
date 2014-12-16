# bug

`tmod -d -w ./` 时因为加了 -d 时出现 too many files，解决方法：`ulimit -n 960`

其他 readme 请见：[https://github.com/aui/tmodjs](https://github.com/aui/tmodjs)