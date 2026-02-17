let slider = document.getElementById("slider");
let box = document.getElementById("box");
let username = document.getElementById("username");
let mainText = document.getElementById("main-text");
let fileInput = document.getElementById("fileInput");
let profileImg = document.getElementById("profile-img");
let outputBox = document.getElementById("output-box");
let changeBtn1Name = document.getElementById("change-btn-1-name");
let btnLink1 = document.getElementById("btn-link-1");
let linkInput = document.getElementById("btn-link");
let changeBtn2Name = document.getElementById("change-btn-2-name");
let btnLink2 = document.getElementById("btn-link-2");
let linkInput2 = document.getElementById("btn-2-link");
let changeBtn3Name = document.getElementById("change-btn-3-name");
let btnLink3 = document.getElementById("btn-link-3");
let linkInput3 = document.getElementById("btn-3-link");
let btnNumberInput = document.getElementById("btn-number");
let otherBtnLinks1 = document.getElementById("other-btn-link-1");
let otherBtnLinks2 = document.getElementById("other-btn-link-2");
let otherBtnLinks3 = document.getElementById("other-btn-link-3");
let otherChangeBtn1 = document.getElementById("other-change-btn-1");
let otherChangeBtn2 = document.getElementById("other-change-btn-2");
let otherChangeBtn3 = document.getElementById("other-change-btn-3");
let otherLink1 = document.getElementById("other-link-1");
let otherLink2 = document.getElementById("other-link-2");
let otherLink3 = document.getElementById("other-link-3");
let textInput = document.getElementById("text-input");
let text2Input = document.getElementById("text-input-2");
let quoteDisplay = document.getElementById("text-1");
let text2 = document.getElementById("text-2");
let fileInputProfile = document.getElementById("fileInput-profile");
let profileImg2 = document.getElementById("profile-img-2");
let socialLink1 = document.getElementById("social-link-1");
let socialLink2 = document.getElementById("social-link-2");
let socialLink3 = document.getElementById("social-link-3");
let socialLink4 = document.getElementById("social-link-4");
let socialLink5 = document.getElementById("social-link-5");
let profileLink1 = document.getElementById("profile-link-1");
let profileLink2 = document.getElementById("profile-link-2");
let profileLink3 = document.getElementById("profile-link-3");
let profileLink4 = document.getElementById("profile-link-4");
let profileLink5 = document.getElementById("profile-link-5");
let otherBtnLabel = document.getElementById("other-btn-label");

slider.addEventListener("input", function () {
  let value = slider.value;
  box.style.width = value + "%";
  box.style.height = value + "auto";
});

username.addEventListener("input", function () {
  //   mainText.textContent = "Welcome, " + username.value + "!";
  mainText.textContent = username.value;
});

