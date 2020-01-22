function TOH(n, source, dest, via) {
  if (n >= 1) {
    // Move a tower of n-1 to the buffer peg, using the destination peg.
    TOH(n - 1, source, via, dest);

    // Move the remaining disk to the destination peg.
    console.log("Move disk from Tower ", source, " to Tower ", dest);

    // Move the tower of `n-1` from the `buffer peg` to the `destination peg` using the `source peg`.
    TOH(n - 1, via, dest, source);
  }

  return;
}

TOH(3, "A", "C", "B");
