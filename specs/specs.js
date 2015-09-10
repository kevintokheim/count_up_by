describe('countUp', function() {
  it("is divisible by the multiple", function(){
    expect(countUp(30, 5)).to.eql('5, 10, 15, 20, 25, 30');
  });

  it("is not divisible by the multiple", function(){
    expect(countUp(50, 7)).to.eql('7, 14, 21, 28, 35, 42, 49');
  });

  it("does not allow the user to enter a multiple larger than the number to count to", function(){
    expect(countUp(50, 51)).to.equal("Please enter a number that is smaller than the number you want to count to.");
  });
});
