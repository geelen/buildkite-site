// Fix for:
// https://github.com/airbnb/enzyme/issues/928

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });