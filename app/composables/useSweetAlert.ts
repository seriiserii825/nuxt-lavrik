import Swal from "sweetalert2";
export default function useSweetAlert(
  icon: string,
  title: string,
  text: string = '',
  confirmButtonText: string = "Ok"
) {
  Swal.fire({
    toast: true,
    position: "top-end",
    timer: 5000,
    timerProgressBar: true,
    title,
    text,
    icon,
    confirmButtonText,
    theme: "borderless",
  });
}
