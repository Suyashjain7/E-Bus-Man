function adminLogin() {
    const adminEmail = "admin@example.com";
    const adminpass = "pass@123"
     if (email === adminEmail && password === adminpass) {
    document.getElementById("message").innerText = "Login successful!";
  } else {
    document.getElementById("message").innerText = "Unauthorized access!";
  }
}

function createDriver() {
    const email = document.getElementById("newDriverEmail").value;
    const password = document.getElementById("newDriverPassword").value;
    alert(`Driver account created for: ${email}`);
}

function driverLogin() {
    const email = document.getElementById("driverEmail").value;
    const password = document.getElementById("driverPassword").value;
    alert(`Driver logged in with: ${email}`);
}

function submitBusInfo() {
    const type = document.getElementById("busType").value;
    const details = document.getElementById("busDetails").value;
    const contact = document.getElementById("contactDetails").value;
    alert(`Bus Info: Type=${type}, Details=${details}, Contact=${contact}`);
}

function registerUser() {
    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("lastName").value;
    const email = document.getElementById("userEmail").value;
    alert(`User registered: ${fname} ${lname}, Email=${email}`);
}

function loginUser() {
    const email = document.getElementById("userLoginEmail").value;
    alert(`User logged in: ${email}`);
}

function searchBus() {
    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;
    alert(`Searching buses from ${source} to ${destination}`);
}
