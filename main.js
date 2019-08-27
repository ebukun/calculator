let number = (value) => {
    document.form.result.value += value
}

let rx = (value) => {
    document.form.result.value = "";
}

let gx = () => {
    let err = "Wrong input"
    try {
        document.form.result.value = eval(document.form.result.value)
    } catch (error) {
        document.form.result.value = err;
    }

}