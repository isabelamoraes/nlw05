import React, { useEffect } from 'react';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

import { PlantProps } from './src/libs/storage';

import Routes from './src/routes';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  /*useEffect(() => {
    //Recurso para escutar a notificação, ou seja, ver que ela está chegando
    //const subscription = Notifications.addNotificationReceivedListener(
    //  async notification => { //notação de função anonima
    //    const data = notification.request.content.data.plant as PlantProps;
    //    console.log(data);
    //  }
    //);

    //return () => subscription.remove();

    
    async function notifications() {
      //Recurso para visualizar as notificações agendadas no dispositivo
      //const data = await Notifications.getAllScheduledNotificationsAsync();
      //console.log("NOTIFICAÇÕES AGENDADAS");
      //console.log(data);

      //Recurso para cancelar todas as notificações
      //await Notifications.cancelAllScheduledNotificationsAsync();
    }

    notifications();
  },[])*/

  if(!fontsLoaded)
    return <AppLoading />

  return (
    <Routes />
  );
}
