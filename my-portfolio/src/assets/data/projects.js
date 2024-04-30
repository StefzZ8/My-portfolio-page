import { v4 as uuidv4 } from 'uuid';
import AdviceGenerator from '../images/Advice-generator.png';
import Newsletter from '../images/Newsletter-Signup.png';
import TimeTrackingDashboard from '../images/Time-tracking-dashboard.png';


const projects = [
  {
    id: uuidv4(),
    name: 'Advice Generator App',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: AdviceGenerator,
    repository: 'https://github.com/StefzZ8/FrontEnd-Mentor-mini-projects/tree/main/advice-generator-app-main',
    website: ''
  },
  {
    id: uuidv4(),
    name: 'Newsletter Signup ',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: Newsletter,
    repository: 'https://github.com/StefzZ8/Newsletter-sign-up',
    website: 'https://stefzz8.github.io/Newsletter-sign-up/'
  },
  {
    id: uuidv4(),
    name: 'Time Tracking Dashboard',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: TimeTrackingDashboard,
    repository: '',
    website: ''
  },
  {
    id: uuidv4(),
    name: 'Time Tracking Dashboard',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: TimeTrackingDashboard,
    repository: '',
    website: ''
  },
  {
    id: uuidv4(),
    name: 'Time Tracking Dashboard',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: TimeTrackingDashboard,
    repository: '',
    website: ''
  }
];

export default projects;