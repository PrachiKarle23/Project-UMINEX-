function verify() {
    let no = document.getElementById('phn').value;
    let p = document.getElementById('pass').value;
    let c = document.getElementById('cpass').value;
    let n = document.getElementById('username').value;
    let e = document.getElementById('useremail').value;
    if (n.length != 0) {
        if (e.length != 0) {
            if (no.length != 0 || no.length == 10) {
                if (p.length != 0 && c.length != 0) {
                    if (p == c) {
                        let pattern = /.{8,}[a-z][A-Z]\d[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
                        if (!pattern.test(p)) {
                            alert("Weak Password!");
                        }

                    }
                    else {
                        alert("Please, Enter same password!");
                    }
                }
                else {
                    alert("Please, Enter the Password");
                }
            }
            else {
                alert("Invalid Phone Number");
            }
        }
        else {
            alert("Please, enter email");
        }
    }
    else {
        alert("Please, enter your name")
    }

}