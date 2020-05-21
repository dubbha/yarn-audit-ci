function parseThreshold(args) {
  switch (args[0]) {
    case '--info':
    case '-i':
      return 1;
    case '--low':
    case '-l':
      return 2;
    case '--moderate':
    case '-m':
      return 4;
    case '--high':
    case '-h':
      return 8;
    case '--critical':
    case '-c':
    default:
      return 16;
  }
}

module.exports = { parseThreshold }
