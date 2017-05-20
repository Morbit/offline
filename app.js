// проверим, поддерживает ли браузер service Worker

if ('serviceWorker' in navigator) {
  // регистрируем, если поддерживается

  navigator.serviceWorker.register('sw.js').then(function (reg) {

    if(reg.installing) {
      console.log('Установка сервис воркера');
    } else if(reg.waiting) {
      console.log('Сервис воркер установлен');
    } else if(reg.active) {
      console.log('Сервис воркер активен');
    }

  })
}
