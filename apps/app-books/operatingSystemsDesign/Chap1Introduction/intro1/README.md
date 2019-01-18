```
date >file
```

Similarly, standard input can be redirected, as in which invokes the sort program with input taken from file1 and output sent to file2.

```
sort <file1 >file2
```

The output of one program can be used as the input for another program by connecting them
with a pipe. Thus

```
cat file1 file2 file3 | sort >/dev/lp
```

If a user puts an ampersand after a command, the shell does not wait for it to complete. Instead
it just gives a prompt immediately. Consequently, starts up the sort as a background job,
allowing the user to continue working normally while the
sort is going on.

```
cat file1 file2 file3 | sort >/dev/lp &
```
