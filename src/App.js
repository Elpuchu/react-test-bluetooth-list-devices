import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [message, setMessage] = useState('');

  const onDisconnected = event => {
    alert(`The device ${event.target} is disconnected`);
    setIsDisconnected(true);
  };

  const addText = text => {
    setMessage(message + '\n' + text);
  };

  async function requestDevice() {
    addText('printing...');
    try {
      /*const bluetoothDevice = await navigator.bluetooth.requestDevice({
        // filters: [ { name: 'Device test' } ],
        acceptAllDevices: true,
        optionalServices: [
          'battery_service',
          '03b80e5a-ede8-4b33-a751-6ce34ec4c700'
        ]
      });

      bluetoothDevice.addEventListener(
        'gattserverdisconnected',
        onDisconnected
      );

      // Try to connect to the remote GATT Server running on the Bluetooth device
      const server = await bluetoothDevice.gatt.connect();*/
      await navigator.bluetooth
        .requestDevice({
          // filters: [ { name: 'Device test' } ],
          acceptAllDevices: true,
          optionalServices: [
            'battery_service',
            '03b80e5a-ede8-4b33-a751-6ce34ec4c700'
          ]
        })
        .then(device => {
          /*addText('> Name:             ' + device.name);
          addText('> Id:               ' + device.id);
          addText('> Connected:        ' + device.gatt.connected);*/
          addText(
            'Name:' +
              device.name +
              ' - Id:' +
              device.id +
              ' - Connected:' +
              device.gatt.connected
          );
        })
        .catch(error => {
          addText('Argh! ' + error);
        });
    } catch (error) {
      console.error(error);
      addText(error);
    }
  }

  return (
    <div>
      <h1>Prueba lista de dispositivos para la Srta Milagros</h1>
      <button onClick={requestDevice}>Holi!, ver dispositivos BT</button>
      <div>{message}</div>
    </div>
  );
}
