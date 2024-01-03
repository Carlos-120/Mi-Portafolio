// CustomAlert.js
import React, { useState, useEffect } from 'react';
import './CustomAlert.css'; // Archivo para estilos
import { useTranslation } from 'react-i18next';

const CustomAlert = ({  onClose, show }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    }
  }, [show]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div className={`custom-alert ${isVisible ? 'visible' : 'hidden'}`}>
      <p>{t('home_alert')}</p>
      <button onClick={handleClose}>Cerrar</button>
      <button onClick={() => {
  handleClose(); // Cierra la alerta antes de redirigir
  window.location.href = '#contact'; // Cambia la ubicación de la página al destino deseado
}}>Aceptar</button>
    </div>
  );
};

export default CustomAlert;
