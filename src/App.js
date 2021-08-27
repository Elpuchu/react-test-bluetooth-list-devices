import React from 'react';
import './style.css';

const onDisconnected = () => {
  console.log('onDisconnected');
};

async function requestDevice() {
  try {
    let bluetoothDevice = await navigator.bluetooth.requestDevice({
      // filters: [ { name: 'Device test' } ],
      acceptAllDevices: true,
      optionalServices: [
        'battery_service',
        '03b80e5a-ede8-4b33-a751-6ce34ec4c700'
      ]
    });

    bluetoothDevice.addEventListener('gattserverdisconnected', onDisconnected);
  } catch (error) {
    console.error(error);
    alert(error);
  }
}

export default function App() {
  const print = () => {
    console.log('imprimiendo...');
    requestDevice();
  };

  return (
    <div>
      <h1>Prueba lista de dispositivos para la Srta Milagros</h1>
      <button onClick={print}>Holi!, ver dispositivos BT</button>
    </div>
  );
}
