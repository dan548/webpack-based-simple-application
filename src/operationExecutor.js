'use strict';

class OperationExecutor {
  constructor() {
    this.state = {
      0: this.firstTaskExecute.bind(this),
      1: this.secondTaskExecute.bind(this),
      2: this.thirdTaskExecute.bind(this),
      3: this.fourthTaskExecute.bind(this),
      4: this.fifthTaskExecute.bind(this),
      5: this.sixthTaskExecute.bind(this),
      6: this.seventhTaskExecute.bind(this),
      7: this.eighthTaskExecute.bind(this),
      8: this.ninthTaskExecute.bind(this),
      9: this.tenthTaskExecute.bind(this),
    };
  }

  /**
   * Execute some transformation of incoming arg
   * @param actionType – type of transformation
   * @param arg – incoming arg
   * @returns object with result
   */
  execute(actionType, arg) {
    return this.state[actionType](arg);
  }

  /**
   * First task of homework
   * @param arg – object with value that you should clone
   * arg = { obj1: { ... } }
   * @returns object that contains source object and his modified clone
   */
  firstTaskExecute(arg) {
    /**
     * Place your code here
     */
    let clone = Object.assign({}, arg);
    clone['obj1']['firstName'] = "ab";
    return clone /* variable with result */;
  }

  /**
   * Second task of homework
   * @param arg – object with values that you should combine
   * arg = { obj1: { ... }, obj2: { ... } }
   * @returns object that contains source objects and their combined and modified clone
   */
  secondTaskExecute(arg) {
    /**
     * Place your code here
     */
    let clone = Object.assign({}, arg['obj1'], arg['obj2']);
    let result = Object.assign({});
    result['clone'] = clone;
    result['obj1'] = arg['obj1'];
    result['obj2'] = arg['obj2'];
    return result;
  }

  /**
   * Third task of homework
   * @param arg – object with value that you should modify
   * arg = { obj1: { ... } }
   * @returns object that contains modified source object
   */
  thirdTaskExecute(arg) {
    /**
     * Place your code here
     */
    const addGender = (arr) => arr.map(function (man) {
      if (man['lastName'] === 'Ivanova') {
        man['gender'] = 'female';
      } else {
        man['gender'] = 'male';
      }
      return man;
    });
    addGender(arg['obj1']['relatives']);
    return arg /* variable with result */;
  }

  /**
   * Fourth task of homework
   * @param arg – object with value that contains relatives
   * arg = { obj1: { ... relatives: [ ... ] ... } }
   * @returns object that contains array of string with female relatives
   */
  fourthTaskExecute(arg) {
    /**
     * Place your code here
     */
    const female = arg['obj1']['relatives'].filter(human => human['gender'] === 'female');
    const greet = (arr) => arr.map(function (man) {
      return `Hello, ${man['firstName']} ${man['lastName']}!`;
    });
    return greet(female) /* variable with result */;
  }

  /**
   * Fifth task of homework
   * @param arg – object which contains new color of the button and the class of it
   * arg = { color: '...', className: '...' }
   * @returns string which contains the class of the button and current color
   */
  fifthTaskExecute(arg) {
    /**
     * Place your code here
     */
    let x = document.getElementsByClassName(arg['className']);
    x[0].style.backgroundColor = arg['color'];
    return `${x[0].className} ${x[0].style.backgroundColor}`;
  }

  /**
   * Sixth task of homework
   * @param arg – object with values that you should handle
   * arg = { obj1: { ... } }
   * @returns object that contains array of items that match the hostname on which the application is running
   */
  sixthTaskExecute(arg) {
    /**
     * Place your code here
     */
    const hosts = arg['hostNames'].filter(host => host === location.hostname);
    return Object.assign({}, [hosts]);
  }

  /**
   * Seventh task of homework
   * @param arg – object which contains simple key-value pairs
   * arg = { obj1: { key: value } }
   * @returns obj that contains swap pairs ('value: key')
   */
  seventhTaskExecute(arg) {
    /**
     * Place your code here
     */
    for (let x in arg) {
      if (arg.hasOwnProperty(x)) {
        arg[ arg[x] ] = x;
        delete(arg[x]);
      }
    }
    return arg;
  }

  /**
   * Eighth task of homework
   * @param arg – object which contains two array
   * arg = { obj1: { ... } }
   * @returns obj that built using array's values
   */
  eighthTaskExecute(arg) {
    /**
     * Place your code here
     */
    let clone = [...arg['arr1'], ...arg['arr2']];
    let result = Object.assign({});
    for (let i = 0; i < (clone.length + 1) / 2; i++) {
      result[ clone[i * 2] ] = clone[i * 2 + 1];
    }
    if (clone.length % 2 === 1) {
      result[ clone[clone.length - 1] ] = "null";
    }
    return result;
  }

  /**
   * Ninth task of homework
   * @param arg – object which contains array of users
   * arg = { obj1: { users: [...] } }
   * @returns obj that contains pairs id: obj with this id
   */
  ninthTaskExecute(arg) {
    /**
     * Place your code here
     */
    let result = Object.assign({});

    for (let i = 0; i < arg['users'].length; i++) {
      result [ arg['users'][i]['id'] ] = arg['users'][i];
    }
    return result;
  }

  /**
   * Tenth task of homework
   * @param arg – object which contains class of item and empty array
   * arg = { obj1: { ... } }
   * @returns obj that contains the array with info about children of the node
   */
  tenthTaskExecute(arg) {
    /**
     * Place your code here
     */
    let x = document.getElementsByClassName(arg['className'])[0].children;
    for (let i = 0; i < x.length; i++) {
      arg['childrenInfo'].push({
        tagName: x[i].tagName,
        className: x[i].className,
      });
    }
    return arg;
  }
}

export default OperationExecutor;
