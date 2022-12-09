import React, { useState } from 'react';
import { Dialog } from '@capacitor/dialog';
import { Toast } from '@capacitor/toast';
import { Device } from '@capacitor/device';

const showAlert = async () => {
  await Dialog.alert({
    title: 'Stop',
    message: 'this is an error',
  });
};

const showConfirm = async () => {
  const { value } = await Dialog.confirm({
    title: 'Confirm',
    message: `Are you sure you'd like to press the red button?`,
  });

  console.log('Confirmed:', value);
};

const showPrompt = async () => {
  const { value, cancelled } = await Dialog.prompt({
    title: 'Hello',
    message: `What's your name?`,
  });

  console.log('Name:', value);
  console.log('Cancelled:', cancelled);
};

const logDeviceInfo = async () => {
  const info = await Device.getInfo();

  console.log(info);
};

const Hello = () => {
  const [battery, setBattery] = useState<number | undefined>(0);

  const logBatteryInfo = async () => {
    const info = await Device.getBatteryInfo();

    setBattery(Number(info.batteryLevel?.toFixed(2)) || 0);
  };

  return (
    <div>
      <p>Battery : {battery}</p>
      <button onClick={logBatteryInfo}>Show Battery Info</button>
      <button onClick={showAlert}>Click Me</button>
      <br />
      <button
        onClick={async () => {
          await Toast.show({
            text: 'Your data is lost and cannot be recovered!',
          });
        }}
      >
        Hola Hola
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cum fuga
        inventore facilis vero ad ex harum temporibus natus nihil minima,
      </p>
    </div>
  );
};

export default Hello;
