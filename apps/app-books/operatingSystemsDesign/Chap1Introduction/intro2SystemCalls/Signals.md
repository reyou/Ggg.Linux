### Signals

s = sigaction (sig, &act, &oldact)
Define action to take on signals

s = sigreturn (&context)
Return from a signal

s = sigprocmask (how, &set, &old)
Examine or change the signal mask

s = sigpending (set)
Get the set of blocked signals

s = sigsuspend (sigmask)
Replace the signal mask and suspend the process

s = kill (pid, sig)
Send a signal to a process

residual = alarm (seconds)
Set the alarm clock

s = pause ()
Suspend the caller until the next signal
