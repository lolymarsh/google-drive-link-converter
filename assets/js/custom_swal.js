const showLoading = () => {
    Swal.fire({
      title: "กำลังโหลด...",
      allowOutsideClick: false,
      showCancelButton: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });
  };

  const hideLoading = () => {
    Swal.close();
  };

  const showAlert = (message, icon) => {
    Swal.fire({
      text: message,
      icon: icon,
      buttonsStyling: true,
      confirmButtonText: "ตกลง",
    });
  };
  
const list_swal = {
    showLoading,
    hideLoading,
    showAlert,
};
  
  window.customswal = list_swal;