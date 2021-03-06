// get health of application
exports.getLoad = (req, res, next) => {
  const load = req.params.load;
  req.setTimeout(0);
  const iterations = load;
  const multiplier = 1000000000;

  function calculatePrimes(iterations, multiplier) {
    var primes = [];
    for (var i = 0; i < iterations; i++) {
      var candidate = i * (multiplier * Math.random());
      var isPrime = true;
      for (var c = 2; c <= Math.sqrt(candidate); ++c) {
        if (candidate % c === 0) {
          // not prime
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(candidate);
      }
    }
    res.send(".");
   
  }

  function doPointlessComputationsWithBlocking() {
    var primes = calculatePrimes(iterations, multiplier);
    //console.log(primes);
  }
  doPointlessComputationsWithBlocking();
};