fileInput.addEventListener("change", () => {
  let file = fileInput.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function (e) {
      profileImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

changeBtn1Name.addEventListener("input", () => {
  btnLink1.textContent = changeBtn1Name.value;
});

linkInput.addEventListener("input", () => {
  btnLink1.href = "https://" + linkInput.value;
});

changeBtn2Name.addEventListener("input", () => {
  btnLink2.textContent = changeBtn2Name.value;
});

linkInput2.addEventListener("input", () => {
  btnLink2.href = "https://" + linkInput2.value;
});

changeBtn3Name.addEventListener("input", () => {
  btnLink3.textContent = changeBtn3Name.value;
});

linkInput3.addEventListener("input", () => {
  btnLink3.href = "https://" + linkInput3.value;
});

btnNumberInput.addEventListener("input", () => {
  let numberOfButtons = parseInt(btnNumberInput.value);
  if (numberOfButtons === 0) {
    otherBtnLinks1.style.display = "none";
    otherBtnLinks2.style.display = "none";
    otherBtnLinks3.style.display = "none";
    otherChangeBtn1.style.display = "none";
    otherChangeBtn2.style.display = "none";
    otherChangeBtn3.style.display = "none";
    otherLink1.style.display = "none";
    otherLink2.style.display = "none";
    otherLink3.style.display = "none";
    otherBtnLabel.style.display = "none";
  } else if (numberOfButtons === 1) {
    otherBtnLinks1.style.display = "block";
    otherBtnLinks2.style.display = "none";
    otherBtnLinks3.style.display = "none";
    otherChangeBtn1.style.display = "block";
    otherChangeBtn2.style.display = "none";
    otherChangeBtn3.style.display = "none";
    otherLink1.style.display = "block";
    otherLink2.style.display = "none";
    otherLink3.style.display = "none";
    otherBtnLabel.style.display = "block";
  } else if (numberOfButtons === 2) {
    otherBtnLinks1.style.display = "block";
    otherBtnLinks2.style.display = "block";
    otherBtnLinks3.style.display = "none";
    otherChangeBtn1.style.display = "block";
    otherChangeBtn2.style.display = "block";
    otherChangeBtn3.style.display = "none";
    otherLink1.style.display = "block";
    otherLink2.style.display = "block";
    otherLink3.style.display = "none";
    otherBtnLabel.style.display = "block";
  } else if (numberOfButtons === 3) {
    otherBtnLinks1.style.display = "block";
    otherBtnLinks2.style.display = "block";
    otherBtnLinks3.style.display = "block";
    otherChangeBtn1.style.display = "block";
    otherChangeBtn2.style.display = "block";
    otherChangeBtn3.style.display = "block";
    otherLink1.style.display = "block";
    otherLink2.style.display = "block";
    otherLink3.style.display = "block";
    otherBtnLabel.style.display = "block";
  } else {
    otherBtnLinks1.style.display = "none";
    otherBtnLinks2.style.display = "none";
    otherBtnLinks3.style.display = "none";
    otherChangeBtn1.style.display = "none";
    otherChangeBtn2.style.display = "none";
    otherChangeBtn3.style.display = "none";
    otherLink1.style.display = "none";
    otherLink2.style.display = "none";
    otherLink3.style.display = "none";
    otherBtnLabel.style.display = "none";
  }
});

otherChangeBtn1.addEventListener("input", () => {
  otherBtnLinks1.textContent = otherChangeBtn1.value;
});

otherLink1.addEventListener("input", () => {
  otherBtnLinks1.href = "https://" + otherLink1.value;
});

otherChangeBtn2.addEventListener("input", () => {
  otherBtnLinks2.textContent = otherChangeBtn2.value;
});

otherLink2.addEventListener("input", () => {
  otherBtnLinks2.href = "https://" + otherLink2.value;
});

otherChangeBtn3.addEventListener("input", () => {
  otherBtnLinks3.textContent = otherChangeBtn3.value;
});

otherLink3.addEventListener("input", () => {
  otherBtnLinks3.href = "https://" + otherLink3.value;
});

otherBtnLinks1.addEventListener("input", () => {
  otherBtnLinks1.href = "https://" + otherBtnLinks1.value;
});

otherBtnLinks2.addEventListener("input", () => {
  otherBtnLinks2.href = "https://" + otherBtnLinks2.value;
});

otherBtnLinks3.addEventListener("input", () => {
  otherBtnLinks3.href = "https://" + otherBtnLinks3.value;
});

textInput.addEventListener("input", () => {
  quoteDisplay.textContent = textInput.value;
});

text2Input.addEventListener("input", () => {
  text2.textContent = text2Input.value;
});

fileInputProfile.addEventListener("change", () => {
  let file = fileInputProfile.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function (e) {
      profileImg2.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

profileLink1.addEventListener("input", () => {
  socialLink1.href = "https://" + profileLink1.value;
});
profileLink2.addEventListener("input", () => {
  socialLink2.href = "https://" + profileLink2.value;
});
profileLink3.addEventListener("input", () => {
  socialLink3.href = "https://" + profileLink3.value;
});
profileLink4.addEventListener("input", () => {
  socialLink4.href = "https://" + profileLink4.value;
});
profileLink5.addEventListener("input", () => {
  socialLink5.href = "https://" + profileLink5.value;
});
