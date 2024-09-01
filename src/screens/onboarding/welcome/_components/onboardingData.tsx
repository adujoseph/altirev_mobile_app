import {ImageProps} from 'react-native';
import OnboardingImage1 from '../../../../assets/svg/Onboarding1';
import { ReactNode } from 'react';

export interface OnboardingData {
  id: number;
  image: ReactNode;
  text: string;
  describe: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    image: <OnboardingImage1 />,
    text: 'View Live Election Results',
    describe: "You can stay updated with live election results right within our app, providing real-time information on vote counts, candidate standings, and overall progress",
    textColor: '#f8dac2',
    backgroundColor: '#154f40',
  },
  {
    id: 2,
    image:  <OnboardingImage1 />,
    text: 'Join the team that ensures elections are both free and fair',
    describe: 'Your contribution will help uphold the integrity of the electoral process, ensuring that every vote counts.',
    textColor: '#154f40',
    backgroundColor: '#fd94b2',
  },
  {
    id: 3,
    image:  <OnboardingImage1 />,
    text: 'Render Your Opinion About Election Result',
    describe: 'Our app allows transparency and accessibility to the data can reveals trusted and vetted opinions about election result.',
    textColor: 'black',
    backgroundColor: '#f8dac2',
  },
];

export {data};