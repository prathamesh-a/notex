import {toast} from "react-toastify";

function toast_info(text, mode) {
    toast.info(text, {
        position: "top-right",
        autoClose: 1500,
        theme: mode
    })
}

function toast_success(text, mode) {
    toast.success(text, {
        position: "top-right",
        autoClose: 1500,
        theme: mode
    })
}

function toast_failed(text, mode) {
    toast.error(text, {
        position: "top-right",
        autoClose: 1500,
        theme: mode
    })
}

export {toast_info, toast_success, toast_failed}