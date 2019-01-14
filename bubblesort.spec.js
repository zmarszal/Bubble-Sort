describe('Bubble Sort', function(){
//

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('Sorts the array from smallest to largest', function(){
    expect(bubbleSort([5,7,2,4])).toEqual([2,4,5,7])
  });
  it('It compares all numbers in an array', function(){
    expect(comparisonCounter).toEqual(6);
  });

});

