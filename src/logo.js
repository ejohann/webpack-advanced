import Heading from './components/heading/heading';
import Hdlogo from './hd-logo/hd-logo';
import _ from 'lodash';


const heading = new Heading();
heading.render(_.upperFirst('hd logo'));

const hdlogo = new Hdlogo();
hdlogo.render();