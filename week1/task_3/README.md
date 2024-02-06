# task 3

```bash
# install modules
npm i
# run with aguments
npm run dev -- {here you enter arguments}
# example 
npm run dev -- rock paper scissors
```

## link for testing  HMAC online:

`SHA3-256` is used to generate HMAC

[hmac link](https://www.liavaag.org/English/SHA-Generator/HMAC/)

`https://www.liavaag.org/English/SHA-Generator/HMAC/1`


## test cases

```bash
# launch with 3 parameters
npm run dev -- rock paper scissors

# launch with 7 parameters
npm run dev -- rock paper scissors lizard spock 7 8

# launch with 5 parameters
npm run dev -- rock paper scissors lizard spock


# launch with incorrect parameters

# launch with even parameters
npm run dev -- rock paper scissors 3

# launch with one parameter
npm run dev -- rock

# launch with no parameter
npm run dev -- 

```

1) a link to a video demonstrating launch with 3 and 7 parameters, launch with incorrect parameters (repeated or even number, one or no), help table generation (on 5 parameters), choice of the user move, output of results;
2) the link to github in public repository.