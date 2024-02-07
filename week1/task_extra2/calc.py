"""

SECOND OPTIONAL SMALL TASK without the number (just for fun — 
    if you like use code for solving math problems; 
    it's arguably will not teach you anything as a coder,
    but just to flex your "engineering" muscles and to learn how to design algorithms)

Find the longest natural number represented in hex as d₁d₂d₃...dₙ 
    (each dᵢ is a single hex digit; repetitions are possible) 
    such that d₁d₂...dₖ when divided by k gives the remainder k-1 
    for all k≤n and the middle digit of the number is 3.

"""
"""
natural num = 1,2,3 to inf  # all positive integers from 1 to infinity.
hex = 0-9 + a b c d e f
d1 t0 dn
d1 % 1 = 1-1 = 0
d2 % 2 = 2-1 = 1
d3 % 3 = 2
d4 % 4 = 3
d5 % 5 = 4
d6 % 6 = 5
9999
half = len(num) //2 
num[half] = 3 

"""


def calc(n):
    middle_digit = '3'
    for 

n = 40  # n as given in the problem
longest_hex_number = calc(n)
print("The longest natural number in hex meeting the conditions is:", longest_hex_number)