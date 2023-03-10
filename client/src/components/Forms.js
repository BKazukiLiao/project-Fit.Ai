import {
  Select,
  Stack,
  Center,
  Textarea,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useState } from 'react';
import './Forms.scss';
import EditableArea from './EditableArea';
import SliderPref from './SliderPref';

export default function Forms() {
  const [fitGoal, setFitGoal] = useState('');
  const [fitLvl, setFitLvl] = useState('');
  const [equip, setEquip] = useState('');
  const [days, setDays] = useState('');
  const [gymPref, setGymPref] = useState(50);


  const handleEvent = (event, setter) => {
    setter(event.target.value);
  };

  return (
    <Center className="forms-ctn">
      <Stack className="stack-ctn">
        <div>Please Enter All Information Below:</div>
        <Stack
          className="stack-inner"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <FormControl>
            <FormLabel>Current Fitness Level:</FormLabel>
            <Select
              isRequired
              value={fitLvl}
              onChange={(e) => handleEvent(e, setFitLvl)}
              placeholder="Please select option"
            >
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>
              How many days of the week would you like to work out?:
            </FormLabel>
            <Select
              isRequired
              value={days}
              onChange={(e) => handleEvent(e, setDays)}
              placeholder="Please select option"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel mb="8px">Describe your fitness goal:</FormLabel>
            <Textarea
              value={fitGoal}
              onChange={(e) => handleEvent(e, setFitGoal)}
              placeholder="Strength? Explosiveness? Weight Loss? Please describe in as much details"
              size="sm"
            />
          </FormControl>
          <FormControl >
            <FormLabel mb="8px">
              Adjust for preference for at home or at gym workouts:
            </FormLabel>
            <SliderPref setGymPref={setGymPref} gymPref={gymPref}/>
          </FormControl>
          <FormControl >
            <FormLabel mb="8px">
              List equipment you have at home, seperate each with new line by pressing Enter key:
            </FormLabel>
            <EditableArea setEquip={setEquip} handleEvent={handleEvent}/>
          </FormControl>
        </Stack>
      </Stack>
    </Center>
  );
}
