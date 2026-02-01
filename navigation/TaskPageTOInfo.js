import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TasksPage from '../components/TasksPage';
import TaskInfo from '../components/TaskInfo';

const Stack = createNativeStackNavigator();

const TaskPageTOInfo = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="TasksPage" 
        component={TasksPage} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="TaskInfo" 
        component={TaskInfo} 
        options={{ headerShown: false, title: 'Task Details' }} 
      />
    </Stack.Navigator>
  );
};



export default TaskPageTOInfo;