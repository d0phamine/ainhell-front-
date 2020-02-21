import React from 'react';
import {Route} from "react-router-dom"
import {Cardlist} from 'components'
import {Auth, General, Profile} from 'pages';



function App() {

  const sendNotification = (title,options) => {
    if (!("Notification" in window)) {
        alert('Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.');
    }
  
    // Проверим, есть ли права на отправку уведомлений
    else if (Notification.permission === "granted") {
        // Если права есть, отправим уведомление
        let notification = new Notification(title, options);
        const clickFunc = () => { alert('Пользователь кликнул на уведомление'); }
            notification.onclick = clickFunc;
    }
    // Если прав нет, пытаемся их получить
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            // Если права успешно получены, отправляем уведомление
            if (permission === "granted") {
                let notification = new Notification(title, options);
            } 
            else {
                alert('Вы запретили показывать уведомления'); // Юзер отклонил наш запрос на показ уведомлений
            }
        });
    }
    else {
        // Пользователь ранее отклонил наш запрос на показ уведомлений
        // В этом месте мы можем, но не будем его беспокоить. Уважайте решения своих пользователей.
        }
  }

  return (
    <div className="wrapper">
      {
        sendNotification(' Новое аниме ',{
          body:"андрюха толстый"
        })
      }
      <Route exact path={["/profile"]} component={Profile}/>
      <Route exact path={["/login", "/register"]} component={Auth} />
      <Route exact path="/" component={General}/>

      
    </div>
  );
}

export default App;
