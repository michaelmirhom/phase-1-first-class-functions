function  receivesAFunction(something){
    return something();
}
receivesAFunction();
function returnsANamedFunction() {
    return function beforeAll() {
      console.log('before all');
    };
  }
  function returnsAnAnonymousFunction(){
    return function () {
        console.log("anonymous function");
        
    }

  }