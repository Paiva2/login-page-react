import Swal from "sweetalert2";

const alertValidation = (icon, msg) => {
  Swal.fire({
    position: "center",
    icon: icon,
    title: msg,
    showConfirmButton: false,
    timer: 1300,
  });
};

export const confirmAlert = (msg) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1200,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: msg,
  });
};

export default alertValidation;
