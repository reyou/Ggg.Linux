By the early 1960s, most computer manufacturers had two distinct, and totally incompatible,
product lines. On the one hand there were the word-oriented, large-scale scientific computers,
such as the 7094, which were used for numerical calculations in science and engineering. On the
other hand, there were the character-oriented, commercial computers, such as the 1401, which
were widely used for tape sorting and printing by banks and insurance companies.
Developing, maintaining, and marketing two completely different product lines was an expensive
proposition for the computer manufacturers. In addition, many new computer customers initially
needed a small machine but later outgrew it and wanted a bigger machine that had the same
architectures as their current one so it could run all their old programs, but faster.

The greatest strength of the "one family" idea was simultaneously its greatest weakness. The
intention was that all software, including the operating system, OS/360, had to work on all
models. It had to run on small systems, which often just replaced 1401s for copying cards to
tape, and on very large systems, which often replaced 7094s for doing weather forecasting and
other heavy computing. It had to be good on systems with few peripherals and on systems with
many peripherals. It had to work in commercial environments and in scientific environments.
Above all, it had to be efficient for all of these different uses.

The history of UNIX has been told elsewhere (e.g., Salus, 1994). Because the source code was
widely available, various organizations developed their own (incompatible) versions, which led to
chaos. Two major versions developed, System V, from AT&T, and BSD, (Berkeley Software
Distribution) from the University of California at Berkeley. These had minor variants as well, now
including FreeBSD, OpenBSD, and NetBSD. To make it possible to write programs that could run
on any UNIX system, IEEE developed a standard for UNIX, called POSIX, that most versions of
UNIX now support. POSIX defines a minimal system call interface that conformant UNIX systems
must support. In fact, some other operating systems now also support the POSIX interface. The
information needed to write POSIX-compliant software is available in books (IEEE, 1990; Lewine,
1991), and online as the Open Group's "Single UNIX Specification" at www.unix.org. Later in this
chapter, when we refer to UNIX, we mean all of these systems as well, unless stated otherwise.
While they differ internally, all of them support the POSI X standard, so to the programmer they
are quite similar.

One of these people was a Finnish student named Linus Torvalds. Torvalds installed MINIX on his
new PC and studied the source code carefully. Torvalds wanted to read USENET newsgroups (such
as comp.os.minix) on his own PC rather than at his university, but some features he needed were
lacking in MINIX, so he wrote a program to do that, but soon discovered he needed a different
terminal driver, so he wrote that too. Then he wanted to download and save postings, so he
wrote a disk driver, and then a file system. By Aug. 1991 he had produced a primitive kernel. On
Aug. 25, 1991, he announced it on comp.os.minix. This announcement attracted other people to
help him, and on March 13, 1994 Linux 1.0 was released. Thus was Linux born.
Linux has become one of the notable successes of the open source movement (which MINIX
helped start). Linux is challenging UNIX (and Windows) in many environments, partly because
commodity PCs which support Linux are now available with performance that rivals the
proprietary RISC systems required by some UNIX implementations. Other open source software,
notably the Apache web server and the MySQL database, work well with Linux in the commercial
world. Linux, Apache, MySQL, and the open source Perl and PHP programming languages are
often used together on web servers and are sometimes referred to by the acronym LAMP. For
more on the history of Linux and open source software see DiBona et al. (1999), Moody (2001),
and Naughton (2000).

