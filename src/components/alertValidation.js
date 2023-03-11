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

export default alertValidation;
