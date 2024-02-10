# most importan coding rules

- never use block comments /*...*/
- use line comments // or #

- write doc comments if requeired to do so


##  rules
0. avoid duplication - DRY



- inconsistent changes lead to creation of copies

- expliticit code is better


1. do not write / use existing solutions

- Josha Bloch - effective Java
- to error is human 
- donald knuth

2. your functions should be tiny
less then 80 chars
- upto 5 lines - 10 is max


=== 
---


0.

Avoid duplication at any cost! Many problems in software engineering can be traced to the duplication. 

First of all, duplicate code makes your program lengthy and bulky. More code equals to  more maintenance costs.

Three slightly different functions are much more expensive to maintain, extend and, which is the most important, reuse than one universal function.

if (Result.IsWinner()) {
    Console.WriteLine(WinString);
} else {
    Console.WriteLine(LoseString);
}

It’s already a duplication! Everything start from such “trivial”, small fragments. It’s so easy to write, just copy-paste. But later you’ll change something, add additional newline output if one branch, etc.

At least, this code should be refactored like this:

Console.WriteLine(Result.IsWinner() ? WinAnswer : LoseAnswer);

Or, even better:

Console.WriteLine(Result.GetMessage());

Tell, Do Not Ask! 

Explicit code is always better than intention hidden in the program logic.

It’s very common situation when you remove duplication you make your code MORE universal.

1.

DO NOT WRITE! 

Why is it bad to invent a bicycle?

First of all, it always creates duplication. 

Very often it creates new defects. Thou shalt not code security related code!

Do not invent the bicycle.

Do not write it yourself. Use the existing solutions.

And, of course, use means ‘include’, but not ‘copy-paste’. 
2.

Your functions should be tiny. 

The size of the function is measured in lines of code. The standard recommendation is to keep your lines less than 80 symbols. 81 or 82 is not a problem, of course, it’s just a recommendation not a strict rule.

You have to give you functions detailed understandable names. 


The tiny function is up to 5 lines.

If function consists of 6 lines or more, it’s called a big function.

More than 10 lines is a serious design error.

Again: up to 5 lines of code.

In general, 5 is worse than 4, 4 is worse than 3, … 1 is worse than 0.

Tiny functions gives you ability to reuse them. 

The second reason to use tiny function is readability.

Debug simplicity. 

Optimisation simplicity. 

Low cyclomatic complexity.

Tiny function can easily be covered by unit tests. 

It’s extremely difficult to squeeze a homemade bicycle into a tiny function. 

The size of functions is a very good metric for code quality, because it can easily be estimated without specific tools. You just look at the code and you see if methods and tiny or big. 


---
***
***
---
###
$$
short - summery
$$
~~~
short summery
~~~

```
short summery
```

Short summary

???

>d
>>SDD

<<

...
,,,
ddd