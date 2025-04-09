export function toast(message: string) {
    if (typeof window !== 'undefined') {
      alert(message); // reemplazá por tu sistema de notificación (ej: react-toastify)
    }
  }
  