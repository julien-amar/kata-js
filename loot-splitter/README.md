# Splitting the loots

You, and your trusty band of adventurers, have stumbled upon a hidden cache of rubies! (What luck, eh?).  
Not all gems are created equal, so you sneak them home and take your time evaluating the stones.  
The find was an equal effort, and you're all horribly greedy, so you must find a fair system for dividing up the gems.  
  
This week's challenge is to write a program that fairly divides treasures, based on worth.  
  
The first command-line argument to the program will be the number of adventures.  
All other arguments are the numerical values of treasures found.  
Your program should output a fair split of the treasures, if possible, or a warning message if a fair split cannot be found.  
  
Examples:  
  
```
3 1 2 3 4
It is not possible to fairly split this treasure 3 ways.

2 9 12 14 17 23 32 34 40 42 49
1:  9 12 32 34 49
2:  14 17 23 40 42
```
