import type { Book } from "../types/BookTypes";

const books: Book[] = [
  {
    id: "ddia",
    title: "Designing Data Intensive Applications",
    author: "Martin Kleppmann",
    cover: "ddia.jpg",
    currentlyReading: true,
    review: ["Currently reading this so no review at the moment"],
  },
  {
    id: "ostep",
    title: "Operating Systems Three Easy Pieces",
    author: "Remzi Arpaci-Dusseau, Andrea Arpaci-Dusseau",
    cover: "ostep.jpg",
    review: [
      "A total eye opener. Completely changed how I look at programs and computers in general. A lot of de-mystification, clear explainations and excellent readability -courtesy of the writers humor.",
      'First two parts (virtualization and concurrency) should honestly be read by anyone who calls themselves a "developer" ',
      "The third part (persistence), although still excellent, was really difficult to wrap my head around since the topics are short and diverse. Will have a look at it again in the future.",
    ],
  },
  {
    id: "itm",
    title: "Inside the Machine",
    author: "Jon Stokes",
    cover: "itm.jpg",
    review: [
      "Was a fun one to read for me. Taught me a lot of concepts which were alien to me prior to it like pipelining, bubbling, why caches matter etc.",
      "The book covers a lot of real material like Pentium 4 and Core 2 Duo, which were inside my dad's computers at times when I was a kid, so it was both a pivot to the past and some nostalgia too.",
    ],
  },
  {
    id: "cmodern",
    title: "C Programming a Modern Approach",
    author: "K.N. King",
    cover: "cmodern.jpg",
    review: [
      "Bought and read this book to re-sharpen my skills in C, also to prepare myself to read Opearting Systems Three Easy Pieces. ",
      "Though, later I realized I enjoy writing in C and systems more than I do with web stuff. It makes me feel smarter (okay, don't laugh) ",
      "I really love the fact that it had excercises at the end of each section. Though some sections are unnecessary to read (like wchar support)  and should be skipped as that is a reference book.",
    ],
  },
  {
    id: "sicp",
    title: "Structure and Interpretation of Computer Programs",
    author: "Harold Abelson, Gerald Jay Sussman, Julie Sussman",
    cover: "sicp.jpg",
    review: [
      "A complete paradigm shift from what I was used to. A lot of math based examples, so it can get boring or mind numbing very fast at times. Writing in racket (lisp) does not help to the eyes either",
      "Though, I was legitimately perplexed by the fact that we can store any data as functions.",
      "Will come back to this one day again, as I feel like I couldn't quite ingest it fully.",
    ],
  },
  {
    id: "javabible",
    title: "Introduction to Java Programming and Data Structures",
    author: "Y. Daniel Liang",
    cover: "javabible.jpg",
    review: [
      "It all started with this. After the first programming lecture in my freshman year, I felt insecure about my whether I will be able to graduate from the university, and started reading it. Cover to cover. Rest is history.",
      "Holds a very special place in my heart as it gave birth to my career. Very good explanations, altough somewhat of a heavy book (1200+ pages!!).",
      "Excercises are excellent. A lot of coding examples too. Easiest recommendation of my life to anyone who really wants to learn Java.",
    ],
  },

  {
    id: "effc",
    title: "Effective C",
    author: "Robert C. Seacord",
    cover: "effc.jpg",
    plannedToRead: true,
  },
  {
    id: "fluentc",
    title: "Fluent C: Principles, Practices and Patterns",
    author: "Christopher Preschern",
    cover: "fluentc.jpg",
    plannedToRead: true,
  },
  {
    id: "lpi",
    title: "The Linux Programming Interface",
    author: "Michael Kerrisk",
    cover: "lpi.jpg",
    plannedToRead: true,
  },
  {
    id: "lkd",
    title: "Linux Kernel Development",
    author: "Robert Love",
    cover: "lkd.jpg",
    plannedToRead: true,
  },
  {
    id: "tcpbible",
    title: "TCP/IP Illustrated Volume 1, The Protocols",
    author: "W. Richard Stevens",
    cover: "tcpbible.jpg",
    plannedToRead: true,
  },
];
export default books;
