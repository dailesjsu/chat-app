import { useEffect } from 'react';
import { fb } from 'service';

export const App = () => {
  useEffect(() => {
    fb.firestore
      .collection('chatUsers')
      .where('userName', '==', 'DaiLe')
      .get()
      .then(res => {
        const users = res.docs[0]?.data();
        console.log(users);
      });
  }, []);

  return <>Hello from Dai Le .. Test</>;
};