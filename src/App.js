import React from 'react';
import './style.css';

export default function App() {
  const onDisconnected = event => {
    alert(`The device ${event.target} is disconnected`);
    setIsDisconnected(true);
  };

  async function requestDevice() {
    console.log('imprimiendo...');
    try {
      let bluetoothDevice = await navigator.bluetooth.requestDevice({
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
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <div>
      <h1>Prueba lista de dispositivos para la Srta Milagros</h1>
      <button onClick={requestDevice}>Holi!, ver dispositivos BT</button>
    </div>
  );
}
