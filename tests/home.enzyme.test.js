/**
 * @jest-environment jsdom
 */
import React from 'react';
import HomeScreen from '../source/Screens/HomeScreen';
import HomeButton from '../source/Components/HomeScreenComponents/CorouselButton';
import { Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8 }  from '../source/Components/HomeScreenComponents/CorouselPages';
import { TextInputLine, TextInputBorder, TextInputBorderRadius, PasswordInput, TextArea  }  from '../source/Components/TextInput/TextInput';

import Corousel from '../source/Components/HomeScreenComponents/Corousel';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";

const userBalance = {
  balance: 1100,
  savingBalance: 103,
}

describe("rendering components", () => {
  it("renders Homescreen component without crashing", () => {
    shallow(<HomeScreen />);
  });
  it("renders HomeButton component without crashing", () => {
    shallow(<HomeButton />);
  });
  it("renders Corousel component without crashing", () => {
    shallow(<Corousel />);
  });
  it("renders Page1 component without crashing", () => {
    shallow(<Page1 />);
  });
  it("renders Page2 component without crashing", () => {
    shallow(<Page2 />);
  });
  it("renders Page3 component without crashing", () => {
    shallow(<Page3 />);
  });
  it("renders Page4 component without crashing", () => {
    shallow(<Page4 />);
  });
  it("renders Page5 component without crashing", () => {
    shallow(<Page5 />);
  });
  it("renders Page6 component without crashing", () => {
    shallow(<Page6 />);
  });
  it("renders Page7 component without crashing", () => {
    shallow(<Page7 />);
  });
  it("renders Page8 component without crashing", () => {
    shallow(<Page8 />);
  });
  it("renders TextInputLine component without crashing", () => {
    shallow(<TextInputLine />);
  });
  it("renders TextInputBorder component without crashing", () => {
    shallow(<TextInputBorder />);
  });
  it("renders TextInputBorderRadius component without crashing", () => {
    shallow(<TextInputBorderRadius />);
  });
  it("renders PasswordInput component without crashing", () => {
    shallow(<PasswordInput />);
  });
  it("renders TextArea component without crashing", () => {
    shallow(<TextArea />);
  });
  
  

  
  
  

  
  
  // it("renders App component header without crashing", () => {
  //   const wrapper = shallow(<HomeScreen />);
  //   const header = (<h1 className="has-text-centered title is-1">Welcome in the personal finance app!</h1>);
  //   expect(wrapper.contains(header)).toEqual(true);
  // });
  // it("renders Notification component without crashing", () => {
  //   shallow(<Notification />);
  // });
  // it("renders button", () => {
  //   const wrapper = mount(<AccountBalance accounts={userBalance} />);
  //   const label = wrapper.find("#balance-button").text();
  //   expect(label).toEqual("Send 100$");
  // });
});


// describe("passing props", () => {
//     const accountWrapper = mount(<AccountBalance accounts={userBalance} />);
//     const notificationWrapper = mount(<Notification balance={userBalance.balance} />);
//     it("accepts user account props", () => {
//       expect(accountWrapper.props().accounts).toEqual(userBalance);
//     });
//     it("contains savingBalance value", () => {
//       const value = accountWrapper.find(".savings").text();
//       const expectedValue = userBalance.savingBalance + "$";
//       expect(value).toEqual(expectedValue);
//     });
//     it("notification accepts props", () => {
//       expect(notificationWrapper.props().balance).toEqual(userBalance.balance);
//     });
//   });


// describe("logic", () => {
//     const wrapper = mount(<AccountBalance accounts={userBalance} />);
//     const notificationWrapper = mount(<Notification balance={userBalance.balance} />);
//     wrapper.find("#balance-button").simulate("click");
//     it("button click - update savings", () => {
//       const savingsValue = wrapper.find(".savings").text();
//       const expectedValue = userBalance.savingBalance + 100 + '$';
//       expect(savingsValue).toEqual(expectedValue);
//     });
//     it("button click - update balance", () => {
//       const balanceValue = wrapper.find(".balance").text();
//       const expectedBalanceValue = userBalance.balance - 100 + '$';
//       expect(balanceValue).toEqual(expectedBalanceValue);
//     });
//   });


// describe("snapshots", () => {
//     it("App snapshot", () => {
//       const tree = shallow(<App/>);
//       expect(toJson(tree)).toMatchSnapshot();
//     });
//     it("Accounts snapshots", () => {
//       const accountBalanceTree = shallow(<AccountBalance accounts={userBalance} />);
//       expect(toJson(accountBalanceTree)).toMatchSnapshot();
//     });
//     it("Notification snapshot", () => {
//       const notificationTree = shallow(<Notification />);
//       expect(toJson(notificationTree)).toMatchSnapshot();
//     });
//   });