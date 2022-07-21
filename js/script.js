const forms = document.querySelector(".forms"),
  pwdShowHide = document.querySelectorAll(".eye-icon"),
  menuBtn = document.querySelector(".menu-btn"),
  userBtn = document.querySelector(".user-menu-btn"),
  userMenu = document.querySelector(".menu"),
  sidebarBtn = document.querySelector(".sidebar-btn"),
  sideBar = document.querySelector(".sidebar"),
  links = document.querySelectorAll(".link");

// password show and hide Starts here
pwdShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(
      ".form-input-password"
    );

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
      return;
    });
  });
});
// password show and hide Ends here

//  Menu btn and User Menu button Starts here
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.toggle("show-signup");
  });
});

let sidebarOpen = false;
sidebarBtn.addEventListener("click", () => {
  if (!sidebarOpen) {
    sideBar.classList.add("open");
    sidebarOpen = true;
  } else {
    sideBar.classList.remove("open");
    sidebarOpen = false;
  }
});

let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
// Menu btn and User Menu button Ends here

// Filter Table or Search table
document.querySelector("#searchBox").addEventListener('input', filterList);

function filterList() {
    const searchInput = document.querySelector('#searchBox');
    const filter = searchInput.value.toLowerCase();
    const listItem = document.querySelectorAll('tbody tr');

    listItem.forEach((item) => {
        let text = item.textContent;
        if (text.toLowerCase().includes(filter.toLowerCase())) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

searchBox.addEventListener("input", function (filterList) {
    const searchInput = document.querySelector("#searchBox"),
        filter = searchInput.value.toLowerCase(),
        rows = document.querySelectorAll('.table-data');

    rows.forEach((row) => {
        let text = row.textContent;

        if (text.toLowerCase().includes(fliter.toLowerCase())) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        };
    })
});
// End of Search Filter