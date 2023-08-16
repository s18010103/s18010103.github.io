---
title: python 练习一
icon: python
date: 2023-01-31 11:10:14
author: 刘奕彤
isOriginal: true
category: 
    - 分类1
    - 分类2
tag:
    - 标签1
    - 标签2
article: true
timeline: true
navbar: true
sidebarIcon: true
comment: true
lastUpdated: true
backToTop: true
toc: true
---

1. 在 Python 中，`print` 函数是用来做什么的？   

    方法用于打印输出

2. 如何在 Python 中声明一个变量？请给出一个例子。  

     a = b = c = 1  a, b, c, = 1, 2, 3

3. 如何在 Python 中进行多个变量同时赋值相同的值？请给出一个例子。

    ```python
    a = b = c = 1
    print(a, b, c)
    
    # ---output---
    1 1 1 
    ```

    

4. 如何在 Python 中进行多个变量同时赋值不同的值？请给出一个例子。

    ```python
    a, b, c = 1, 2, 3
    print(a, b, c)
    
    # ---output---
    1 2 3
    ```

    

5. 在 Python 中，如果我们想要在一行中打印多个变量，应该怎么做？请给出一个例子。

    ```python
    a = 1
    b = 2
    c = 3
    print(a , b , c , sep="12345678910")
    
    # ---output---
    1123456789102123456789103
    ```

    

6. 什么是 Python 中的注释？怎么写注释？

    注释用来向用户提示或解释某些代码的作用和功能，它可以出现在代码中的任何位置

7. 在 Python 中，我们如何改变 `print` 函数中的 `sep` 参数，以改变多个变量的输出间隔？请给出一个例子。

    ```python
    a = 1
    b = 2
    c = 3
    print(a , b , c , sep="12345678910")
    
    # ---output---
    1123456789102123456789103
    ```

    

8. 在 Python 中 print 的 end 作用是什么？编写个代码示例。

    ```py
    a = 1
    b = 2
    c = 3
    print(a , b , c , sep="12345678910", end=" love hugo")
    
    # ---output---
    1123456789102123456789103 love hugo
    ```

    

9. 在 Python 中，如果我们要覆盖一个变量的值，应该怎么做？请给出一个例子。

    ```python
    n1 = 19
    n1 = 100
    print(n1)
    
    # ---output--- 
    100
    ```

    

10. 在 Python 中，我们怎么样才能让计算机“看不见”一行代码？

    加一个#就可以了

11. 当我们用 `print` 函数同时输出多个变量时，默认的间隔符是什么？

    在默认情况下，间隔符是空格

12. 在 Python 中，一个变量可以存储什么样的数据？请给出至少三个例子。

    ```python
    a = 1 # 整数类型
    ```

    ```python
    b = "aivc" # 字符串类型
    ```

    ```python
    c = 1.1 # 小数类型
    ```

    

13. 在编写代码中，为什么要适当的加上空格？空格对代码有影响吗？

    没有

14. 变量命名为什么推荐：“见名知意”？

```python
number = 1
a = 1
```



------



## 2. 选择题

1. Python 变量的命名规则中，以下哪一项是错误的？(c)

    a) 变量名可以由字母、数字和下划线组成

    b) 变量名不能以数字开头

    c) 变量名可以以特殊字符，如@或#，开头

    d) 变量名可以包含大写和小写字母

2. 在 Python 中，如何使用 print 函数打印字符串 "`Hello, World!`"？(b)

    a) `print "Hello, World!"`

    b) `print("Hello, World!")`

    c) `echo("Hello, World!")`

    d) `print[Hello, World!]`

3. print 函数中的 end 参数用于什么？(b)

    a) 确定是否结束程序

    b) 在输出的末尾添加指定字符

    c) 控制输出的数量

    d) 确定输出的顺序

4. 如果我想在 print 函数中，用"`,`"作为分隔符，应该如何操作？(a)

    a) 使用参数 `sep = ","`

    b) 使用参数 `end = ","`

    c) 使用参数 `print = ","`

    d) 使用参数 `divide = ","`

5. 如果我想在不换行的情况下输出两个变量 a 和 b，以下哪个是正确的？(c,a)

    a) `print(a, b, end = ' ')`

    b) `print(a, b, sep = ' ')`

    c) `print(a; b)`

    d) `print(a, b, end = '\n')`

6. 在 Python 中，以下哪种方法可以用来删除变量？(a,c)

    a) `drop(variable)`

    b) `remove(variable)`

    c) `del variable`

    d) `delete variable`

7. 在 Python 中，以下哪个语句是错误的？(c)

    a) `x, y, z = "Orange", "Banana", "Cherry"`

    b) `x = y = z = "Orange"`

    c) `x = "Orange" = y`

    d) `x, y = y, x`

8. 在 Python 中，以下哪个声明不是合法的变量名？(a,c)

    a) `_myvar`

    b) `myVar`

    c) `9var`

    d) `varName9`

9. 下列哪个 print 函数的使用方式是正确的？(a)

    a) `print(a, b, c, sep = ' ', end = ' ')`

    b) `print(a b c sep = ' ', end = ' ')`

    c) `print[a, b, c, sep = ' ', end = ' ']`

    d) `print{a, b, c, sep = ' ', end = ' '}`

10. Python 中的哪个函数可以用来获取变量的类型？(b)

    a) `typeof(variable)`

    b) `type(variable)`

    c) `getType(variable)`

    d) `variable.type()`

## [#](#_3-填空题) 3. 填空题

1. 在 Python 中，_____ 关键字用于打印一个变量的值。
2. Python 中的变量可以是

------

著作权归黄家宝|AI悦创所有 原文链接：https://bornforthis.cn/column/py/Lab/Lab01.html#_2-%E9%80%89%E6%8B%A9%E9%A2%98