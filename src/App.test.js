import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
const mockStore = configureStore();
const store = mockStore({
  "sydney_trains_offences": [
    {
      "year": 2013,
      "offence category": [
        {
          "Parking offence": [
            {
              "Number of PNs": 72362
            },
            {
              "Face Values": 8136122
            }
          ],
          "Fare Evasion/False Information": [
            {
              "Number of PNs": 69705
            },
            {
              "Face Values": 13038900
            }
          ],
          "Compliance/Safety/Anti-social/Offensive behaviour": [
            {
              "Number of PNs": 25172
            },
            {
              "Face Values": 6652750
            }
          ],
          "Vehicle offence": [
            {
              "Number of PNs": 652
            },
            {
              "Face Values": 121359
            }
          ],
          "Feet on seat": [
            {
              "Number of PNs": 330
            },
            {
              "Face Values": 35000
            }
          ],
          "Smoking Offence": [
            {
              "Number of PNs": 371
            },
            {
              "Face Values": 87500
            }
          ],
          "Littering Offence": [
            {
              "Number of PNs": 108
            },
            {
              "Face Values": 17860
            }
          ],
          "Animal Offence": [
            {
              "Number of PNs": 91
            },
            {
              "Face Values": 22150
            }
          ]
        }
      ]
    },
    {
      "year": 2014,
      "offence category": [
        {
          "Parking offence": [
            {
              "Number of PNs": 91891
            },
            {
              "Face Values": 9297100
            }
          ],
          "Fare Evasion/False Information": [
            {
              "Number of PNs": 69705
            },
            {
              "Face Values": 13038900
            }
          ],
          "Compliance/Safety/Anti-social/Offensive behaviour": [
            {
              "Number of PNs": 32189
            },
            {
              "Face Values": 7131850
            }
          ],
          "Vehicle offence": [
            {
              "Number of PNs": 781
            },
            {
              "Face Values": 212132
            }
          ],
          "Feet on seat": [
            {
              "Number of PNs": 617
            },
            {
              "Face Values": 61700
            }
          ],
          "Smoking Offence": [
            {
              "Number of PNs": 450
            },
            {
              "Face Values": 100250
            }
          ],
          "Littering Offence": [
            {
              "Number of PNs": 167
            },
            {
              "Face Values": 29150
            }
          ],
          "Animal Offence": [
            {
              "Number of PNs": 123
            },
            {
              "Face Values": 25171
            }
          ]
        }
      ]
    }
  ]
});

describe('renders without crashing', () => {

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store} >
        <App />
      </Provider>
    );
  });

  it('WHEN created EXPECT to have these classNames', () => {
    expect(wrapper.find('.chart')).to.have.length(1);
    expect(wrapper.find('.loading')).to.have.length(1);
  });

  it('WHEN application started, EXPECT to have access to store data', () => {
    expect(store.getState()).to.deep.equal({
      "sydney_trains_offences": [
        {
          "year": 2013,
          "offence category": [
            {
              "Parking offence": [
                {
                  "Number of PNs": 72362
                },
                {
                  "Face Values": 8136122
                }
              ],
              "Fare Evasion/False Information": [
                {
                  "Number of PNs": 69705
                },
                {
                  "Face Values": 13038900
                }
              ],
              "Compliance/Safety/Anti-social/Offensive behaviour": [
                {
                  "Number of PNs": 25172
                },
                {
                  "Face Values": 6652750
                }
              ],
              "Vehicle offence": [
                {
                  "Number of PNs": 652
                },
                {
                  "Face Values": 121359
                }
              ],
              "Feet on seat": [
                {
                  "Number of PNs": 330
                },
                {
                  "Face Values": 35000
                }
              ],
              "Smoking Offence": [
                {
                  "Number of PNs": 371
                },
                {
                  "Face Values": 87500
                }
              ],
              "Littering Offence": [
                {
                  "Number of PNs": 108
                },
                {
                  "Face Values": 17860
                }
              ],
              "Animal Offence": [
                {
                  "Number of PNs": 91
                },
                {
                  "Face Values": 22150
                }
              ]
            }
          ]
        },
        {
          "year": 2014,
          "offence category": [
            {
              "Parking offence": [
                {
                  "Number of PNs": 91891
                },
                {
                  "Face Values": 9297100
                }
              ],
              "Fare Evasion/False Information": [
                {
                  "Number of PNs": 69705
                },
                {
                  "Face Values": 13038900
                }
              ],
              "Compliance/Safety/Anti-social/Offensive behaviour": [
                {
                  "Number of PNs": 32189
                },
                {
                  "Face Values": 7131850
                }
              ],
              "Vehicle offence": [
                {
                  "Number of PNs": 781
                },
                {
                  "Face Values": 212132
                }
              ],
              "Feet on seat": [
                {
                  "Number of PNs": 617
                },
                {
                  "Face Values": 61700
                }
              ],
              "Smoking Offence": [
                {
                  "Number of PNs": 450
                },
                {
                  "Face Values": 100250
                }
              ],
              "Littering Offence": [
                {
                  "Number of PNs": 167
                },
                {
                  "Face Values": 29150
                }
              ],
              "Animal Offence": [
                {
                  "Number of PNs": 123
                },
                {
                  "Face Values": 25171
                }
              ]
            }
          ]
        }
      ]
    }
    )
  });
});
